import React from "react";
import "./Portfolio.css";
import arrow_top_right from "../../images/arrow_top_right.svg";

function Portfolio(props) {
  const portfolio = [
    { name: "Статичный сайт", link: "link" },
    { name: "Адаптивный сайт", link: "link" },
    { name: "Одностраничное приложение", link: "link" },
  ];

  return (
    <section className="portfolio">
      <h2 className="section__title">Портфолио</h2>
      <ul className="portfolio__list">
        {portfolio.map((item, index) => {
          return (
            <li className="portfolio__item item" key={index}>
              <a className="item__link" href={item.link}>
                <p className="item__name">{item.name}</p>
                <img className="item__arrow" src={arrow_top_right} />{" "}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Portfolio;
