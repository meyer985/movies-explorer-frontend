import React from "react";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies(props) {
  return (
    <>
      <Header type={"in"} />
      <main className="saved-movies">
        <SearchForm />
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
