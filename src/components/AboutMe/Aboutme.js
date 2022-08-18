import React from "react";
import "./AboutMe.css";
import pic__COLOR_pic from "../../images/pic__COLOR_pic.svg";
import Portfolio from "../Portfolio/Portfolio";

function Aboutme(props) {
  return (
    <section className="student">
      <div className="section__text-frame">
        <h3 className="section__header">Студент</h3>
      </div>
      <div className="student__page">
        <img className="student__image" src={pic__COLOR_pic} />
        <div className="student__content">
          <p className="student__name">Алексей</p>
          <p className="student__brief">Фронтенд-разработчик, 38 лет</p>
          <p className="student__info">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>

          <span className="student__links">
            <a href="#" className="student__link">
              Facebook
            </a>
            <a href="#" className="student__link">
              Github
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
