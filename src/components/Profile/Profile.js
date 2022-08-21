import React, { useState } from "react";
import Header from "../Header/Header";
import "./Profile.css";

function Profile(props) {
  const [isUpdating, setIsUpdating] = useState(false);
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
        {isUpdating ? (
          <button className="profile__button profile__button_type_edit profile__button_type_save button">
            Сохранить
          </button>
        ) : (
          <>
            <button
              type="button"
              className="profile__button profile__button_type_edit button"
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_type_checkout button"
            >
              Выйти из аккаунта
            </button>
          </>
        )}
      </main>
    </>
  );
}

export default Profile;
