import { useState } from "react";
import { useRouter } from "next/router";
import { handleSubmit1, validateForm } from "@/src/service/auth/loginService";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  // const validateForm = () => {
  //   let isValid = true;

  //   if (username === "") {
  //     setUsernameError("Username is Required");
  //     isValid = false;
  //   } else {
  //     setUsernameError("");
  //   }

  //   if (password === "") {
  //     setPasswordError("Password is Required");
  //     isValid = false;
  //   } else {
  //     setPasswordError("");
  //   }

  //   return isValid;
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     const data = {
  //       username,
  //       password,
  //     };

  //     await AuthService(data, router, "login");
  //   }
  // };

  validateForm(username, password, setUsernameError, setPasswordError);

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSubmit1(
      username,
      password,
      router,
      setUsernameError,
      setPasswordError
    );
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    setPasswordError,
    setUsernameError,
    usernameError,
    passwordError,
    handleSubmit,
  };
};

export default useLogin;
