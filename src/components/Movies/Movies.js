import React, { useState, useContext, useEffect } from "react";
import AddBtn from "../AddBtn/AddBtn";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import context from "../../context/context";
import { timeSearch } from "../../utils/searchFilms";
import Error from "../Error/Error";

function Movies({
  getMovies,
  isLoading,
  data,
  handleLike,
  loadSaved,
  toggle,
  isError,
  errorMessage,
}) {
  const windowSize = useContext(context).size;
  const [increment, setIncrement] = useState(getIncrement);
  const [searchValue, setSearchValue] = useState("");
  const [searchCheckbox, setSearchCheckbox] = useState(false);

  /*загрузка сохраненных результатов поиска*/
  useEffect(() => {
    const savedResult = JSON.parse(localStorage.getItem("searchResult"));
    if (savedResult) {
      loadSaved(savedResult);
    }

    const searchResult = JSON.parse(localStorage.getItem("reqParams"));
    if (searchResult) {
      setSearchValue(searchResult.value);
      setSearchCheckbox(searchResult.position);
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
    saveRequestParams(req);
  }

  function saveRequestParams(req) {
    localStorage.setItem(
      "reqParams",
      JSON.stringify({
        value: req.value,
        position: req.shortMetre,
      })
    );
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <Main>
        <SearchForm
          searchRequest={getNewSearch}
          toggle={searchCheckbox}
          value={searchValue}
          changeToggle={(state) => setSearchCheckbox(state)}
          sendUpInput={(input) => setSearchValue(input)}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <Cards
            data={
              !searchCheckbox
                ? data.slice(0, increment)
                : timeSearch(data).slice(0, increment)
            }
            isSaved={false}
            handleLike={handleLike}
          />
        )}
        {((!searchCheckbox && data.length > increment) ||
          (searchCheckbox && timeSearch(data).length > increment)) && (
          <AddBtn addMovies={addMovies} />
        )}
        {isError && <Error message={errorMessage} />}
      </Main>
      <Footer />
    </>
  );
}

export default Movies;
