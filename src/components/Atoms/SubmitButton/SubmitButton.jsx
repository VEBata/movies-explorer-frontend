import './SubmitButton.css';

export const SubmitButton = ({ title, isFormValid, onClick }) => {

	return (
		<button
			className={`submit-button button ${!isFormValid ? `button-submit_disabled` : ""}`}
			type="submit"
			disabled={!isFormValid}
			onClick={(e) => isFormValid && onClick?.(e)}
		>
			{title}
		</button>
	);
}