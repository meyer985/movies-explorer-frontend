import React, { useState, useEffect } from "react";
import "./SearchForm.css";

function SearchForm({ searchRequest, changeToggle, toggle, value }) {
  const [searchValue, setSearchValue] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("form mount");
    setCheckbox(toggle);
    setSearchValue(value);
  }, [toggle, value]);

  function handleSubmit(e) {
    e.preventDefault();

    searchRequest({ value: searchValue, shortMetre: checkbox });
  }

  return (
    <section className="search">
      <form
        id="film-search"
        className="search__container"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search__icon"></div>
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
            changeToggle(e.target.checked);
          }}
        />
        <div className="checkbox__castom"></div>

        <label className="checkbox__label">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;
