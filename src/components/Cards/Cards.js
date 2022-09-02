import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

function Cards({ data, isLiked, handleLike }) {
  return (
    <section className="cards">
      {data.length > 0 ? (
        <ul className="cards__list">
          {data.map((film, index) => {
            return (
              <Card
                id={film.id || film._id}
                name={film.nameRU}
                image={film._id ? film.image : film.image.url}
                duration={film.duration}
                isSaved={Boolean(film._id)}
                isLiked={film.isLiked}
                link={film.trailerLink}
                key={film.duration * Math.random()}
                handleLike={handleLike}
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
