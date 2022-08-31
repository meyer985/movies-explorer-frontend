import React from "react";
import "./Portfolio.css";

function Portfolio(props) {
  const portfolio = [
    {
      name: "Статичный сайт",
      link: "https://github.com/meyer985/how-to-learn",
    },
    {
      name: "Адаптивный сайт",
      link: "https://github.com/meyer985/russian-travel",
    },
    {
      name: "Одностраничное приложение",
      link: "https://github.com/meyer985/react-mesto-api-full",
    },
  ];

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        {portfolio.map((item, index) => {
          return (
            <li className="portfolio__item item" key={index}>
              <a
                className="item__link link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <p className="item__name">{item.name}</p>
                <div className="item__arrow"></div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Portfolio;
