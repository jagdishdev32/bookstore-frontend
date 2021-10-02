import axios from "axios";
import {
  baseUrl,
  employesUrl,
  employesLoginUrl,
} from "../config/backendUrl.config";

export const employesLogin = async (username, password) => {
  return await axios({
    method: "post",
    url: baseUrl + employesUrl + employesLoginUrl,
    data: {
      //   username: "testemployee",
      //   password: "secret",
      username,
      password,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const employesHandleLoggedIn = async (token, setAuth) => {
  setAuth((prevValue) => {
    return { ...prevValue, employesLogin: true, employesToken: token };
  });

  localStorage.setItem("employesLogin", true);
  localStorage.setItem("employesToken", token);
  return;
};

export const employesHandleLogout = (setAuth) => {
  setAuth((prevValue) => {
    return { ...prevValue, employesLogin: false, employesToken: undefined };
  });

  localStorage.removeItem("employesLogin");
  localStorage.removeItem("employesToken");
  return;
};

export const employesHandleLoggedInSubmit = (
  e,
  username,
  password,
  history,
  setAuth
) => {
  e.preventDefault();
  employesLogin(username, password)
    .then((data) => {
      employesHandleLoggedIn(data.access_token, setAuth)
        .then(() => {
          alert("Login Successful");
          history.push(employesUrl);
        })
        .catch((error) => alert(error.message));
    })
    .catch((error) => alert(error.message));

  return;
};
