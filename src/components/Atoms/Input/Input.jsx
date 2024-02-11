import "./Input.css";

export const Input = ({
	name,
	title,
	validationMessage,
	type,
	value,
	pattern,
	placeholder,
	onChange,
	minLength,
	maxLength,
	required,
	inputRef,
}) => {

	return (
		<label className="input" htmlFor={name}>
			<h5 className="input__title">
				{title}
			</h5>
			<input
				className={`input__line ${validationMessage ? `input_invalid` : ""}`}
				type={type}
				name={name}
				id={name}
				value={value}
				pattern={pattern}
				placeholder={placeholder}
				onChange={onChange}
				minLength={minLength}
				maxLength={maxLength}
				required={required}
				ref={inputRef}
			/>
			<span className={`input__error ${validationMessage ? `input__error_visible` : ""}`}>
				{validationMessage}
			</span>
		</label>
	);
}