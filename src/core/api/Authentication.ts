import axios from "axios";
import { UserValuesPayload } from "../models/api/register.model";
import { LoginValuesPayload } from "../models/api/login.model";

const registerURL = import.meta.env.VITE_APP_API_URL + "/register";
const loginURL = import.meta.env.VITE_APP_API_URL + "/login";

export const registerUser = async (values: UserValuesPayload) => {
  return axios.post(registerURL, {
    phoneNumber: values.phoneNumber,
    email: values.email,
    password: values.password,
  });
};

export const loginUser = async (values: LoginValuesPayload) => {
  const response = await axios.post(loginURL, {
    email: values.email,
    password: values.password,
  });

  const accessToken = response.data.accessToken;
  localStorage.setItem("accessToken", accessToken);

  return response;
};