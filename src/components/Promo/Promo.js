import React from "react";
import "./Promo.css";
import { Link } from "react-router-dom";

function Promo(props) {
  return (
    <section className="main__promo promo">
      <nav className="promo__header">
        <div className="promo__logo"></div>
        <span className="promo__links">
          <Link underline="none" to="/signup">
            <p className="promo__link promo__link_type_bold">Регистрация</p>
          </Link>
          <Link underline={"none"} to="/signin">
            <div className="promo__link-container">
              <p className="promo__link promo__link_type_boxed">Войти</p>
            </div>
          </Link>
        </span>
      </nav>
      <h1 className="promo__title">
        Учебный проект студента
        <br /> факультета Веб-разработки.
      </h1>
      <div className="promo__image"></div>
    </section>
  );
}

export default Promo;
