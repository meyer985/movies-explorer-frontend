import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <section className="search">
      <form className="search__container">
        <div className="search__icon"></div>
        <input type="text" className="search__input" placeholder="Фильм" />
        <inbut type="submit" className="search__btn" />
      </form>
      <div className="search__radio-block radio">
        <input type="checkbox" className="radio__toggle" />
        <div className="radio__castom"></div>

        <label className="radio__label">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;
