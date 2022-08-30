import React from "react";
import "./Footer.css";

function Footer(props) {
  const date = new Date();
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__menu">
        <p
          className="footer__date"
          onClick={() => {
            localStorage.removeItem("searchResult");
            localStorage.removeItem("search");
            localStorage.removeItem("toggle");
            localStorage.removeItem("token");
            localStorage.removeItem("movies");
            console.log("removed");
          }}
        >
          &copy; {date.getFullYear()}
        </p>
        <nav className="footer__links">
          <a
            className="footer__link link"
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="footer__link link"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
