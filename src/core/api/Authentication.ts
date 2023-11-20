import axios from "axios";

interface UserValues {
  phoneNumber: string;
  email: string;
  password: string;
}

export const registerUser = async (values: UserValues) => {
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
