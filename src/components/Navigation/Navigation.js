import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  const path = useLocation().pathname;
  const getLocation = (location) => {
    return path === location
      ? " menu__link menu__link_picked link"
      : " menu__link link";
  };
  return (
    <>
      <Link className={`menu__main${getLocation("/")}`} to="/">
        Главная
      </Link>
      <span className="menu__center-block center-block">
        <Link to="/movies" className={getLocation("/movies")}>
          Фильмы
        </Link>
        <Link to="/saved-movies" className={getLocation("/saved-movies")}>
          Сохранённые фильмы
        </Link>
      </span>
      <Link
        to="/profile"
        className={
          path === "/profile"
            ? "navigation_account-btn account-btn link account-btn__picked"
            : "navigation_account-btn account-btn link"
        }
      >
        <p className="menu__link account-btn__link">Аккаунт</p>
        <div className="account-btn__userpic"></div>
      </Link>
    </>
  );
}

export default Navigation;
