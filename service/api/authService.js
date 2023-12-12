import axios from "axios";
import Swal from "sweetalert2";

const LoginService = async (data, router, method) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/api/auth/${method}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(response);

    if (response) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response?.data?.message,
        confirmButtonColor: "#00FA9A",
      });
      if (method == "login") {
        const token = response?.data?.accessToken;
        const expiresIn = response?.data?.expiresIn;
        const userId = response?.data?.userId;

        sessionStorage?.setItem("xtoken", token);
        sessionStorage?.setItem("expiresIn", expiresIn);
        sessionStorage?.setItem("userId", userId);
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      confirmButtonColor: "#1E90FF",
      text: error.response?.data?.message,
    });
  }
};
export default LoginService;
