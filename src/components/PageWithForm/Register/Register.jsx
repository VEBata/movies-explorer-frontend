import './Register.css';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import PageWithForm from '../PageWithForm';
import { useFormValidator } from "../../../hooks/useFormValidator";

const Register = ({ onRegister, isServerError, isDisabledInput }) => {
	const { values, errors, isFormValid, handleChange, resetForm } = useFormValidator();

	const onSubmit = (evt) => {
		evt.preventDefault();
		onRegister(values.name, values.email, values.password);
		resetForm()
	};

	return (
		<main className="content">
			<PageWithForm
				title="Добро пожаловать!"
				formName="register-form"
				question="Уже зарегистрированы?"
				link="/signin"
				linkTitle="Войти"
				onSubmit={onSubmit}
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
						disabled={isDisabledInput}
					/>
					<Input
						name="email"
						type="email"
						title="E-mail"
						value={values.email || ''}
						pattern="^\S+@\S+\.\S+$"
						onChange={handleChange}
						required={true}
						minLength="2"
						placeholder="E-mail"
						validationMessage={errors.email}
						disabled={isDisabledInput}
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
						disabled={isDisabledInput}
					/>
				</div>
				<span className="register__error">
					{isServerError}
				</span>
				<SubmitButton
					title="Зарегистрироваться"
					isFormValid={isFormValid}
				/>
			</PageWithForm>
		</main>
	);
}

export default Register;