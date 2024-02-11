import './FilterCheckbox.css'

export const FilterCheckbox = ({ title, onFilter, isActive }) => {
	return (
		<>
			<input
				className="switch-input"
				type="checkbox"
				id="switch"
				onChange={onFilter}
				checked={isActive}
			/>
			<label className="switch-label button" htmlFor="switch">{title}</label>
		</>
	);
}