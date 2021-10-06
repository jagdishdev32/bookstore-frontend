const other = {
  employesRegistrationEnabled: true,
  hashEnabled: true,
  basename: process.env.REACT_APP_FRONTEND_BASE_URL
    ? process.env.REACT_APP_FRONTEND_BASE_URL
    : "",
};

module.exports = other;
