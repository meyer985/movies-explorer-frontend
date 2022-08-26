import React, { useState, useEffect } from "react";
import AddBtn from "../AddBtn/AddBtn";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import getMovies from "../../utils/sideApi";
import Preloader from "../Preloader/Preloader";
import { textSearch, timeSearch } from "../../utils/searchFilms";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  /* загрузка фильмов*/
  async function loadMovies() {
    let moviesList = JSON.parse(localStorage.getItem("movies"));
    if (!moviesList) {
      const load = await getMovies();
      localStorage.setItem("movies", JSON.stringify(load));
      moviesList = load;
    }
    return moviesList;
  }

  async function showMovies(req) {
    setisLoading(true);
    const moviesList = await loadMovies();
    const sortByName = textSearch(moviesList, req.value);
    setMovies(sortByName);
    setShorts(timeSearch(sortByName));
    req.shortMetre ? setToggle(true) : setToggle(false);
    setisLoading(false);
  }

  function changeDuration() {
    setToggle(!toggle);
  }

  /*---------------------------------*/
  function clear() {
    localStorage.removeItem("movies");
    console.log("сторадж", localStorage.getItem("movies"));
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <Main>
        <SearchForm searchRequest={showMovies} changeToggle={changeDuration} />
        {isLoading ? <Preloader /> : <Cards data={toggle ? shorts : movies} />}
        <AddBtn clearStorage={clear} />
      </Main>
      <Footer />
    </>
  );
}

export default Movies;
