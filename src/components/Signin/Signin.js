import React from "react";
import RegForm from "../RegForm/RegForm";
import InputBlock from "../InputBlock/InputBlock";
import RegisterHeader from "../RegisterHeader/RegisterHeader";

function Signin(props) {
  return (
    <>
      <RegisterHeader greeting={"Рады видеть!"} />
      <RegForm
        submit={"Войти"}
        caption={"Ещё не зарегистрированы?"}
        link={"Регистрация"}
        href={"/signup"}
        shortForm={true}
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
