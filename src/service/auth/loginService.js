import AuthService from "../api/authService";

// loginService.js
export const validateForm = (username, password) => {
  const errors = {};

  if (username === "") {
    errors.username = "Username is required";
  }

  if (password === "") {
    errors.password = "Password is required";
  }

  return errors;
};

export const handleSubmit1 = async (
  username,
  password,
  router,
  setUsernameError,
  setPasswordError
) => {
  const errors = validateForm(username, password);

  if (errors.username) {
    setUsernameError(errors.username);
  } else {
    setUsernameError("");
  }

  if (errors.password) {
    setPasswordError(errors.password);
  } else {
    setPasswordError("");
  }

  const data = { username, password };
  if (Object.keys(errors).length === 0) {
    await AuthService(data, router, "login");
  }
};
