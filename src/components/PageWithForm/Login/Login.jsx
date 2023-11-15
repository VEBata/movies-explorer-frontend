import "./Login.css";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import PageWithForm from "../PageWithForm";
import { useFormValidator } from "../../../hooks/useFormValidator";

const Login = ({ setLoggedIn }) => {
  const { values, errors, isFormValid, handleChange } = useFormValidator();

  const navigate = useNavigate();

  const onSubmit = (evt) => {
    evt.preventDefault();
    setLoggedIn(true);
    navigate("/movies", { replace: true });
  };

  return (
    <main className="content">
      <PageWithForm
        title="Рады видеть!"
        formName="login-form"
        question="Ещё не зарегистрированы?"
        link="/signup"
        linkTitle="Регистрация"
        onSubmit={onSubmit}
      >
        <div className="login">
          <Input
            name="email"
            type="email"
            title="E-mail"
            value={values.email || ""}
            onChange={handleChange}
            required={true}
            validationMessage={errors.email}
            minLength="2"
            placeholder="E-mail"
            className="input_type_login"
            inputClassName="input_type_login"
            errorClassName="input__error_type_login"
          />
          <Input
            name="password"
            type="password"
            title="Пароль"
            value={values.password || ""}
            onChange={handleChange}
            required={true}
            validationMessage={errors.password}
            minLength="8"
            maxLength="30"
            placeholder="Введите пароль"
            inputClassName="input_type_login"
            errorClassName="input__error_type_login"
          />
        </div>

        <SubmitButton title="Войти" isFormValid={isFormValid} />
      </PageWithForm>
    </main>
  );
};

export default Login;
