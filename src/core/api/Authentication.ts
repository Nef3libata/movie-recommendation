import axios from "axios";


export const registerUser = async () => {
  axios
    .post("http://localhost:3000/users", {
      id: 9,
      first_name: "sem",
      last_name: "mina",
      email: "bm@gmail.com",
    })
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
