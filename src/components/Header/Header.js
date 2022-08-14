import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header({ isMainPage, type, text }) {
  return (
    <header
      className={
        isMainPage
          ? "header header_type_main"
          : type === "reg"
          ? "header header_type_reg"
          : "header"
      }
    >
      <nav
        className={
          type === "in" ? "header__navbar navbar" : "navbar_type_logged-out"
        }
      >
        <a href="/" className="navbar__logo">
          <img src={logo} alt="логотип" />
        </a>
        <span
          className={
            type === "in"
              ? "navbar__center-block"
              : "navbar__center-block_hidden"
          }
        >
          <a href="/movies" className="navbar__link">
            Фильмы
          </a>
          <a href="/saved-movies" className="navbar__link">
            Сохранённые фильмы
          </a>
        </span>
        <a
          href="/profile"
          className={
            type === "in"
              ? "navbar__account-btn account-btn"
              : "account-btn_hidden"
          }
        >
          <p className="navbar__link account-btn__link">Аккаунт</p>
          <div className="account-btn__userpic"></div>
        </a>
        <span
          className={
            type === "out"
              ? "header__enter-block enter-block"
              : "enter-block_hidden"
          }
        >
          <a
            className="enter-block__link enter-block__link_type_bold"
            href="/signup"
          >
            Регистрация
          </a>
          <div className="enter-block__container ">
            <a
              className="enter-block__link enter-block__link_type_boxed"
              href="/signin"
            >
              Войти
            </a>
          </div>
        </span>
      </nav>
      <p className={type === "reg" ? "header__text" : "header__text_hidden"}>
        {text}
      </p>
    </header>
  );
}

export default Header;
