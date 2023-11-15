import './SubmitButton.css';

const SubmitButton = ({ title, isFormValid }) => {

	return (
		<button
			className={`button-submit button ${!isFormValid ? `button-submit_disabled` : ""}`}
			type="submit"
			disabled={!isFormValid}
		>
			{title}
		</button>
	);
}

export default SubmitButton;