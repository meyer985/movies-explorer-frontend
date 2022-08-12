import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies(props) {
  return (
    <div className="movies">
      <Header />
      <SearchForm />
    </div>
  );
}

export default Movies;
