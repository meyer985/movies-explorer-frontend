import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import { textSearch, timeSearch } from "../../utils/searchFilms";
import Preloader from "../Preloader/Preloader";
import Error from "../Error/Error";

function SavedMovies({ data, handleLike, isLoading, isError, errorMessage }) {
  const [myMovies, setMyMovies] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [searchCheckbox, setSearchCheckbox] = useState(false);

  /*загрузка сохраненных результатов поиска*/

  useEffect(() => {
    setMyMovies(data);
  }, [data]);

  useEffect(() => {
    const lastSearch = JSON.parse(localStorage.getItem("searchMyMovies"));
    if (lastSearch) {
      setSearchValue(lastSearch.value);
      setSearchCheckbox(lastSearch.position);
      // setMyMovies(textSearch(data, lastSearch.value));
    }
  }, []);

  function handleSearch(req) {
    setSearchValue(req.value);
    setSearchCheckbox(req.shortMetre);
    setMyMovies(textSearch(data, req.value));
    localStorage.setItem(
      "searchMyMovies",
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
          searchRequest={handleSearch}
          toggle={searchCheckbox}
          value={searchValue}
          changeToggle={(state) => setSearchCheckbox(state)}
          sendUpInput={(input) => setSearchValue(input)}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <Cards
            data={!searchCheckbox ? myMovies : timeSearch(myMovies)}
            isSaved={true}
            handleLike={handleLike}
          />
        )}
        {isError && <Error message={errorMessage} />}
      </Main>
      <Footer />
    </>
  );
}

export default SavedMovies;
