import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <nav className="header__nav">
        <a href="/" className="header__logo">
          <img src={logo} alt="логотип" />
        </a>
        <span className="header__center-block">
          <a href="/movies" className="header__link">
            Фильмы
          </a>
          <a href="/saved-movies" className="header__link">
            Сохранённые фильмы
          </a>
        </span>
        <a href="/profile" className="header__account-btn account-btn">
          <p className="header__link account-btn__link">Аккаунт</p>
          <div className="account-btn__userpic"></div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
