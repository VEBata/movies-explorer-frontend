import { useState } from "react";
import "./LoggedIn.css";
import { ButtonProfile } from "./ButtonProfile/ButtonProfile";
import { BurgerMenu } from "./Burger/BurgerMenu/BurgerMenu";
import { BurgerMenuButton } from "./Burger/BurgerMenuButton/BurgerMenuButton";
import { ButtonClose, ButtonItem, ButtonLink, ButtonList, BurgerMenuWrapper } from "./Burger/BurgerMenu/BurgerMenu.css";
import { NavLink } from "react-router-dom";

export const LoggedIn = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    {
      link: '/movies',
      text: 'Фильмы',
      isActive: false
    },
    {
      link: '/saved-movies',
      text: 'Сохраненные фильмы',
      isActive: false
    },
  ]

  const openBurgerMenu = () => {
		setOpenMenu(true);
	}

  const closeBurgerMenu = () => {
		setOpenMenu(false);
	}

  return (
    <div className="nav__wrapper">
      <ul className="nav__list">
        {
          links.map((link, i) => (
            <li key={i}>
              <NavLink to={link.link} className={`nav__link link`}>
                {link.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <ButtonProfile className={"nav__button-profile_invisible"} />
      <BurgerMenuButton open={openMenu} setOpenMenu={setOpenMenu} />
      <BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  )
}