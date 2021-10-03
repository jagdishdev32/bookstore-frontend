import axios from "axios";
import { transactionsUrl, baseUrl } from "../config/backendUrl.config";

export const purchaseHandler = (bookId, userToken) => {
  alert(bookId + " " + userToken);
  return console.log(bookId, userToken);
};

export const getTransactions = async (token, login = "employes") => {
  let url = baseUrl + transactionsUrl;
  if (login === "users") {
    url += "/purchase";
  }
  return await axios({
    method: "get",
    // url: "http://localhost:5000/transactions",
    // url: baseUrl + transactionsUrl,
    url: url,
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

export const getTransactionsBySearch = async (token, user_id) => {
  let url = baseUrl + transactionsUrl + "/purchase";
  return await axios({
    method: "get",
    url: url,
    headers: {
      Authorization: token,
    },
    data: {
      user_id: user_id,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
