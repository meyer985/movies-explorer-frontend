import React, { useState, useEffect } from "react";
import AddBtn from "../AddBtn/AddBtn";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import getMovies from "../../utils/sideApi";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies()
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <>
      <Header isLoggedIn={true} />
      <Main>
        <SearchForm />
        <Cards data={movies} />
        <AddBtn />
      </Main>
      <Footer />
    </>
  );
}

export default Movies;
