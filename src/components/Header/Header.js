import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import context from "../../context/context";
import Navigation from "../Navigation/Navigation";

function Header({ isMainPage, type, text, isLoggedIn }) {
  const appData = useContext(context);
  const [sideMenuOn, setSideMenuOn] = useState(false);

  return (
    <header className={isMainPage ? "header header_type_main" : "header"}>
      <nav className="header__menu menu">
        <a href="/" className="menu__logo">
          <img src={logo} alt="логотип" />
        </a>
        {!isLoggedIn ? (
          <span className="header__enter-block enter-block">
            <a
              className="enter-block__link enter-block__link_type_bold"
              href="/signup"
            >
              Регистрация
            </a>
            <a
              className="enter-block__link enter-block__link_type_boxed"
              href="/signin"
            >
              Войти
            </a>
          </span>
        ) : appData.size > 768 ? (
          <Navigation />
        ) : (
          <button
            className="header__burger"
            onClick={() => setSideMenuOn(true)}
          ></button>
        )}
      </nav>
      <nav
        onClick={() => setSideMenuOn(false)}
        className={
          sideMenuOn && appData.size < 769
            ? "header__side-menu side-menu side-menu_type_on"
            : "side-menu"
        }
      >
        <button
          onClick={() => setSideMenuOn(false)}
          className="side-menu__close"
        ></button>
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;
