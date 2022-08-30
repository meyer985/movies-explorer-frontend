import React, { useState, useContext, useEffect } from "react";
import AddBtn from "../AddBtn/AddBtn";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import context from "../../context/context";

function Movies({
  getMovies,
  isLoading,
  data,
  changeDuration,
  handleLike,
  loadSaved,
  toggle,
}) {
  const windowSize = useContext(context).size;
  const [increment, setIncrement] = useState(getIncrement);

  /*загрузка сохраненных результатов поиска*/
  useEffect(() => {
    const savedResult = JSON.parse(localStorage.getItem("searchResult"));
    if (savedResult) {
      loadSaved({
        moviesList: savedResult.moviesList,
        toggle: savedResult.toggle,
      });
    }
  }, []);

  function getIncrement() {
    if (windowSize > 1124) {
      return 16;
    } else if (windowSize > 800 && windowSize < 1125) {
      return 12;
    } else if (windowSize > 500 && windowSize < 801) {
      return 8;
    } else {
      return 5;
    }
  }

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

  function getNewSearch(req) {
    setIncrement(getIncrement());
    getMovies(req);
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <Main>
        <SearchForm
          searchRequest={getNewSearch}
          changeToggle={changeDuration}
          toggle={toggle}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <Cards
            data={data.slice(0, increment)}
            isSaved={false}
            handleLike={handleLike}
          />
        )}
        {data.length > increment && <AddBtn addMovies={addMovies} />}
      </Main>
      <Footer />
    </>
  );
}

export default Movies;
