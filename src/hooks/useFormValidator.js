import { useState, useEffect, useRef } from "react";

export const useFormValidator = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const inputsRef = useRef({}) 
  const [_isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setErrors({});
    setIsFormValid(false);
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });

    setIsFormValid(event.target.closest(".form"));
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setIsFormValid(false);
  };

  const getProps = (name) => ({
    name,
    onChange: handleChange,
    value: values[name],
    validationMessage: errors[name],
    inputRef: el => inputsRef.current[name] = (el)
  })

  const isFormValid = Object.values(inputsRef.current).every(x=>x.validity?.valid)

  return {
    values,
    errors,
    isFormValid,
    setIsFormValid,
    setValues,
    handleChange,
    resetForm,
    getProps,
  };
};
