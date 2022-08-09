import React from "react";
import "./Footer.css";

function Footer(props) {
  const date = new Date();
  return (
    <section className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__menu">
        <p className="footer__date">&copy; {date.getFullYear()}</p>
        <nav classname="footer__links">
          <a className="footer__link">Яндекс.Практикум</a>
          <a className="footer__link">Github</a>
          <a className="footer__link">Facebook</a>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
