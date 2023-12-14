import useLogin from "@/src/hooks/auth/useLogin";
import React, { useState } from "react";
import InputForms from "../moleculs/InputForms";
import Buttons from "../atoms/buttons";
import Links from "../atoms/links/Links";
import { handleSubmit1 } from "@/src/service/handling/handleAuth";
import LoginPattern from "@/src/patterns/auth/loginPatern";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const FormLogin = () => {
  const {
    usernameError,
    passwordError,
    username,
    password,
    showPassword,
    setShowPassword,
    setUsername,
    setPassword,
    setPasswordError,
    setUsernameError,
    router,
  } = useLogin();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const { fieldConfig, url } = LoginPattern(
    username,
    password,
    setUsernameError,
    setPasswordError
  );

  return (
    <div>
      <div className=" mt-5 lg:ml-40 w-72 mb-5">
        <InputForms
          name="username"
          placeholder="Username"
          type="text"
          title="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError ? (
          <p className="text-red-600 mb-5">{usernameError}</p>
        ) : (
          ""
        )}
      </div>
      <div className="lg:ml-40 w-72 mb-5 relative">
        <InputForms
          name="password"
          placeholder="******"
          type={showPassword ? "password" : "text"}
          title="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="absolute right-5 top-9 text-2xl">
          {showPassword ? (
            <IoMdEye onClick={handleShowPassword} />
          ) : (
            <IoMdEyeOff onClick={handleShowPassword} />
          )}
        </i>
        {passwordError ? (
          <p className="text-red-600 mb-5">{passwordError}</p>
        ) : (
          ""
        )}
      </div>
      <div className="lg:ml-40">
        <Buttons
          onClick={(e) => {
            e.preventDefault(), handleSubmit1(fieldConfig, router, url);
          }}
          type="submit"
          className="bg-blue-500"
        >
          Login
        </Buttons>
      </div>
      <div className=" mt-5 lg:ml-40">
        <Links linkurl={"/register"} className="text-black  hover:underline">
          Don't have account ? click here
        </Links>
      </div>
    </div>
  );
};

export default FormLogin;
