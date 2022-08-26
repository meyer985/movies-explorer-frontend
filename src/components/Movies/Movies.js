import React, { useState, useContext, useEffect } from "react";
import AddBtn from "../AddBtn/AddBtn";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import getMovies from "../../utils/sideApi";
import Preloader from "../Preloader/Preloader";
import { textSearch, timeSearch } from "../../utils/searchFilms";
import context from "../../context/context";

function Movies(props) {
  const windowSize = useContext(context).size;
  const [increment, setIncrement] = useState(0);
  const [movies, setMovies] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [buttonHidden, setButtonHidden] = useState(false);
  const shortPortion = shorts.slice(0, increment);
  const moviesPortion = movies.slice(0, increment);

  /*загрузка сохраненных результатов поиска*/
  useEffect(() => {
    getIncrement();
    const savedResult = JSON.parse(localStorage.getItem("searchResult"));
    if (savedResult) {
      setMovies(savedResult.moviesList);
      setShorts(savedResult.shortsList);
    }
  }, []);

  /* загрузка общего списка фильмов*/
  async function loadMovies() {
    let moviesList = JSON.parse(localStorage.getItem("movies"));
    if (!moviesList) {
      const load = await getMovies();
      localStorage.setItem("movies", JSON.stringify(load));
      moviesList = load;
    }
    return moviesList;
  }

  function saveResult(all, shorts) {
    localStorage.setItem(
      "searchResult",
      JSON.stringify({
        moviesList: all,
        shortsList: shorts,
      })
    );
  }

  async function showMovies(req) {
    console.log(req);
    setisLoading(true);
    getIncrement();
    const moviesList = await loadMovies();
    const sortByName = textSearch(moviesList, req.value);
    const sortByLength = timeSearch(sortByName);
    setMovies(sortByName);
    setShorts(sortByLength);
    saveResult(sortByName, sortByLength);
    req.shortMetre ? setToggle(true) : setToggle(false);
    setisLoading(false);
  }

  function changeDuration(bool) {
    getIncrement();
    setToggle(bool);
    console.log(toggle);
  }

  /*---------------------------------*/
  /*******Логика кнопки еще************/

  function getIncrement() {
    if (windowSize > 1124) {
      setIncrement(16);
    } else if (windowSize > 800 && windowSize < 1125) {
      setIncrement(12);
    } else if (windowSize > 500 && windowSize < 801) {
      setIncrement(8);
    } else {
      setIncrement(5);
    }
  }

  // useEffect(() => {
  //   getIncrement();
  // }, []);

  useEffect(() => {
    if (toggle) {
      shorts.length === shortPortion.length
        ? setButtonHidden(true)
        : setButtonHidden(false);
    } else {
      movies.length === moviesPortion.length
        ? setButtonHidden(true)
        : setButtonHidden(false);
    }
  }, [
    movies.length,
    moviesPortion.length,
    shorts.length,
    shortPortion.length,
    toggle,
  ]);

  function changeIncrement() {
    if (windowSize > 1124) {
      setIncrement(increment + 4);
    } else if (windowSize > 800 && windowSize < 1125) {
      setIncrement(increment + 3);
    } else {
      setIncrement(increment + 2);
    }
  }

  function addMovies() {
    changeIncrement();
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <Main>
        <SearchForm searchRequest={showMovies} changeToggle={changeDuration} />
        {isLoading ? (
          <Preloader />
        ) : (
          <Cards data={toggle ? shortPortion : moviesPortion} />
        )}
        {!buttonHidden && <AddBtn addMovies={addMovies} />}
      </Main>
      <Footer />
    </>
  );
}

export default Movies;
