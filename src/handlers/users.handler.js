import axios from "axios";
import {
  baseUrl,
  usersUrl,
  usersLoginUrl,
  usersRegisterUrl,
} from "../config/backendUrl.config";

export const usersLogin = async (username, password) => {
  return await axios({
    method: "post",
    url: baseUrl + usersUrl + usersLoginUrl,
    data: {
      //   username: "testemployee",
      //   password: "secret",
      username,
      password,
    },
  })
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const UsersRegisterRequest = (
  username,
  password,
  address,
  age,
  phone_no
) => {
  return axios({
    method: "post",
    url: baseUrl + usersUrl + usersRegisterUrl,
    data: {
      //   username: "testemployee",
      //   password: "secret",
      username,
      password,
      address,
      age,
      phone_no,
    },
  })
    .then((response) => {
      // console.log(response.data);
      // alert(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const usersHandleLoggedIn = async (token, setAuth) => {
  setAuth((prevValue) => {
    return { ...prevValue, usersLogin: true, usersToken: token };
  });

  localStorage.setItem("usersLogin", true);
  localStorage.setItem("usersToken", token);
  return;
};

export const usersHandleLogout = (setAuth) => {
  setAuth((prevValue) => {
    return { ...prevValue, usersLogin: false, usersToken: undefined };
  });

  localStorage.removeItem("usersLogin");
  localStorage.removeItem("usersToken");
  return;
};

export const usersHandleLoggedInSubmit = (
  e,
  username,
  password,
  history,
  setAuth
) => {
  e.preventDefault();
  usersLogin(username, password)
    .then((data) => {
      usersHandleLoggedIn(data.access_token, setAuth)
        .then(() => {
          alert("Login Successful");
          history.push(usersUrl);
        })
        .catch((error) => alert(error.message));
    })
    .catch((error) => alert(error.message));

  return;
};

export const usersHandleRegisterSubmit = (
  e,
  username,
  password,
  age,
  address,
  phoneNo,
  history,
  setAuth
) => {
  e.preventDefault();

  UsersRegisterRequest(username, password, address, age, phoneNo)
    .then((data) => {
      usersHandleLoggedInSubmit(e, username, password, history, setAuth);
    })
    .catch((error) => alert(error.message));

  // Loggin In After registration
  return;
};
