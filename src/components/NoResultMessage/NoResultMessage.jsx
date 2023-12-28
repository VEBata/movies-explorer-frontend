import './NoResultMessage.css';

export const NoResultMessage = ({ message, className }) => {
	return <p className={[`message ${className}`]}>{message}</p>;
}