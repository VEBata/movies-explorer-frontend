import './FilterCheckbox.css'

const FilterCheckbox = ({ title }) => {
	return (
		<>
			<input className="switch" type="checkbox" id="switch" />
			<label className="switch-label button" htmlFor="switch">{title}</label>
		</>
	);
}

export default FilterCheckbox;