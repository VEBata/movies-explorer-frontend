import './FilterCheckbox.css'

const FilterCheckbox = ({ title, onFilter, isActive }) => {
	return (
		<>
			<input
				className="switch"
				type="checkbox"
				id="switch"
				onChange={onFilter}
				checked={isActive}
			/>
			<label className="switch-label button" htmlFor="switch">{title}</label>
		</>
	);
}

export default FilterCheckbox;