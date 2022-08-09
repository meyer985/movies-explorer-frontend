import React from "react";
import Aboutme from "../AboutMe/Aboutme";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./Main.css";

function Main(props) {
  return (
    <div className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <Aboutme />
      <Portfolio />
    </div>
  );
}

export default Main;
