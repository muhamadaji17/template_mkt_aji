"use client";
import React, { useState } from "react";
import InputForms from "../moleculs/inputForms";
import Buttons from "../atoms/buttons";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter, useRef } from "next/navigation";
import Links from "../atoms/links/Links";
import useLogin from "@/hooks/auth/useLogin";

const FormLogin = () => {
  const {
    setUsername,
    setPassword,
    usernameError,
    passwordError,
    handleSubmit,
  } = useLogin();

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className=" mt-5 lg:ml-40 w-72">
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
      <div className="lg:ml-40 w-72 ">
        <InputForms
          name="password"
          placeholder="******"
          type="password"
          title="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError ? (
          <p className="text-red-600 mb-5">{passwordError}</p>
        ) : (
          ""
        )}
      </div>
      <div className="lg:ml-40">
        <Buttons type="submit" className="bg-blue-500">
          Login
        </Buttons>
      </div>
      <div className=" mt-5 lg:ml-40">
        <Links linkurl={"/register"} className="text-black  hover:underline">
          Don't have account ? click here
        </Links>
      </div>
    </form>
  );
};

export default FormLogin;
