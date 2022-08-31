import React from "react";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import films from "../films";

function SavedMovies(props) {
  return (
    <>
      <Header isLoggedIn={true} />
      <Main>
        <SearchForm />
        <Cards data={films[1]} isSaved={true} />
      </Main>
      <Footer />
    </>
  );
}

export default SavedMovies;
