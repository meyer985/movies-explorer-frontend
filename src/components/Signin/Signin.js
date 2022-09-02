import React, { useState } from "react";
import RegForm from "../RegForm/RegForm";
import InputBlock from "../InputBlock/InputBlock";
import RegisterHeader from "../RegisterHeader/RegisterHeader";

function Signin({ signin, isError, errorMessage }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  function getInputValue(name, value) {
    name === "password" ? setPasswordValue(value) : setEmailValue(value);
  }

  function handleSubmit() {
    signin({ email: emailValue, password: passwordValue });

    setEmailValue("");
    setPasswordValue("");
  }

  return (
    <>
      <RegisterHeader greeting={"Рады видеть!"} />
      <RegForm
        submit={"Войти"}
        caption={"Ещё не зарегистрированы?"}
        link={"Регистрация"}
        href={"/signup"}
        shortForm={true}
        formSubmit={handleSubmit}
        isError={isError}
        errorMessage={errorMessage}
      >
        <InputBlock
          placeholder={"pochta@ya.ru"}
          label={"E-mail"}
          getValue={getInputValue}
          name="email"
          value={emailValue}
          pattern={"\\w+@\\w+.\\w+"}
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

export default Signin;
