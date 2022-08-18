import React from "react";
import "./Card.css";
import test_film from "../../images/test_film.svg";

function Card({ image, name, duration, isSaved }) {
  return (
    <li className="card">
      <img
        className="card__image"
        src={`https://api.nomoreparties.co/${image}`}
        alt={name}
      />
      <div className="card__capture">
        <p className="card__name">{name} </p>
        <button
          type="button"
          className={
            isSaved
              ? `card__button card__button_type_remove`
              : `card__button card__button_type_like `
          }
        />
      </div>

      <p className="card__time">{duration}</p>
    </li>
  );
}

export default Card;
