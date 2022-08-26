import React, { useState, useEffect } from "react";
import "./SearchForm.css";

function SearchForm({ searchRequest, changeToggle }) {
  const [searchValue, setSearchValue] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    changeToggle(checkbox);
    const savedValue = localStorage.getItem("search");
    const savedToggle = localStorage.getItem("toggle");

    if (savedValue) {
      setSearchValue(savedValue);
    }
    if (savedToggle) {
      if (savedToggle === "true") {
        setCheckbox(true);
      } else {
        setCheckbox(false);
      }
    }
  }, [changeToggle, checkbox]);

  function handleSubmit(e) {
    e.preventDefault();
    saveRequest(searchValue);
    saveToggle(checkbox);
    searchRequest({ value: searchValue, shortMetre: checkbox });
  }

  function saveRequest(val) {
    localStorage.setItem("search", val);
  }

  function saveToggle(val) {
    localStorage.setItem("toggle", val);
  }

  return (
    <section className="search">
      <form
        id="film-search"
        className="search__container"
        onSubmit={handleSubmit}
        noValidate
      >
        <div
          className="search__icon"
          onClick={() => {
            localStorage.removeItem("toggle");
            console.log(localStorage.getItem("toggle"));
          }}
        ></div>
        <input
          type="text"
          className="search__input input"
          placeholder="Фильм"
          required
          value={searchValue}
          onChange={(e) => {
            setErrorMessage(e.target.validationMessage);
            setSearchValue(e.target.value);
          }}
        />
        <input type="submit" className="search__btn button" value="" />
      </form>
      <span className="search__error">{errorMessage}</span>
      <div className="search__checkbox checkbox">
        <input
          form="film-search"
          type="checkbox"
          autoComplete="off"
          className="checkbox__toggle"
          checked={checkbox}
          onChange={(e) => {
            setCheckbox(e.target.checked);
            saveToggle(e.target.checked);
          }}
        />
        <div className="checkbox__castom"></div>

        <label className="checkbox__label">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;
