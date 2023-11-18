import axios from "axios";

export const listMovies = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies-page-1");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
