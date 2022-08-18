import React from "react";
import "./Cards.css";
import Card from "../Card/Card";
import films from "../films";

function Cards({ data, isSaved }) {
  return (
    <section className="cards">
      <ul className="cards__list">
        {data.map((film, index) => {
          return (
            <Card
              name={film.nameRU}
              image={film.image.url}
              duration={film.duration}
              isSaved={isSaved}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Cards;
