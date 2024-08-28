import axios from "axios";
import Cookies from "js-cookie";

export const tryLogin = async (
  values: LoginValues,
  { resetForm }: any
) => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_LOGIN_API as string;
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
    if (error.response.data.message === "User not found") {
      alert("USER NOT FOUND");
      resetForm({ values: { ...values, email: "", password: "" } });
    } else if (error.response.data.message === "password not correct") {
      resetForm({ values: { ...values, password: "" } });
      alert("INCORRECT PASSWORD");
    } else {
      console.log("ERROR HAPPENED CONTACT xucishvilin90@gmail.com");
    }
  }
};
