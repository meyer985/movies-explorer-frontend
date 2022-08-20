import React from "react";
import "./AboutProject.css";

function AboutProject(props) {
  return (
    <section className="about">
      <div className="section__text-frame">
        <h3 className="section__header">О проекте</h3>
      </div>
      <div className="about__content table">
        <div className="table__block">
          <p className="table__header">Дипломный проект включал 5 этапов</p>
          <p className="table__content">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="table__block table__block_type_last">
          <p className="table__header">На выполнение диплома ушло 5 недель</p>

          <p className="table__content">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__timeline timeline">
        <p className="timeline__content timeline__content_type_black">
          1 неделя
        </p>
        <p className="timeline__content timeline__content_type_white">
          4 недели
        </p>
        <p className="timeline__content timeline__content_type_tech">
          Back-end
        </p>
        <p className="timeline__content timeline__content_type_tech">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
