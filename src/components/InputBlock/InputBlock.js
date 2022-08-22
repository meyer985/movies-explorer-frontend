import React, { useState } from "react";
import "./InputBlock.css";

function InputBlock({
  label,
  type,
  placeholder,
  getValue,
  name,
  value,
  pattern,
  min,
  max,
}) {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <label className="input__label">{label}</label>
      <input
        name={name}
        value={value}
        required
        type={type}
        placeholder={placeholder}
        className="input__field input"
        noValidate
        pattern={pattern}
        minLength={min}
        maxLength={max}
        onChange={(e) => {
          setErrorMessage(e.target.validationMessage);
          getValue(e.target.name, e.target.value);
        }}
      />
      <span className="inut__error-message">{errorMessage}</span>
    </>
  );
}

export default InputBlock;
