import './ButtonProfile.css';
import { NavLink, useLocation } from 'react-router-dom';
import accountButton from '../../../../images/account-button.svg';

const ButtonProfile = ({ className, onClick }) => {
	const location = useLocation().pathname;

	const headerEndpoints = (
		location === "/movies" ||
		location === "/saved-movies" ||
		location === "/profile"
	);

	return (
		<NavLink
			to="/profile"
			className={`navigation__button-profile button ${className}`}
			onClick={onClick}
		>
			Аккаунт
			<img
				className={`navigation__button-profile-img ${headerEndpoints || className ? "navigation__button-profile-img_color_black" : ""}`}
				src={accountButton}
				alt="Логотип"
			/>
		</NavLink>
	)
}

export default ButtonProfile;

