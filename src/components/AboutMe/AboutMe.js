import React from "react";
import "./AboutMe.css";
import new_photo from "../../images/new_photo.JPG";

function AboutMe(props) {
  return (
    <section className="student">
      <div className="section__text-frame">
        <h3 className="section__header">Студент</h3>
      </div>
      <article className="student__page">
        <img className="student__image" src={new_photo} alt="фото" />
        <div className="student__content">
          <p className="student__name">Алексей</p>
          <p className="student__brief">Фронтенд-разработчик, 38 лет</p>
          <p className="student__info">
            Я родился и живу в Санкт-Петербурге, на протяжении семи последних
            лет работал в компании, которая занимается логистикой и
            международной торговлей. Давно интересовался IT и в 2021 году начал
            учиться на курсах веб-разработки. Параллельно с учебой занимался
            собственными проектами, изучал дополнительные технологии.
          </p>

          <span className="student__links">
            <a
              href="https://www.facebook.com/alexey.grabovenko"
              className="student__link link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com/meyer985"
              className="student__link link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
