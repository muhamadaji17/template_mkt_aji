import { useState } from "react";
import { useRouter } from "next/router";
import LoginService from "@/service/api/authService";

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

  const validateForm = () => {
    let isValid = true;

    if (username === "") {
      setusernameError("Username is Required");
      isValid = false;
    } else {
      setusernameError("");
    }

    if (password === "") {
      setPasswordError("Password is Required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (fullname === "") {
      setFullnameError("FullName is Required");
      isValid = false;
    } else {
      setFullnameError("");
    }

    if (email === "") {
      setEmailError("E-Mail is Required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (phone === "") {
      setPhoneError("Phone Number is Required");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (dob === "") {
      setDobError("Birthdate is Required");
      isValid = false;
    } else {
      setDobError("");
    }

    if (gender === "") {
      setGenderError("Gender is Required");
      isValid = false;
    } else {
      setGenderError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = {
        username,
        password,
        fullname,
        email,
        phone,
        dob,
        gender,
      };

      await LoginService(data, router, "register");
    }
  };

  return {
    username,
    setusername,
    password,
    setPassword,
    usernameError,
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
