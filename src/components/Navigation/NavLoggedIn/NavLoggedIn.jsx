import './NavLoggedIn.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonProfile from './ButtonProfile/ButtonProfile';
import BurgerMenuButton from './BurgerMenuButton/BurgerMenuButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const NavLoggedIn = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const getClassName = (isActive) => {
		return isActive
			? 'navigation__link navigation__link_active link'
			: 'navigation__link link';
	};

	return (
		<div className="navigation__wrapper">
			<ul className="navigation__list">
				<li>
					<NavLink
						to="/movies"
						className={({ isActive }) => getClassName(isActive)}
					>
						Фильмы
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/saved-movies"
						className={({ isActive }) => getClassName(isActive)}
					>
						Сохранённые фильмы
					</NavLink>
				</li>
			</ul>
			<ButtonProfile className={"navigation__button-profile_invisible"} />
			<BurgerMenuButton
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
			/>
			<BurgerMenu
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
			/>
		</div>
	)
}

export default NavLoggedIn;