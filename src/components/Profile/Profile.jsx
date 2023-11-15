import "./Profile.css";
import { useContext } from "react";
import { useFormValidator } from "../../hooks/useFormValidator";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";

const Profile = ({ setLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isFormValid, handleChange } = useFormValidator();
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__name">
          {`Привет, ${currentUser.name || ""}!`}
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
              className={`profile__input ${
                errors.name && "profile__input_error"
              }`}
              type="text"
              name="name"
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              required
              value={values.name || ""}
              placeholder="имя"
            />
            <span className="profile__input-error">{errors.name}</span>
          </label>
          <label className="profile__label">
            E-mail
            <input
              className={`profile__input ${
                values.email ? "profile__input_error" : ""
              }`}
              type="email"
              name="email"
              onChange={handleChange}
              required
              value={values.email || ""}
              placeholder="E-mail"
            />
            <span className="profile__input-error">{errors.email || ""}</span>
          </label>
          <div className="profile__button-wrapper">
            <span className="profile__error">
              При обновлении профиля произошла ошибка.
            </span>
            <button
              className={`profile__button-edit button ${
                !isFormValid ? "profile__button-edit_disabled" : ""
              }`}
              type="submit"
              disabled={!isFormValid}
            >
              Редактировать
            </button>
          </div>
        </form>
        <button
          className="profile__button-exit button"
          type="button"
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
};

export default Profile;
