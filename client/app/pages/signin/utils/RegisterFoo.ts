import axios from "axios";
import Cookies from "js-cookie";

export const Register = async (values: RegisterValues) => {
  const API_KEY = process.env.NEXT_PUBLIC_REGISTER_API as string;
  try {
    const data = {
      email: values.email,
      password: values.password,
    };
    const response = await axios.post(API_KEY, data);
    const token = response.data.token;
    const expiresIn = response.data.expireDay;
    Cookies.set("token", token, { expires: expiresIn, path: "" });
    window.location.href = "/pages/main";
  } catch (error: any) {
    if (error.response.status === 400) {
      alert("email is already used");
      (values.email = ""),
        (values.password = ""),
        (values.repeatedPassword = "");
    }
  }
};
