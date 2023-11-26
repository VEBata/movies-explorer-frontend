import './NavTab.css';

const NavTab = () => {
	return (
		<ul className="navtab">
			<li className="navtab__item">
				<a className="navtab__link link" href="#about-project">О проекте</a>
			</li>
			<li className="navtab__item">
				<a className="navtab__link link" href="#techs">Технологии</a>
			</li>
			<li className="navtab__item">
				<a className="navtab__link link" href="#about-me">Студент</a>
			</li>
		</ul>
	)
}

export default NavTab