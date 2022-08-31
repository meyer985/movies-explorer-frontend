import React from "react";
import { useLocation } from "react-router-dom";
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
      <a className={`menu__main${getLocation("/")}`} href="/">
        Главная
      </a>
      <span className="menu__center-block center-block">
        <a href="/movies" className={getLocation("/movies")}>
          Фильмы
        </a>
        <a href="/saved-movies" className={getLocation("/saved-movies")}>
          Сохранённые фильмы
        </a>
      </span>
      <a
        href="/profile"
        className={
          path === "/profile"
            ? "navigation_account-btn account-btn link account-btn__picked"
            : "navigation_account-btn account-btn link"
        }
      >
        <p className="menu__link account-btn__link">Аккаунт</p>
        <div className="account-btn__userpic"></div>
      </a>
    </>
  );
}

export default Navigation;
