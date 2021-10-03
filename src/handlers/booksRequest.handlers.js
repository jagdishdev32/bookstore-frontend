import axios from "axios";
import { baseUrl, booksSearchUrl, booksUrl } from "../config/backendUrl.config";

export const getBooks = async (token) => {
  return await axios({
    method: "get",
    //   url: "http://localhost:5000/books",
    url: baseUrl + booksUrl,
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

// backendurl GET /books/search/:name
export const getBooksByName = async (name, token) => {
  return await axios({
    method: "get",
    url: baseUrl + booksUrl + booksSearchUrl + "/" + name,
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
