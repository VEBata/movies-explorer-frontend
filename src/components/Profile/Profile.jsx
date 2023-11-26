import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import { useFormValidator } from "../../hooks/useFormValidator";
import CurrentUserContext from '../contexts/CurrentUserContext';


const Profile = ({ onExit, setSubmitMessage, submitMessage,  handleUpdateUser, isDisabledInput }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isDisable, setIsDisabled] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const { name, email } = useContext(CurrentUserContext);
	const { values, errors, isFormValid, handleChange, setValues, resetForm } = useFormValidator();

	useEffect(() => {
		setValues({
			name: name,
			email: email,
		})
	}, [email, name, setValues]);

	useEffect(() => {
		if (name !== values.name || email !== values.email) {
			setIsDisabled(true)
		} else {
			setIsDisabled(false)
		}
	}, [email, name, values.email, values.name])

	const changeVisibility = () => {
		setIsVisible(true);
		setSubmitMessage('')
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		handleUpdateUser({
			name: values.name,
			email: values.email,
		})
		setIsEditing(true)
		setTimeout(() => {
			setIsVisible(false)
			setIsEditing(false)
		}, 4000)
		resetForm()
	}

	return (
		<main className="content">
			<section className="profile">
				<h1 className="profile__name">
					{`Привет, ${name || ''}!`}
				</h1>
				<form
					className="profile__form form"
					name="profile-form"
					onSubmit={handleSubmit}
					noValidate
				>
					<label className="profile__label">
						Имя
						<input
							className={`profile__input ${errors.name && 'profile__input_error'}`}
							type="text"
							name="name"
							onChange={handleChange}
							minLength="2"
							maxLength="30"
							required
							value={values.name || ''}
							disabled={(isVisible ? false : true) || isDisabledInput || isEditing}
						/>
						<span className="profile__input-error">
							{errors.name}
						</span>
					</label>
					<label className="profile__label">
						E-mail
						<input
							className={`profile__input ${values.email ? "profile__input_error" : ""}`}
							type="email"
							name="email"
							onChange={handleChange}
							pattern="^\S+@\S+\.\S+$"
							required
							value={values.email || ''}
							disabled={(isVisible ? false : true) || isDisabledInput || isEditing}
						/>
						<span className="profile__input-error">
							{errors.email || ''}
						</span>
					</label>
					<div className="profile__button-wrapper">
						{isVisible ? (
							<>
								<span className='profile__error'>
									{submitMessage}
								</span>
								<button
									className={`profile__button-save button ${!isFormValid || !isDisable ? 'profile__button-save_disabled' : ''} `}
									type="submit"
									onClick={changeVisibility}
									disabled={!isFormValid || !isDisable}
								>
									Сохранить
								</button>
							</>) : (<>
								<button
									className={`profile__button-edit button ${!isFormValid || !isDisable ? 'profile__button-edit_disabled' : ''}`}
									type="submit"
									onClick={changeVisibility}
								>
									Редактировать
								</button>
								<button
									className="profile__button-exit button"
									type="button"
									onClick={onExit}
								>
									Выйти из аккаунта
								</button>
							</>)}
					</div>
				</form>
			</section>
		</main>
	);
}

export default Profile;