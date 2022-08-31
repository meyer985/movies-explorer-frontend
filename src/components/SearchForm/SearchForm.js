import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <section className="search">
      <form id="film-search" className="search__container">
        <div className="search__icon"></div>
        <input
          type="text"
          className="search__input input"
          placeholder="Фильм"
          required
        />
        <input type="submit" className="search__btn button" value="" />
      </form>
      <div className="search__checkbox checkbox">
        <input
          form="film-search"
          type="checkbox"
          className="checkbox__toggle"
        />
        <div className="checkbox__castom"></div>

        <label className="checkbox__label">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;
