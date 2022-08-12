import React from "react";
import AddBtn from "../AddBtn/AddBtn";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies(props) {
  return (
    <main className="movies">
      <SearchForm />
      <Cards />
      <AddBtn />
    </main>
  );
}

export default Movies;
