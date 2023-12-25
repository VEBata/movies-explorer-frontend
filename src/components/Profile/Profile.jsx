import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";

export const Profile = ({ onExit, setSubmitMessage, submitMessage, handleUpdateUser, isDisabledInput }) => {
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({ name: currentUser.name, email: currentUser.email });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  const handleChange = (event) => {
    const { name, value, validationMessage } = event.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validationMessage }));
    setIsFormValid(event.target.closest("form").checkValidity());
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateUser(values);
    setIsEditing(false);
    setSubmitMessage('');
  };

  return (
    <main className="profile">
      <section>
        <h1 className="profile__title">Привет, {currentUser.name || ""}!</h1>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <div className="profile__form-labels">
            <label className="profile__label">
              Имя
              <input
                className="profile__input"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                disabled={!isEditing || isDisabledInput}
              />
              <span className="profile__input-error">{errors.name}</span>
            </label>
            <label className="profile__label">
              E-mail
              <input
                className="profile__input"
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                disabled={!isEditing || isDisabledInput}
              />
              <span className="profile__input-error">{errors.email}</span>
            </label>
          </div>
          {submitMessage && <span>{submitMessage}</span>}
          <div className="profile__button-wrapper">
            <p>{isEditing}</p>
            {isEditing ? (
              <button type="submit" className="profile__button" disabled={!isFormValid}>
                Сохранить
              </button>
            ) : (
              <>
                <button className="profile__button profile__button-edit" onClick={() => setIsEditing(true)}>
                  Редактировать
                </button>
                <button className="profile__button profile__button-exit" onClick={onExit}>Выйти из аккаунта</button>
              </>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};