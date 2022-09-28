import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({
  searchRequest,
  changeToggle,
  toggle,
  value,
  sendUpInput,
}) {
  const [errorMessage, setErrorMessage] = useState("");
  const [emptyField, setEmptyField] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      setEmptyField(true);
      setTimeout(() => setEmptyField(false), 3000);
      return;
    }
    searchRequest({ value: value, shortMetre: toggle });
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
          placeholder={emptyField ? "Введите слово для поиска" : "Фильм"}
          required
          value={value}
          onChange={(e) => {
            setErrorMessage(e.target.validationMessage);
            sendUpInput(e.target.value);
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
          checked={toggle}
          onChange={(e) => {
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
