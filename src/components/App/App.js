import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Landing from "../Landing/Landing";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import NotFound from "../NotFound/NotFound";
import context from "../../context/context";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import api from "../../utils/myApi";
import getMovies from "../../utils/sideApi";
import { textSearch } from "../../utils/searchFilms";
import Error from "../Error/Error";

function App() {
  const navigation = useNavigate();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function logIn() {
    setIsLoggedIn(true);
  }

  function logOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigation("/");
  }

  function showError(err) {
    setError(true);
    setErrorMessage(JSON.parse(err.message).message);
    setTimeout(() => {
      setError(false);
      setErrorMessage("");
    }, 3000);
  }

  function showSuccess() {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  /*авторизация*/
  useEffect(() => {
    checkToken();
  }, []);

  function checkToken() {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      setIsLoggedIn(false);
      return;
    } else {
      return api
        .auth()
        .then((res) => {
          setUser(res.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          showError(err);
          setIsLoggedIn(false);
        });
    }
  }

  /*отслеживаю размер окна*/
  function windowResize() {
    setTimeout(() => setWindowSize(window.innerWidth), 1000);
  }

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  /*регистрация пользователя*/
  function addUser(data) {
    api
      .addUser(data)
      .then(() => {
        loginUser({ email: data.email, password: data.password });
      })
      .catch((err) => showError(err));
  }

  /*авторизация по логин-паролю*/
  function loginUser(data) {
    api
      .login(data)
      .then((res) => {
        localStorage.setItem("token", res.jwt);
      })
      .then(() => {
        checkToken()
          .then(() => navigation("movies"))
          .catch((err) => console.log(err.message));
      })
      .catch((err) => showError(err));
  }

  /*обновление данных пользователя*/
  function updateUser(data) {
    api
      .updateUser(data)
      .then((data) => {
        const { name, email } = data.data;
        setUser({ name, email });
        showSuccess();
      })
      .catch((err) => showError(err));
  }

  /*загрузка списка фильмов*/

  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [myMovies, setMyMovies] = useState([]);

  //* подгружаем сохраненный результат из локал стораджа*//

  function loadSavedSearch(data) {
    setMovies(data);
  }

  function saveResult(movies) {
    localStorage.setItem("searchResult", JSON.stringify(movies));
  }

  /* загрузка общего списка фильмов*/
  async function loadMovies() {
    let moviesList = JSON.parse(localStorage.getItem("movies"));
    if (!moviesList) {
      const load = await getMovies();
      localStorage.setItem("movies", JSON.stringify(load));
      moviesList = load;
    }
    const updatedList = moviesList;
    return updatedList;
  }

  async function showMovies(req) {
    setisLoading(true);
    const moviesList = await loadMovies();
    const sortedByName = textSearch(moviesList, req.value);
    const likedUnlikedList = arrangeMovies(sortedByName);
    setMovies(likedUnlikedList);
    saveResult(sortedByName);
    setisLoading(false);
  }

  function arrangeMovies(list) {
    const selectMyLikes = list.map((film) => {
      if (myMovies.some((movie) => movie.movieId === film.id)) {
        film.isLiked = true;
      } else {
        film.isLiked = false;
      }
      return film;
    });
    return selectMyLikes;
  }

  /*-----------ЛАЙК------------*/

  useEffect(() => {
    setisLoading(true);
    api
      .getSavedMovies()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          setMyMovies(data.data);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setisLoading(false));
  }, []);

  function toggleLike(key, state) {
    if (state === undefined) {
      deliteCard(key);
    } else if (state) {
      console.log(state, key);
      removeLike(key);
    } else {
      console.log(movies.filter((it) => it.id === key));
      putLike(key);
    }
  }

  function deliteCard(id) {
    api
      .deleteMovie(id)
      .then((res) => res.json())
      .then((data) => {
        const updatedList = movies.map((item) => {
          if (item.id === data.data.movieId) {
            item.isLiked = false;
          }
          return item;
        });
        setMovies(updatedList);
        saveResult(updatedList);

        setMyMovies(myMovies.filter((item) => item._id !== data.data._id));
      })
      .catch((err) => console.log(err));
  }

  function removeLike(id) {
    api
      .deleteMovie(myMovies.find((item) => item.movieId === id)._id)
      .then((res) => res.json())
      .then((data) => {
        setMyMovies(myMovies.filter((item) => item._id !== data.data._id));
        const updatedList = movies.map((item) => {
          if (item.id === id) {
            item.isLiked = false;
          }
          return item;
        });
        setMovies(updatedList);
        saveResult(updatedList);
      })
      .catch((err) => console.log(err));
  }

  function putLike(id) {
    api
      .postMovie(movies.find((item) => item.id === id))
      .then((res) => res.json())
      .then((data) => {
        setMyMovies(myMovies.concat(data.data));
      })
      .then(() => {
        const updatedList = movies.map((item) => {
          if (item.id === id) {
            item.isLiked = true;
          }
          return item;
        });
        setMovies(updatedList);
        saveResult(updatedList);
      })
      .catch((err) => console.log(err));
  }

  /********************** */

  return (
    <context.Provider
      value={{ size: windowSize, logged: isLoggedIn, user: user }}
    >
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  getMovies={showMovies}
                  isLoading={isLoading}
                  data={movies}
                  handleLike={toggleLike}
                  loadSaved={loadSavedSearch}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies
                  data={myMovies}
                  handleLike={toggleLike}
                  isLoading={isLoading}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  logout={logOut}
                  user={user}
                  update={updateUser}
                  isError={error}
                  errorMessage={errorMessage}
                  isSuccess={success}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="signin"
            element={
              !isLoggedIn ? (
                <Signin
                  signin={loginUser}
                  isError={error}
                  errorMessage={errorMessage}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="signup"
            element={
              !isLoggedIn ? (
                <Signup
                  signup={addUser}
                  isError={error}
                  errorMessage={errorMessage}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route path="*" element={<NotFound history={navigation} />} />
        </Routes>
        {/* {error && <Error message={errorMessage} />} */}
      </>
    </context.Provider>
  );
}

export default App;
