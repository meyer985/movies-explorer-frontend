import React from "react";
import "./Card.css";
import test_film from "../../images/test_film.svg";

function Card(props) {
  return (
    <div className="card">
      <img className="card__image" src={test_film}></img>
      <div className="card__capture">
        <p className="card__name">33 слова о дизайне</p>
        <button type="button" className="card__like"></button>
      </div>
      <div className="card__line">
        <p className="card__time">1ч42м</p>
      </div>
    </div>
  );
}

export default Card;
