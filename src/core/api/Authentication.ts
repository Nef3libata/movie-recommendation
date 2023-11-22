import axios from "axios";
import { UserValuesPayload } from "../models/api/register.model";
import { LoginValuesPayload } from "../models/api/login.model";

export const registerUser = async (values: UserValuesPayload) => {
  axios
    .post("http://localhost:3000/register", {
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
    })
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginUser = async (values: LoginValuesPayload) => {
  return axios
    .post("http://localhost:3000/login", {
      email: values.email,
      password: values.password,
    })
};
