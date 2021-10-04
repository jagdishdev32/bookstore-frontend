const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? process.env.REACT_APP_BACKEND_BASE_URL
  : "http://localhost:5000";

const data = {
  baseUrl: baseUrl,
  booksUrl: "/books",
  booksSearchUrl: "/search",
  employesUrl: "/employes",
  employesLoginUrl: "/login",
  employesRegisterUrl: "/register",
  transactionsUrl: "/transactions",
  purchasesUrl: "/purchase",
  usersUrl: "/users",
  usersLoginUrl: "/login",
  usersRegisterUrl: "/register",
};

module.exports = data;
