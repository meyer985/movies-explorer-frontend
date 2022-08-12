import React from "react";
import "./Promo.css";
import { Link } from "react-router-dom";

function Promo(props) {
  return (
    <section className="main__promo promo">
      <h1 className="promo__title">
        Учебный проект студента
        <br /> факультета Веб-разработки.
      </h1>
      <div className="promo__image"></div>
    </section>
  );
}

export default Promo;
