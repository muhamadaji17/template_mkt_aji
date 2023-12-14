import { useState } from "react";
import { useRouter } from "next/router";
import { handleSubmit1 } from "@/src/service/handling/handleAuth";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  return {
    username,
    setUsername,
    password,
    setPassword,
    setPasswordError,
    setUsernameError,
    usernameError,
    passwordError,
    showPassword,
    setShowPassword,
    router,
  };
};

export default useLogin;
