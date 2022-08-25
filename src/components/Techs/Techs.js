import React from "react";
import "./Techs.css";

function Techs(props) {
  const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];
  return (
    <section className="techs">
      <div className="section__text-frame">
        <h3 className="section__header">Технологии</h3>
      </div>
      <p className="tech__header">7 технологий</p>
      <p className="tech__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="tech__container">
        {techs.map((item, index) => {
          return (
            <div className="tech__item" key={index + 15}>
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Techs;
