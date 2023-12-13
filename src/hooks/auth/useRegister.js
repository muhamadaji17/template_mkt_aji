import { useState } from "react";
import { useRouter } from "next/router";
import AuthService from "@/src/service/api/authService";
import { handleSubmit1 } from "@/src/service/handling/handling";

const useRegister = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setusernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [dobError, setDobError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "register";
    const fieldConfig = {
      username: { value: username, setError: setusernameError },
      password: { value: password, setError: setPasswordError },
      fullname: { value: fullname, setError: setFullnameError },
      email: { value: email, setError: setEmailError },
      phone: { value: phone, setError: setPhoneError },
      dob: { value: dob, setError: setDobError },
      gender: { value: gender, setError: setGenderError },
    };
    await handleSubmit1(fieldConfig, router, url);
  };

  return {
    username,
    setusername,
    password,
    setPassword,
    usernameError,
    setusernameError,
    setPasswordError,
    passwordError,
    fullname,
    setFullname,
    email,
    setEmail,
    fullnameError,
    emailError,
    phone,
    setPhone,
    dob,
    setDob,
    phoneError,
    dobError,
    gender,
    setGender,
    genderError,
    handleSubmit,
  };
};

export default useRegister;
