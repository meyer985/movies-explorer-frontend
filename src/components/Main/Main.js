import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./Main.css";

function Main(props) {
  return (
    <section className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </section>
  );
}

export default Main;
