import useLogin from "@/src/hooks/auth/useLogin";

const LoginPattern = (
  username,
  password,
  setUsernameError,
  setPasswordError
) => {
  const fieldConfig = {
    username: { value: username, setError: setUsernameError },
    password: { value: password, setError: setPasswordError },
  };

  const url = "login";

  return { fieldConfig, url };
};
export default LoginPattern;
