export const validateForm = (fieldConfig) => {
  const errors = {};

  for (const fieldName in fieldConfig) {
    const value = fieldConfig[fieldName].value;
    const setError = fieldConfig[fieldName].setError;

    if (value === "") {
      errors[fieldName] = `${fieldName} is Required`;
      setError(`${fieldName} is Required`);
    } else {
      errors[fieldName] = "";
      setError("");
    }
  }

  return errors;
};
