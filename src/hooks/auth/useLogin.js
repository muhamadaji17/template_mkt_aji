import { useState } from "react";
import { useRouter } from "next/router";
import { handleSubmit1 } from "@/src/service/handling/handling";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "login";

    const fieldConfig = {
      username: { value: username, setError: setUsernameError },
      password: { value: password, setError: setPasswordError },
    };
    await handleSubmit1(fieldConfig, router, url);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await handleSubmit1(
  //     username,
  //     password,
  //     setUsernameError,
  //     setPasswordError,
  //     router
  //   );
  // };

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
