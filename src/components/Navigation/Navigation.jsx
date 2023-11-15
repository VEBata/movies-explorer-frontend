import './Navigation.css';
import NavNotLoggedIn from './NavNotLoggedIn/NavNotLoggedIn';
import NavLoggedIn from './NavLoggedIn/NavLoggedIn';

const Navigation = ({ loggedIn }) => {
	return (
		<nav className="navigation">
			{!loggedIn && <NavNotLoggedIn />}
			{loggedIn && <NavLoggedIn />}
		</nav>
	)
}

export default Navigation;