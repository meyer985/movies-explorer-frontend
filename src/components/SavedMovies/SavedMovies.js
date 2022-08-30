import React from "react";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import films from "../films";

function SavedMovies({ data, changeToggle, handleLike }) {
  return (
    <>
      <Header isLoggedIn={true} />
      <Main>
        <SearchForm changeToggle={changeToggle} />
        <Cards data={data} isSaved={true} handleLike={handleLike} />
      </Main>
      <Footer />
    </>
  );
}

export default SavedMovies;
