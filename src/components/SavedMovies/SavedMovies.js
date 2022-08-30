import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import { textSearch, timeSearch } from "../../utils/searchFilms";

function SavedMovies({ data, handleLike }) {
  const [myMovies, setMyMovies] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [searchCheckbox, setSearchCheckbox] = useState(false);

  /*загрузка сохраненных результатов поиска*/

  useEffect(() => {
    console.log("начальная загрузка");
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
    console.log(data);
    console.log(req.value);
    console.log(textSearch(data, req.value));
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

  function changeDuration(bool) {
    console.log("change");
    setSearchCheckbox(bool);
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <Main>
        <SearchForm
          changeToggle={changeDuration}
          searchRequest={handleSearch}
          toggle={searchCheckbox}
          value={searchValue}
        />
        <Cards
          data={!searchCheckbox ? myMovies : timeSearch(myMovies)}
          isSaved={true}
          handleLike={handleLike}
        />
      </Main>
      <Footer />
    </>
  );
}

export default SavedMovies;
