import React, { useState } from "react";
import "./InputBlock.css";

function InputBlock(props) {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <label className="input__label">{props.label}</label>
      <input
        required
        type={props.type}
        placeholder={props.placeholder}
        className="input__field"
        novalidate
        onChange={(e) => setErrorMessage(e.target.validationMessage)}
      />
      <span className="inut__error-message">{errorMessage}</span>
    </>
  );
}

export default InputBlock;
