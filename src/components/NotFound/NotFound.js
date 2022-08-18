import React from "react";
import "./NotFound.css";

function NotFound({ history }) {
  return (
    <>
      <div className="not-found">
        <h1 className="not-found__code">404</h1>
        <p className="not-found__message">Страница не найдена</p>
      </div>
      <button
        type="button"
        className="not-found__button"
        onClick={() => history.back()}
      >
        Назад
      </button>
    </>
  );
}

export default NotFound;
