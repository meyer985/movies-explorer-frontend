import React, { useState, useContext, useEffect } from "react";
import "./Cards.css";
import Card from "../Card/Card";
import context from "../../context/context";

function Cards({ data, isSaved }) {
  return (
    <section className="cards">
      {data.length > 0 ? (
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
