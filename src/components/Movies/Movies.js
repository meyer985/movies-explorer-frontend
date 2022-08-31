import React from "react";
import AddBtn from "../AddBtn/AddBtn";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import films from "../films";

function Movies(props) {
  return (
    <>
      <Header isLoggedIn={true} />
      <Main>
        <SearchForm />
        <Cards data={films[0]} />
        <AddBtn />
      </Main>
      <Footer />
    </>
  );
}

export default Movies;
