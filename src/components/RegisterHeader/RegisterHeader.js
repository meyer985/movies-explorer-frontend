import React from "react";
import "./RegisterHeader.css";
import logo from "../../images/logo.svg";

function RegisterHeader({ greeting }) {
  return (
    <header className="reg-header">
      <a href="/" className="reg-header__logo link">
        <img src={logo} alt="на главную страницу" />
      </a>
      <h1 className="reg-header__text">{greeting}</h1>
    </header>
  );
}

export default RegisterHeader;
