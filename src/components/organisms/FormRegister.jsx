import useRegister from "@/src/hooks/auth/useRegister";
import InputForms from "../moleculs/InputForms";
import Label from "../atoms/labels/Index";
import SelectOption from "../atoms/selectOptions/select";
import Buttons from "../atoms/buttons";
import Links from "../atoms/links/Links";
import { handleSubmit1 } from "@/src/service/handling/handleAuth";
import SelectedForm from "../moleculs/SelectForm";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const FormRegister = () => {
  const {
    setusername,
    setPassword,
    usernameError,
    passwordError,
    setFullname,
    setEmail,
    fullnameError,
    emailError,
    setPhone,
    setDob,
    phoneError,
    dobError,
    setGender,
    genderError,
    username,
    password,
    fullname,
    email,
    dob,
    gender,
    phone,
    setusernameError,
    setFullnameError,
    setPasswordError,
    setEmailError,
    setDobError,
    setGenderError,
    setPhoneError,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    setConfirmPasswordError,
    router,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useRegister();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const url = "register";
  const fieldConfig = {
    username: { value: username, setError: setusernameError },
    password: { value: password, setError: setPasswordError },
    fullname: { value: fullname, setError: setFullnameError },
    email: { value: email, setError: setEmailError },
    phone: { value: phone, setError: setPhoneError },
    dob: { value: dob, setError: setDobError },
    gender: { value: gender, setError: setGenderError },
    confirmPassword: {
      value: confirmPassword,
      setError: setConfirmPasswordError,
    },
  };

  const selectedGender = [
    {
      value: "L",
      label: "Laki - Laki",
    },
    {
      value: "P",
      label: "Perempuan",
    },
  ];

  return (
    <div>
      <div className="sm:grid grid-cols-2 gap-4 sm:mx-10 ">
        <InputForms
          name="username"
          placeholder="Username"
          type="text"
          title="Username"
          onChange={(e) => setusername(e.target.value)}
        />
        <InputForms
          name="fullname"
          placeholder="Full Name"
          type="text"
          title="Full Name"
          onChange={(e) => setFullname(e.target.value)}
        />
        <div className="mb-5">
          {usernameError ? (
            <p className=" text-red-600 none">{usernameError}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-5">
          {fullnameError ? (
            <p className="text-red-600 ">{fullnameError}</p>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="sm:grid grid-cols-2 gap-4 sm:mx-10 ">
        <InputForms
          name="email"
          placeholder="E-Mail"
          type="text"
          title="E-Mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputForms
          name="phone"
          placeholder="Phone Number"
          type="text"
          title="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="mb-5">
          {emailError ? <p className="text-red-600">{emailError}</p> : ""}
        </div>
        <div className="mb-5">
          {phoneError ? <p className="text-red-600">{phoneError}</p> : ""}
        </div>
      </div>
      <div className="sm:grid grid-cols-2 gap-4 sm:mx-10 ">
        <InputForms
          name="dob"
          placeholder="Birthdate"
          type="date"
          title="Birthdate"
          onChange={(e) => setDob(e.target.value)}
        />
        <SelectedForm
          title={"Select Gender"}
          valueOptions={selectedGender}
          selectTitle={"Pilih Gender"}
          name={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <div className="mb-5">
          {dobError ? <p className="text-red-600">{dobError}</p> : ""}
        </div>
        <div className="mb-5">
          {genderError ? <p className="text-red-600">{genderError}</p> : ""}
        </div>
      </div>

      <div className="sm:grid grid-cols-2 gap-4 sm:mx-10 ">
        <div className="relative">
          <InputForms
            name="password"
            placeholder="******"
            type={showPassword ? "password" : "text"}
            title="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="absolute right-4 top-9 text-2xl">
            {showPassword ? (
              <IoMdEye onClick={handleShowPassword} />
            ) : (
              <IoMdEyeOff onClick={handleShowPassword} />
            )}
          </i>
        </div>
        <div className="relative">
          <InputForms
            name="confirmpassword"
            placeholder="******"
            type={showConfirmPassword ? "password" : "text"}
            title="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <i className="absolute right-4 top-9 text-2xl">
            {showConfirmPassword ? (
              <IoMdEye onClick={handleShowConfirmPassword} />
            ) : (
              <IoMdEyeOff onClick={handleShowConfirmPassword} />
            )}
          </i>
        </div>
        <div>
          {passwordError ? (
            <p className="text-red-600 mb-5">{passwordError}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          {confirmPasswordError ? (
            <p className="text-red-600 mb-5">{confirmPasswordError}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:mx-10 mt-5">
        <Buttons
          type="submit"
          onClick={(e) => {
            e.preventDefault(), handleSubmit1(fieldConfig, router, url);
          }}
          className="bg-blue-500"
        >
          Register
        </Buttons>

        <Buttons type="reset" className=" bg-red-500">
          Cancel
        </Buttons>
      </div>
      <div className="mt-3 ml-10">
        <Links linkurl={"/"} className="text-black   hover:underline">
          Already have account ? click here
        </Links>
      </div>
    </div>
  );
};

export default FormRegister;
