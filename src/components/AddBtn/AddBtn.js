import React from "react";
import "./AddBtn.css";

function AddBtn(props) {
  return (
    <section className="add-btn">
      <button
        type="button"
        className="add-btn__button button"
        onClick={props.clearStorage}
      >
        Ещё
      </button>
    </section>
  );
}

export default AddBtn;
