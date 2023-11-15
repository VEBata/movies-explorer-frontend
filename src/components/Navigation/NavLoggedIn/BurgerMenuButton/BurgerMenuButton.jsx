import './BurgerMenuButton.css';

const BurgerMenuButton = ({ openMenu, setOpenMenu }) => {
	const openBurgerMenu = () => {
		setOpenMenu(true);
	}

	return (
		<button
			className={`navigation__burger-button button ${openMenu ? `active` : ""}`}
			type="button"
			onClick={ openBurgerMenu }
		>
			<span></span>
		</button>
	)
}

export default BurgerMenuButton;