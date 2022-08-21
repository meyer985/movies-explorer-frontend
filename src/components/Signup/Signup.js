import React, { useState } from "react";
import InputBlock from "../InputBlock/InputBlock";
import RegForm from "../RegForm/RegForm";
import RegisterHeader from "../RegisterHeader/RegisterHeader";
import api from "../../utils/myApi";

function Signup({ signup }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  function getInputValue(name, value) {
    name === "password"
      ? setPasswordValue(value)
      : name === "name"
      ? setNameValue(value)
      : setEmailValue(value);
  }

  function handleSubmit() {
    signup({ email: emailValue, password: passwordValue, name: nameValue });

    setEmailValue("");
    setPasswordValue("");
    setNameValue("");
  }
  return (
    <>
      <RegisterHeader greeting={"Добро пожаловать!"} />
      <RegForm
        submit="Зарегистрироваться"
        caption="Уже зарегистрированы?"
        link="Войти"
        href="/signin"
        formSubmit={handleSubmit}
      >
        <InputBlock
          type="text"
          name="name"
          placeholder="Алексей"
          label="Имя"
          // pattern="[A-Za-zА-Яа-яЁё-]"
          min="2"
          max="30"
          getValue={getInputValue}
          value={nameValue}
        />
        <InputBlock
          type={"email"}
          placeholder={"pochta@ya.ru"}
          label={"E-mail"}
          getValue={getInputValue}
          name="email"
          value={emailValue}
        />
        <InputBlock
          type={"password"}
          placeholder={"********"}
          label={"Пароль"}
          getValue={getInputValue}
          name="password"
          value={passwordValue}
        />
      </RegForm>
    </>
  );
}

export default Signup;
