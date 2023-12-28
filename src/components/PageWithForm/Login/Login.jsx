import './Login.css';
import { Input } from '../../Atoms/Input/Input';
import { SubmitButton } from '../../Atoms/SubmitButton/SubmitButton';
import { PageWithForm } from '../PageWithForm';
import './Login.css';
import { useState, useEffect } from 'react';

export const Login = ({ onLogin, isServerError, isDisabledInput }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isFormValid, setIsFormValid] = useState(false);
	const [errors, setErrors] = useState({});
	useEffect(() => {
		setEmail('')
    setPassword('')
		setErrors({})
		setIsFormValid(false)
	}, []);

	const onSubmit = async(evt) => {
		evt.preventDefault();
		await onLogin(email, password);
		// resetForm()
	};

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
    setErrors({
      ...errors,
      email: event.target.validationMessage,
    });

    setIsFormValid(event.target.closest(".form"));
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
    setErrors({
      ...errors,
      password: event.target.validationMessage
    });

    setIsFormValid(event.target.closest(".form"));
  }

	return (
		<main className="content login">
			<PageWithForm
				title="Рады видеть!"
				formName="login-form"
				question="Ещё не зарегистрированы?"
				link="/signup"
				linkTitle="Регистрация"
				// onLogin={onLogin}
			>
				<div className='login__wrapper'>
					<Input
						name="email"
						type="email"
						title="E-mail"
						value={email || ''}
						pattern="^\S+@\S+\.\S+$"
						onChange={handleChangeEmail}
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
						value={password || ''}
						onChange={handleChangePassword}
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
					onClick={(e) => onSubmit(e)}
				/>
			</PageWithForm>
		</main>
	);
}