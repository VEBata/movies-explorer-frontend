import "./SectionTitle.css";


const SectionTitle = ({ className, title }) => {
	return <h2 className={`section-title ${className ? `${className}` : ""}`}>{title}</h2>;
}

export default SectionTitle;
