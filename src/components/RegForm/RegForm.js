import React from "react";
import "./RegForm.css";

function RegForm({
  children,
  submit,
  caption,
  href,
  link,
  shortForm,
  formSubmit,
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

      <p className="reg-form__caption">
        {caption}
        <a href={href} className=" reg-form__caption reg-form__link link">
          {link}
        </a>
      </p>
    </form>
  );
}

export default RegForm;
