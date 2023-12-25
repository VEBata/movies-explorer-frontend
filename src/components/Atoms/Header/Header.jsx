import { NavLink, useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import "./Header.css";
import logo from '../../../images/logo.svg'

export const Header = ({ className }) => {
  const location = useLocation().pathname;
	const headerEndpoints = (
		location === "/movies" ||
		location === "/saved-movies" ||
		location === "/profile"
  );

  return (
    <header className={[`header ${headerEndpoints ? 'empty' : 'main'}`]}>
      <div className="header__container">
        <NavLink to='/' className='header__link link'>
          <img
            src={logo}
            alt="Логотип"
          />
        </NavLink>
        <Navigation/>
      </div>
    </header>
  )
}