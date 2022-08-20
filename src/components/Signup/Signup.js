import React from "react";
import InputBlock from "../InputBlock/InputBlock";
import RegForm from "../RegForm/RegForm";

import RegisterHeader from "../RegisterHeader/RegisterHeader";

function Signup(props) {
  return (
    <>
      <RegisterHeader greeting={"Добро пожаловать!"} />
      <RegForm
        submit={"Зарегистрироваться"}
        caption={"Уже зарегистрированы?"}
        link={"Войти"}
        href={"/signin"}
      >
        <InputBlock type={"text"} placeholder={"Алексей"} label={"Имя"} />
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

export default Signup;
