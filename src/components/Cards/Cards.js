import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

function Cards(props) {
  return (
    <section className="cards">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default Cards;
