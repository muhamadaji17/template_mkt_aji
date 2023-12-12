import InputForms from "../moleculs/inputForms";
import Links from "../atoms/links/Links";
import SelectOption from "../atoms/selectOptions/select";
import Label from "../atoms/labels/Index";
import Buttons from "../atoms/buttons";
import useRegister from "@/hooks/auth/useRegister";

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
    handleSubmit,
  } = useRegister();

  return (
    <form action="" onSubmit={handleSubmit} className=" ">
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
        <div className="none ">
          {usernameError ? (
            <p className=" text-red-600 none">{usernameError}</p>
          ) : (
            ""
          )}
        </div>
        <div>
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
        {/* {emailError ? <p className="text-red-600">{emailError}</p> : ""} */}
        <InputForms
          name="phone"
          placeholder="Phone Number"
          type="text"
          title="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* {phoneError ? <p className="text-red-600">{phoneError}</p> : ""} */}
      </div>
      <div className="sm:grid grid-cols-2 gap-4 sm:mx-10 ">
        <InputForms
          name="dob"
          placeholder="Birthdate"
          type="date"
          title="Birthdate"
          onChange={(e) => setDob(e.target.value)}
        />
        {/* {dobError ? <p className="text-red-600">{dobError}</p> : ""} */}
        <div>
          <Label>Select Gender</Label>
          <SelectOption
            name="gender"
            // value={"l"}
            valueOptions={[
              { value: "p", label: "Perempuan" },
              { value: "l", label: "Laki-Laki" },
            ]}
            onChange={(e) => setGender(e.target.value)}
            selectTitle="Pilih Jenis Kelamin"
          />
          {/* {genderError ? <p className="text-red-600">{genderError}</p> : ""} */}
        </div>
      </div>

      <div className="sm:grid grid-cols-2 gap-4 sm:mx-10 ">
        <InputForms
          name="password"
          placeholder="******"
          type="password"
          title="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* {passwordError ? (
          <p className="text-red-600 mb-5">{passwordError}</p>
        ) : (
          ""
        )} */}
        <InputForms
          name="confirmpassword"
          placeholder="******"
          type="password"
          title="Confirm Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:mx-10 mt-5">
        <Buttons type="submit" className=" bg-blue-500">
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
    </form>
  );
};

export default FormRegister;
