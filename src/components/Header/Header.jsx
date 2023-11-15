import './Header.css';
import Navigation from '../Navigation/Navigation';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Header = ({ loggedIn }) => {
	const location = useLocation().pathname;

	const headerEndpoints = (
		location === "/movies" ||
		location === "/saved-movies" ||
		location === "/profile"
);

	return (
		<header className={`header ${headerEndpoints ? "header_color_black" : ""}`}>
			<div className="header__container">
				<NavLink
					to='/'
					className='header__logo link'
				>
					<img
						src={logo}
						alt="Логотип"
					/>
				</NavLink>
				<Navigation
					loggedIn={loggedIn}
				/>
			</div>
		</header>
	)
}

export default Header