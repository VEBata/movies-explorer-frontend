import './Register.css';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import PageWithForm from '../PageWithForm';
import { useFormValidator } from "../../../hooks/useFormValidator";

const Register = () => {
	const { values, errors, isFormValid, handleChange } = useFormValidator();

	return (
		<main className="content">
			<PageWithForm
				title="Добро пожаловать!"
				formName="register-form"
				question="Уже зарегистрированы?"
				link="/signin"
				linkTitle="Войти"
			>
				<div className="register">
					<Input
						name="name"
						type="text"
						title="Имя"
						value={values.name || ''}
						onChange={handleChange}
						required={true}
						minLength="2"
						maxLength="30"
						placeholder="Имя"
						validationMessage={errors.name}
					/>
					<Input
						name="email"
						type="email"
						title="E-mail"
						value={values.email || ''}
						onChange={handleChange}
						required={true}
						minLength="2"
						placeholder="E-mail"
						validationMessage={errors.email}
					/>
					<Input
						name="password"
						type="password"
						title="Пароль"
						value={values.password || ''}
						onChange={handleChange}
						required={true}
						minLength="8"
						maxLength="30"
						placeholder="Введите пароль"
						validationMessage={errors.password}
					/>
				</div>
				{/*<span className="register__error">
					Пользователь с таким email уже зарегистрирован.
				</span>*/}
				<SubmitButton
					title="Зарегистрироваться"
					isFormValid={isFormValid}
				/>
			</PageWithForm>
		</main>
	);
}

export default Register;