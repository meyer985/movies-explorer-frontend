import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import Main from "../Main/Main";
import Portfolio from "../Portfolio/Portfolio";

function Landing(props) {
  return (
    <>
      <Header isLoggedIn={false} isMainPage={true} />
      <Main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </Main>
      <Footer />
    </>
  );
}

export default Landing;
