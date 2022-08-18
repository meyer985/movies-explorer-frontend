import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Profile.css";

function Profile(props) {
  return (
    <>
      <Header isLoggedIn={true} />
      <main className="profile">
        <h1 className="profile__header">Привет, Виталий!</h1>
        <form className="profile__form edit">
          <labe className="edit__label">Имя</labe>
          <input type="text" className="edit__input" placeholder="Виталий" />
          <div className="edit__underline"></div>
          <labe className="edit__label">E-mail</labe>
          <input
            type="text"
            className="edit__input"
            placeholder="pochta@pochta.ru"
          />
        </form>
        <button
          type="button"
          className="profile__button profile__button_type_edit"
        >
          Редактировать
        </button>
        <button
          type="button"
          className="profile__button profile__button_type_checkout"
        >
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;
