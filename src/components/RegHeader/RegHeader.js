import React from "react";
import "./RegHeader.css";
import logo from "../../images/logo.svg";

function RegHeader(props) {
  return (
    <header className="reg-header">
      <a href="/" className="header__logo">
        <img src={logo} alt="логотип" />
      </a>
      <h1 className="reg-header__text">{props.text}</h1>
    </header>
  );
}

export default RegHeader;
