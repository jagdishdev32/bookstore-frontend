const loginData = {
  //   login: false,
  // employesLogin: false,
  //   employesRegistrationEnabled: true,
  employesLogin:
    localStorage.getItem("employesLogin") === "true" ? true : false,
  employesToken: localStorage.getItem("employesToken")
    ? localStorage.getItem("employesToken")
    : undefined,
  // employesUsername: "testemployee",
  // employesPassword: "secret",
  // employesToken:
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImVtcGxveWVlX2lkIjo2LCJpYXQiOjE2MzMxNzA4MjYsImV4cCI6MTYzMzE3NDQyNn0.hHR3LspXjvKxNShTobK6UEul024-HWe7-rg_MIJva10",
  usersLogin: localStorage.getItem("usersLogin") === "true" ? true : false,
  usersToken: localStorage.getItem("usersToken")
    ? localStorage.getItem("usersToken")
    : undefined,
  // usersUsername: "testuser",
  // usersPassword: "secret",
  // usersToken:
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwidXNlcl9pZCI6MywiaWF0IjoxNjMzMTcxMDAxLCJleHAiOjE2MzMxNzQ2MDF9.L8SYNZiduP5YOaGS1LtN7iccJRfHWkNEux4ROYUFqq0",
};

export default loginData;
