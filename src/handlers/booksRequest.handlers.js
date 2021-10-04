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
export const getBooksByName = (name, token) => {
  return axios({
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

export const updateBookRequest = (
  bookId,
  name,
  author,
  token,
  quantity = 10,
  price = 100
) => {
  return axios({
    method: "post",
    url: baseUrl + booksUrl + "/" + bookId,
    headers: {
      Authorization: token,
    },
    data: {
      name,
      quantity,
      author,
      price,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const updateBookHandler = (
  bookId,
  name,
  author,
  quantity,
  price,
  token,
  history
) => {
  return updateBookRequest(bookId, name, author, token, quantity, price)
    .then((response) => {
      console.log(response);
      alert("Book Updated");
      return history.push(booksUrl);
      // return alert(response);
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};

export const deleteBookHandler = (bookId, token) => {
  return axios({
    method: "delete",
    url: baseUrl + booksUrl + "/" + bookId,
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      console.log(response);
      // alert(response);
      alert("Book Deleted");
      return null;
      // return response.data;
    })
    .catch((error) => {
      throw error;
    });
  // return alert("Delete Button");
};

export const createBookRequest = (
  name,
  author,
  token,
  quantity = 10,
  price = 100
) => {
  return axios({
    method: "post",
    url: baseUrl + booksUrl,
    headers: {
      Authorization: token,
    },
    data: {
      name,
      quantity,
      author,
      price,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const createBookHandler = (
  name,
  author,
  quantity,
  price,
  token,
  history
) => {
  createBookRequest(name, author, token, quantity, price)
    .then((response) => {
      console.log(response);
      alert("Book Created");
      return history.push(booksUrl);
      // return alert(response);
    })
    .catch((error) => console.log(error));
};
