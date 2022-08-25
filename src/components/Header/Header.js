import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import context from "../../context/context";
import Navigation from "../Navigation/Navigation";

function Header({ isMainPage, isLoggedIn }) {
  const appData = useContext(context);
  const [sideMenuOn, setSideMenuOn] = useState(false);

  return (
    <header className={isMainPage ? "header header_type_main" : "header"}>
      <nav className="header__menu menu">
        <Link to="/" className="menu__logo link">
          <img src={logo} alt="логотип" />
        </Link>
        {!appData.logged ? (
          <span className="header__enter-block enter-block">
            <Link
              to="/signup"
              className="enter-block__link enter-block__link_type_bold link"
            >
              Регистрация
            </Link>
            <Link
              to="/signin"
              className="enter-block__link enter-block__link_type_boxed button"
            >
              Войти
            </Link>
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
