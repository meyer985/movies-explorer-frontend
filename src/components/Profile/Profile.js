import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import context from "../../context/context";

function Profile(props) {
  const user = useContext(context).user;
  const [isUpdating, setIsUpdating] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  function handleLogout() {
    props.logout();
  }

  function handleInput(e) {
    if (e.target.name === "name") {
      setName(e.target.value);
      setNameError(e.target.validationMessage);
    } else {
      setEmail(e.target.value);
      setEmailError(e.target.validationMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.update({ name, email });
    setName(user.name);
    setEmail(user.email);
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="profile">
        <h1 onClick={() => console.log(user)} className="profile__header">
          Привет, {user.name}!
        </h1>
        <form
          className="profile__form edit"
          id="edit-form"
          onSubmit={handleSubmit}
        >
          <label className="edit__label">Имя</label>
          <input
            required
            name="name"
            type="text"
            className="edit__input input"
            value={name}
            disabled={!isUpdating}
            onChange={(e) => handleInput(e)}
            minLength="2"
            maxLength="30"
          />
          <span
            className={`inut__error-message edit__error${
              !nameError ? "edit__error_hidden" : ""
            }`}
          >
            {nameError}
          </span>
          <div className="edit__underline"></div>
          <label className="edit__label">E-mail</label>
          <input
            required
            pattern="\\w+@\\w+.\\w+"
            name="email"
            className="edit__input input"
            value={email}
            disabled={!isUpdating}
            onChange={(e) => handleInput(e)}
          />
          <span
            className={`inut__error-message edit__error${
              !emailError ? "edit__error_hidden" : ""
            }`}
          >
            {emailError}
          </span>
        </form>
        {isUpdating ? (
          <>
            <input
              value="Сохранить"
              type="submit"
              form="edit-form"
              className={`profile__button profile__button_type_edit profile__button_type_save  button ${
                name === user.name && email === user.email
                  ? "profile__button_type_inactive"
                  : ""
              }`}
            />

            <button
              onClick={() => setIsUpdating(!isUpdating)}
              type="button"
              className="profile__button profile__button_type_checkout button"
            >
              Назад
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsUpdating(!isUpdating)}
              type="button"
              className="profile__button profile__button_type_edit button"
            >
              Редактировать
            </button>
            <button
              onClick={handleLogout}
              type="button"
              className="profile__button profile__button_type_checkout button"
            >
              Выйти из аккаунта
            </button>
          </>
        )}
        {props.isError ? (
          <p className="reg-form__caption reg-form__error">
            {props.errorMessage}
          </p>
        ) : props.isSuccess ? (
          <p className="reg-form__caption reg-form__success">
            Данные обновлены!
          </p>
        ) : null}
      </main>
    </>
  );
}

export default Profile;
