import React from "react";
import "./InputBlock.css";

function InputBlock(props) {
  return (
    <>
      <label className="input__label">{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input__field"
      />
      <span className="inut__error-message">Что-то пошло не так</span>
    </>
  );
}

export default InputBlock;
