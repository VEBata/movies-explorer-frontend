import "./BurgerMenuButton.css";

export const BurgerMenuButton = ({ open, setOpenMenu }) => {
  return (
    <button className="burger-menu__button" type="button" onClick={() => setOpenMenu(!open)}>
      <span></span>
    </button>
  );
};