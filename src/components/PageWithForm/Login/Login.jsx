import './Login.css';
import { Input } from '../../Atoms/Input/Input';
import { SubmitButton } from '../../Atoms/SubmitButton/SubmitButton';
import { PageWithForm } from '../PageWithForm';
import './Login.css';
import { useFormValidator } from '../../../hooks/useFormValidator';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAsyncTask } from '../../../hooks/useAsyncTask';
import { authorization } from '../../../utils/MainApi';

export const Login = ({ onLogin, isServerError, isDisabledInput }) => {
	const { values, getProps, isFormValid } = useFormValidator({ email: '', password: '' })

	console.log(values);

	const [authorizationTask, isAuthorizationPenfing] = useAsyncTask(authorization)

	const navigate = useNavigate()

	const onSubmit = async (evt) => {
		evt.preventDefault();
		if (!isFormValid) return
		if (isDisabledInput) return
		
		await onLogin(authorizationTask(values.email, values.password));
		// resetForm()
	};

	useEffect(() => {
		if (localStorage.getItem('token')) navigate('/')
	}, [])

	return (
		<main className="content login">
			<PageWithForm
				title="Рады видеть!"
				formName="login-form"
				question="Ещё не зарегистрированы?"
				link="/signup"
				linkTitle="Регистрация"
				onSubmit={onSubmit}
			// onLogin={onLogin}
			>
				<div className='login__wrapper'>
					<Input
						type="email"
						title="E-mail"
						pattern="^\S+@\S+\.\S+$"
						required={true}
						minLength="2"
						placeholder="E-mail"
						className='input_type_login'
						inputClassName="input_type_login"
						errorClassName="input__error_type_login"
						disabled={isDisabledInput}
						{...getProps('email')}
					/>
					<Input
						type="password"
						title="Пароль"
						required={true}
						minLength="8"
						maxLength="30"
						placeholder="Введите пароль"
						inputClassName="input_type_login"
						errorClassName="input__error_type_login"
						disabled={isDisabledInput}
						{...getProps('password')}
					/>
				</div>
				<span className="login__error">
					{isServerError}
				</span>
				<SubmitButton
					title="Войти"
					isFormValid={isFormValid && !isAuthorizationPenfing}
				/>
			</PageWithForm>
		</main>
	);
}