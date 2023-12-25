import { NavLink, useLocation } from "react-router-dom";
import "./ButtonProfile.css";
import accountButton from '../../../../../images/account-button.svg';

export const ButtonProfile = ({ className, onClick }) => {
  const location = useLocation().pathname;

	const headerEndpoints = (
		location === "/movies" ||
		location === "/saved-movies" ||
		location === "/profile"
	);

  return (
    <NavLink className={`button-profile__link ${className}`} to="/profile" onClick={onClick}>
      Аккаунт
      <img 
        src={accountButton}
				alt="Логотип"
        className={`button-profile__image ${headerEndpoints || className ? 'active' : ''}`}
      />
    </NavLink>
  )
}