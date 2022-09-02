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

function App() {
  const navigation = useNavigate();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [myMovies, setMyMovies] = useState([]);
  const [movieError, setMovieError] = useState(false);
  const [movieErrorMessage, setMovieErrorMessage] = useState(false);

  function logIn(data) {
    setIsLoggedIn(true);
    setUser(data);
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
          logIn(res.data);
        })
        .catch((err) => {
          console.log(err);
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

  /***********ФИЛЬМЫ************/

  function showMovieError(msg) {
    setMovieError(true);
    setMovieErrorMessage(msg);
    setTimeout(() => {
      setMovieError(false);
      setMovieErrorMessage("");
    }, 3000);
  }

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
      let load;
      try {
        load = await getMovies();
        moviesList = load;
        localStorage.setItem("movies", JSON.stringify(load));
      } catch (e) {
        console.log(e);
        showMovieError(
          "Ошибка при загрузке фильмов, пожалуйста попробуйте позже"
        );
        setisLoading(false);
        return;
      }
    }
    return moviesList;
  }

  async function showMovies(req) {
    setisLoading(true);
    const moviesList = await loadMovies();
    if (moviesList) {
      const sortedByName = textSearch(moviesList, req.value);
      const likedUnlikedList = arrangeMovies(sortedByName);
      setMovies(likedUnlikedList);
      saveResult(sortedByName);
      setisLoading(false);
    } else {
      showMovieError(
        "Ошибка при загрузке фильмов, пожалуйста попробуйте позже"
      );
    }
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

  /*-----------Загрузка сохраненных фильмов------------*/

  useEffect(() => {
    setisLoading(true);
    api
      .getSavedMovies()
      .then((data) => {
        if (data) {
          setMyMovies(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.status !== 404) {
          showMovieError(
            "Ошибка при загрузке фильмов, пожалуйста попробуйте позже"
          );
        }
      })
      .finally(() => setisLoading(false));
  }, []);

  /*-----------ЛАЙК------------*/

  function toggleLike(key, state) {
    if (state === undefined) {
      deliteCard(key);
    } else if (state) {
      removeLike(key);
    } else {
      putLike(key);
    }
  }

  function deliteCard(id) {
    api
      .deleteMovie(id)
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
      .catch((err) => {
        console.log(err);
        showMovieError("Ошибка сервера, пожалуйста попробуйте позже");
      });
  }

  function removeLike(id) {
    api
      .deleteMovie(myMovies.find((item) => item.movieId === id)._id)
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
      .catch((err) => {
        console.log(err);
        showMovieError("Ошибка сервера, пожалуйста попробуйте позже");
      });
  }

  function putLike(id) {
    api
      .postMovie(movies.find((item) => item.id === id))
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
      .catch((err) => {
        console.log(err);
        showMovieError("Ошибка сервера, пожалуйста попробуйте позже");
      });
  }

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
                  isError={movieError}
                  errorMessage={movieErrorMessage}
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
                  isError={movieError}
                  errorMessage={movieErrorMessage}
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
      </>
    </context.Provider>
  );
}

export default App;
