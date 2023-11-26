import './Login.css';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import PageWithForm from '../PageWithForm';
import { useFormValidator } from "../../../hooks/useFormValidator";

const Login = ({ onLogin, isServerError, isDisabledInput }) => {
	const { values, errors, isFormValid, handleChange, resetForm } = useFormValidator();

	const onSubmit = (evt) => {
		evt.preventDefault();
		onLogin(values.email, values.password);
		resetForm()
	};

	return (
		<main className="content">
			<PageWithForm
				title="Рады видеть!"
				formName="login-form"
				question="Ещё не зарегистрированы?"
				link="/signup"
				linkTitle="Регистрация"
				onLogin={onLogin}
				onSubmit={onSubmit}
			>
				<div className="login">
					<Input
						name="email"
						type="email"
						title="E-mail"
						value={values.email || ''}
						pattern="^\S+@\S+\.\S+$"
						onChange={handleChange}
						required={true}
						validationMessage={errors.email}
						minLength="2"
						placeholder="E-mail"
						className='input_type_login'
						inputClassName="input_type_login"
						errorClassName="input__error_type_login"
						disabled={isDisabledInput}
					/>
					<Input
						name="password"
						type="password"
						title="Пароль"
						value={values.password || ''}
						onChange={handleChange}
						required={true}
						validationMessage={errors.password}
						minLength="8"
						maxLength="30"
						placeholder="Введите пароль"
						inputClassName="input_type_login"
						errorClassName="input__error_type_login"
						disabled={isDisabledInput}
					/>
				</div>
				<span className="login__error">
					{isServerError}
				</span>
				<SubmitButton
					title="Войти"
					isFormValid={isFormValid}
				/>
			</PageWithForm>
		</main>
	);
}

export default Login;