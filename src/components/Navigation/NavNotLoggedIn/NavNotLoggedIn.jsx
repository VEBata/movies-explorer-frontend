import './NavNotLoggedIn.css';
import { NavLink } from 'react-router-dom';

function NavNotLoggedIn() {
	return (
			<ul className="header__nav-list">
				<li className="header__nav-item">
					<NavLink
						to="/signup"
						className="link"
					>
						Регистрация
					</NavLink>
				</li>
				<li className="header__nav-item link">
					<NavLink
						to="/signin"
						className="header__nav-link"
					>
						Войти
					</NavLink>
				</li>
			</ul>
	)
}

export default NavNotLoggedIn;