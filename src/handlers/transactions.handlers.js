import axios from "axios";
import {
  transactionsUrl,
  baseUrl,
  purchasesUrl,
} from "../config/backendUrl.config";

export const purchaseHandler = (bookId, token, quantity = 1) => {
  // alert(bookId + " " + userToken);
  // return console.log(bookId, userToken);
  let url = baseUrl + transactionsUrl + purchasesUrl + "/" + bookId;
  return axios({
    method: "post",
    url: url,
    headers: {
      Authorization: token,
    },
    data: {
      quantity: quantity,
    },
  })
    .then((response) => {
      // alert(response.data);
      // console.log(response.data);
      alert("Purchase Complete");
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
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
  let url = baseUrl + transactionsUrl + purchasesUrl + "/";
  return await axios({
    method: "get",
    url: url,
    headers: {
      Authorization: token,
    },

    // params: {
    //   // user_id: user_id,
    //   user_id: 1,
    //   userid: 1,
    //   random: 2,
    // },
    // body: {
    //   username: "laksdj",
    // },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error.message);
      throw error;
    });
};
