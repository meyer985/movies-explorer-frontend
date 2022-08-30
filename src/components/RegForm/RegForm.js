import React from "react";
import "./RegForm.css";
import { Link } from "react-router-dom";

function RegForm({
  children,
  submit,
  caption,
  href,
  link,
  shortForm,
  formSubmit,
  isError,
  errorMessage,
}) {
  return (
    <form
      className="reg-form"
      onSubmit={(e) => {
        e.preventDefault();
        formSubmit();
      }}
    >
      {children}
      <input
        type="submit"
        className={`reg-form__submit button ${
          shortForm ? "reg-form__submit_type_short" : ""
        }`}
        value={submit}
        formNoValidate
      />

      {isError ? (
        <p className="reg-form__caption reg-form__error">{errorMessage}</p>
      ) : (
        <p className="reg-form__caption">
          {caption}
          <Link to={href} className=" reg-form__caption reg-form__link link">
            {link}
          </Link>
        </p>
      )}
    </form>
  );
}

export default RegForm;
