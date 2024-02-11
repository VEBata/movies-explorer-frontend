import './Register.css';
import { Input } from '../../Atoms/Input/Input';
import { SubmitButton } from '../../Atoms/SubmitButton/SubmitButton';
import { PageWithForm } from '../PageWithForm';
import { useFormValidator } from "../../../hooks/useFormValidator";
import { registration } from '../../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAsyncTask } from '../../../hooks/useAsyncTask';

export const Register = ({ onRegister, isServerError, isDisabledInput }) => {
	const { values, isFormValid, resetForm, getProps } = useFormValidator({
		name: '',
		email: '',
		password: '',
	});

	const [registrationTask, isRegistrationPending] = useAsyncTask(registration)

	const navigate = useNavigate()

	useEffect(()=>{
		if(localStorage.getItem('token')) navigate('/')
	},[])

	const onSubmit = async (evt) => {
		evt.preventDefault();
		if(isRegistrationPending) return
		const res = registrationTask(values.name, values.email, values.password)
		onRegister(values.name, values.email, values.password, res);
	};

	return (
		<main className='register'>
			<PageWithForm
				title="Добро пожаловать!"
				formName="register-form"
				question="Уже зарегистрированы?"
				link="/signin"
				linkTitle="Войти"
				onSubmit={onSubmit}
			>
				<div className='register__wrapper'>
					<Input
						type="text"
						title="Имя"
						required={true}
						minLength="2"
						maxLength="30"
						placeholder="Имя"
						disabled={isDisabledInput}
						{...getProps('name')}
					/>
					<Input
						type="email"
						title="E-mail"
						pattern="^\S+@\S+\.\S+$"
						required={true}
						minLength="2"
						placeholder="E-mail"
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
						disabled={isDisabledInput}
						{...getProps('password')}
					/>
				</div>
				<span className='register__error'>
					{isServerError}
				</span>
				<SubmitButton
					title="Зарегистрироваться"
					isFormValid={isFormValid && !isRegistrationPending }
				/>
			</PageWithForm>
		</main>
	);
}