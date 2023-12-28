import "./SectionTitle.css";

export const SectionTitle = ({ className, title }) => {
  return <h2 className={`title ${className ? `${className}` : ""}`}>{title}</h2>;
}