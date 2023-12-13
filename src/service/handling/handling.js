import AuthService from "../api/authService";
import { validateForm } from "../validate/validate";

export const handleSubmit1 = async (fieldConfig, router, url) => {
  const errors = validateForm(fieldConfig);

  const isValid = Object.values(errors).every((error) => error === "");

  if (isValid) {
    const data = {};
    for (const fieldName in fieldConfig) {
      data[fieldName] = fieldConfig[fieldName].value;
    }

    await AuthService(data, router, url);
  }

  return isValid;
};
