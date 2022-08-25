import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ searchRequest }) {
  const [searchValue, setSearchvalue] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
      >
        <div className="search__icon"></div>
        <input
          type="text"
          className="search__input input"
          placeholder="Фильм"
          required
          formNoValidate
          value={searchValue}
          onChange={(e) => {
            setErrorMessage(e.target.validationMessage);
            setSearchvalue(e.target.value);
          }}
        />
        <input type="submit" className="search__btn button" value="" />
      </form>
      <span className="search__error">{errorMessage}</span>
      <div className="search__checkbox checkbox">
        <input
          form="film-search"
          type="checkbox"
          className="checkbox__toggle"
          value={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <div className="checkbox__castom"></div>

        <label className="checkbox__label">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;
