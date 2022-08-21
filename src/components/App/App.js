import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*отслеживаю размер окна*/
  function windowResize() {
    setWindowSize(window.innerWidth);
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
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Произошла ошибка");
          return;
        }
      })
      .then((res) => {
        api
          .login({ email: data.email, password: data.password })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              console.log("Произошла ошибка");
              return;
            }
          })
          .then((res) => {
            if (res.jwt) {
              localStorage.setItem("token", res.jwt);
              setIsLoggedIn(true);
              navigation("/movies");
            } else {
              console.log("Ошибка авторизации");
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  /*авторизация по логин-паролю*/
  function loginUser(data) {
    api
      .login(data)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <context.Provider value={{ size: windowSize }}>
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<Signin signin={loginUser} />} />
          <Route path="/signup" element={<Signup signup={addUser} />} />
          <Route path="*" element={<NotFound history={navigation} />} />
        </Routes>
      </>
    </context.Provider>
  );
}

export default App;
