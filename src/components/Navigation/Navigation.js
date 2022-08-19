import React from "react";
import "./Navigation.css";

function Navigation(props) {
  return (
    <>
      <a className="menu__main menu__link menu__link_picked" href="/">
        Главная
      </a>
      <span className="menu__center-block center-block">
        <a href="/movies" className="menu__link">
          Фильмы
        </a>
        <a href="/saved-movies" className="menu__link">
          Сохранённые фильмы
        </a>
      </span>
      <a href="/profile" className="navigation_account-btn account-btn">
        <p className="menu__link account-btn__link">Аккаунт</p>
        <div className="account-btn__userpic"></div>
      </a>
    </>
  );
}

export default Navigation;
