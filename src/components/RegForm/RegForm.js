import React from "react";
import "./RegForm.css";

function RegForm(props) {
  return (
    <form className="reg-form">
      {props.children}
      <input type="submit" className="reg-form__submit" value={props.submit} />

      <p className="reg-form__caption">
        {props.caption}
        <a href={props.href} className=" reg-form__caption reg-form__link">
          {props.link}
        </a>
      </p>
    </form>
  );
}

export default RegForm;
