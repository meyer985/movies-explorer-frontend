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

function App() {
  const navigation = useNavigate();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({});

  function logIn() {
    setIsLoggedIn(true);
  }

  function logOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigation("/");
  }

  /*авторизация*/
  useEffect(() => {
    checkToken();
  }, []);

  function checkToken() {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      setIsLoggedIn(false);
      console.log("токен не найден");
      return;
    } else {
      return api
        .auth()
        .then((res) =>
          res.ok ? res.json() : Promise.reject("Ошибка проверки токена")
        )
        .then((res) => {
          setUser(res.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
        });
    }
  }

  /*отслеживаю размер окна*/
  function windowResize() {
    setWindowSize(window.innerWidth);
    // setTimeout(() => setWindowSize(window.innerWidth), 1000);
  }

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  /*авторизация*/
  useEffect(() => {
    checkToken();
  }, []);

  /*регистрация пользователя*/
  function addUser(data) {
    api
      .addUser(data)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Произошла ошибка");
          return;
        }
      })
      .then(() => {
        loginUser({ email: data.email, password: data.password });
      })
      .catch((err) => console.log(err));
  }

  /*авторизация по логин-паролю*/
  function loginUser(data) {
    api
      .login(data)
      .then((res) => {
        return res.ok ? res.json() : Promise.reject("ошибка авторизации");
      })
      .then((res) => {
        localStorage.setItem("token", res.jwt);
      })
      .then(() => {
        checkToken()
          .then(() => navigation("movies"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  /*обновление данных пользователя*/
  function updateUser(data) {
    api
      .updateUser(data)
      .then((res) => res.json())
      .then((data) => {
        const { name, email } = data.data;
        setUser({ name, email });
      })
      .catch((err) => console.log(err));
  }

  return (
    <context.Provider value={{ size: windowSize, logged: isLoggedIn }}>
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile logout={logOut} user={user} update={updateUser} />
              </ProtectedRoute>
            }
          />

          <Route
            path="signin"
            element={
              !isLoggedIn ? <Signin signin={loginUser} /> : <Navigate to="/" />
            }
          />
          <Route
            path="signup"
            element={
              !isLoggedIn ? <Signup signup={addUser} /> : <Navigate to="/" />
            }
          />

          <Route path="*" element={<NotFound history={navigation} />} />
        </Routes>
      </>
    </context.Provider>
  );
}

export default App;
