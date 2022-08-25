import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

function Cards({ data, isSaved }) {
  return (
    <section className="cards">
      {data ? (
        <ul className="cards__list">
          {data.map((film, index) => {
            return (
              <Card
                name={film.nameRU}
                image={film.image.url}
                duration={film.duration}
                isSaved={isSaved}
                link={film.trailerLink}
                key={index}
              />
            );
          })}
        </ul>
      ) : (
        <p className="cards__message">Фильмы не найдены</p>
      )}
    </section>
  );
}

export default Cards;
