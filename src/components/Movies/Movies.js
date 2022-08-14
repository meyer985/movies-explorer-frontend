import React from "react";
import AddBtn from "../AddBtn/AddBtn";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies(props) {
  return (
    <>
      <Header type={"in"} />
      <main className="movies">
        <SearchForm />
        <Cards />
        <AddBtn />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
