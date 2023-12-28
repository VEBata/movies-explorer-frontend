import "./BurgerMenu.css";
import { ButtonProfile } from "../../ButtonProfile/ButtonProfile";
import { NavLink } from "react-router-dom";

export const BurgerMenu = ({ openMenu, setOpenMenu }) => {
  const links = [
    {
      link: '/',
      text: 'Главная',
      isActive: false
    },
    {
      link: '/movies',
      text: 'Фильмы',
      isActive: false
    },
    {
      link: '/saved-movies',
      text: 'Сохраненные фильмы',
      isActive: false
    }
  ]
  const closeBurgerMenu = () => {
		setOpenMenu(false);
	}

  return (
    <nav className={`burger-menu ${openMenu ? 'active' : ''}`}>
      <button className="button burger-menu__close" type='button' onClick={closeBurgerMenu} />
			<ul className="burger-menu__button-list">
        {
          links.map((link, i) => (
            <li className="burger-menu__button-item" key={i}>
              <NavLink
                className={`burger-menu__button-link link`}
                onClick={closeBurgerMenu}
                to={link.link}
              >
                {link.text}
              </NavLink>
            </li>
          ))
        }
				<li className="burger-menu__button-item">
					<ButtonProfile
						className={"burger-menu__button-profile"}
						onClick={closeBurgerMenu}
					/>
				</li>
			</ul>
    </nav>
	)
}