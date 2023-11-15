import "./Input.css";

const Input = ({
  name,
  title,
  validationMessage,
  type,
  value,
  placeholder,
  onChange,
  minLength,
  maxLength,
  required,
}) => {
  return (
    <label className="input" htmlFor={name}>
      <h2 className="input__title">{title}</h2>
      <input
        className={`input__line ${validationMessage ? `input_invalid` : ""}`}
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
      />
      <span
        className={`input__error ${
          validationMessage ? `input__error_visible` : ""
        }`}
      >
        {validationMessage}
      </span>
    </label>
  );
};

export default Input;
