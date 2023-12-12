import { useState } from "react";
import { useRouter } from "next/router";
import LoginService from "@/service/api/authService";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const validateForm = () => {
    let isValid = true;

    if (username === "") {
      setUsernameError("Username is Required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("Password is Required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = {
        username,
        password,
      };

      await LoginService(data, router, "login");
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    usernameError,
    passwordError,
    handleSubmit,
  };
};

export default useLogin;
