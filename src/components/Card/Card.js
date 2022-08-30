import React from "react";
import "./Card.css";

function Card({
  image,
  name,
  duration,
  link,
  isSaved,
  isLiked,
  handleLike,
  id,
}) {
  function changeLike() {
    isSaved ? handleLike(id, isLiked) : handleLike(id, isLiked);
  }

  const getDuration = (duration) => {
    return duration < 61
      ? `${duration}m`
      : `${Math.floor(duration / 60)}h${duration % 60}m`;
  };
  return (
    <li className="card">
      <a
        className="link card__link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="card__image"
          src={isSaved ? image : `https://api.nomoreparties.co/${image}`}
          alt={name}
        />
      </a>

      <div className="card__capture">
        <p className="card__name">{name} </p>
        <button
          onClick={changeLike}
          type="button"
          className={
            isSaved
              ? `card__button card__button_type_remove button`
              : isLiked
              ? `card__button card__button_type_liked button`
              : `card__button card__button_type_like button`
          }
        />
      </div>

      <p className="card__time">{getDuration(duration)}</p>
    </li>
  );
}

export default Card;
