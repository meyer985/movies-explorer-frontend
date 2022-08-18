import React from "react";
import "./RegForm.css";

function RegForm({ children, submit, caption, href, link, shortForm }) {
  return (
    <form className="reg-form">
      {children}
      <input
        type="submit"
        className={
          shortForm
            ? "reg-form__submit reg-form__submit_type_short"
            : "reg-form__submit"
        }
        value={submit}
      />

      <p className="reg-form__caption">
        {caption}
        <a href={href} className=" reg-form__caption reg-form__link">
          {link}
        </a>
      </p>
    </form>
  );
}

export default RegForm;
