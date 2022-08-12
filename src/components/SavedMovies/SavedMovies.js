import React from "react";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies(props) {
  return (
    <main className="saved-movies">
      <SearchForm />
      <Cards />
    </main>
  );
}

export default SavedMovies;
