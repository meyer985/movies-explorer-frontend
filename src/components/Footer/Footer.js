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
        <p className="footer__date">&copy; {date.getFullYear()}</p>
        <nav className="footer__links">
          <a className="footer__link">Яндекс.Практикум</a>
          <a className="footer__link">Github</a>
          <a className="footer__link">Facebook</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
