import React from "react";
import RegForm from "../RegForm/RegForm";
import Header from "../Header/Header";
import InputBlock from "../InputBlock/InputBlock";

function Signin(props) {
  return (
    <>
      <Header text={"Рады видеть!"} type={"reg"} />
      <RegForm
        ubmit={"Войти"}
        caption={"Ещё не зарегистрированы?"}
        link={"Регистрация"}
        href={"/signup"}
      >
        <InputBlock
          type={"email"}
          placeholder={"pochta@ya.ru"}
          label={"E-mail"}
        />
        <InputBlock
          type={"password"}
          placeholder={"********"}
          label={"Пароль"}
        />
      </RegForm>
    </>
  );
}

export default Signin;
