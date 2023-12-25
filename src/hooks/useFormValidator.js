import { useState, useEffect } from "react";

export const useFormValidator = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setValues({});
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
    setValues({});
    setErrors({});
    setIsFormValid(false);
  };

  return {
    values,
    errors,
    isFormValid,
    setIsFormValid,
    setValues,
    handleChange,
    resetForm,
  };
};
