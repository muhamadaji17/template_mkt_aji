// export const validateForm = (fieldConfig) => {
//   const errors = {};
//   // console.log("va", fieldConfig);

//   for (const fieldName in fieldConfig) {
//     const value = fieldConfig[fieldName].value;
//     const setError = fieldConfig[fieldName].setError;

//     if (value === "") {
//       errors[fieldName] = `${fieldName} is Required`;
//       setError(`${fieldName} is Required`);
//     } else {
//       errors[fieldName] = "";
//       setError("");
//     }
//     // console.log(fieldName);
//   }

//   return errors;
// };

export const validateForm = (fieldConfig) => {
  const errors = {};

  for (const fieldName in fieldConfig) {
    const value = fieldConfig[fieldName].value;
    const setError = fieldConfig[fieldName].setError;

    // Check if it's the  field is null
    if (value === "") {
      errors[fieldName] = `${fieldName} is Required`;
      setError(`${fieldName} is Required`);
    } else {
      errors[fieldName] = "";
      setError("");
    }

    // Check if it's the confirmPassword field
    if (fieldName === "confirmPassword") {
      const passwordValue = fieldConfig["password"].value;

      if (value !== passwordValue) {
        errors[fieldName] = "Confirm Password must match the Password";
        setError("Confirm Password must match the Password");
      } else {
        errors[fieldName] = "";
        setError("");
      }
    }
  }

  return errors;
};
