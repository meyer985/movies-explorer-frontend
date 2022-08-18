import React from "react";
import "./Promo.css";
import logo from "../../images/text__COLOR_landing-logo.svg";

function Promo(props) {
  return (
    <section className="main__promo promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="promo__image" src={logo} alt="спираль" />
    </section>
  );
}

export default Promo;
