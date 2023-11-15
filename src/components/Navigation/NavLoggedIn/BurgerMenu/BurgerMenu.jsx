import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';
import ButtonProfile from '../ButtonProfile/ButtonProfile';

const BurgerMenu = ({ openMenu, setOpenMenu }) => {
	const closeBurgerMenu = () => {
		setOpenMenu(false);
	}

	const getClassName = (isActive) => {
		return isActive
			? 'burger-menu__link link burger-menu__link_active'
			: 'burger-menu__link link';
	};

	return (
		<nav className={`burger-menu ${openMenu && 'burger-menu_active'}`}>
			<button className="burger-menu__button-close button" type='button' onClick={closeBurgerMenu} />
			<ul className="burger-menu__list">
				<li className="burger-menu__item">
					<NavLink
						onClick={closeBurgerMenu}
						className={({ isActive }) => getClassName(isActive)}
						to="/"
					>
						Главная
					</NavLink>
				</li>
				<li className="burger-menu__item">
					<NavLink
						onClick={closeBurgerMenu}
						className={({ isActive }) => getClassName(isActive)}
						to="/movies"
					>
						Фильмы
					</NavLink>
				</li>
				<li className="burger-menu__item">
					<NavLink
						onClick={closeBurgerMenu}
						className={({ isActive }) => getClassName(isActive)}
						to="/saved-movies"
					>
						Сохранённые фильмы
					</NavLink>
				</li>
				<li className="burger-menu__item">
					<ButtonProfile
						className={"burger-menu__button-profile"}
						onClick={closeBurgerMenu}
					/>
				</li>
			</ul>
		</nav>
	)
}

export default BurgerMenu;