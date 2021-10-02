import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header.components";

import Home from "./pages/Home.pages";
import About from "./pages/About.pages";
import NotFound from "./pages/NotFound.pages";
import Users from "./pages/users/Users.pages";
import Employes from "./pages/employes/Employes.pages";
import Books from "./pages/books/books.pages";
import Transactions from "./pages/transactions/transactions.pages";

import {
  homeUrl,
  aboutUrl,
  booksUrl,
  employesUrl,
  usersUrl,
  transactionsUrl,
} from "./config/frontendUrl.config";

function App() {
  const [auth, setAuth] = useState({
    login: false,
    // employesLogin: false,
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
  });

  return (
    <>
      <BrowserRouter>
        <Header auth={auth} setAuth={setAuth} />
        <div className="container">
          <Switch>
            <Route path={homeUrl} component={Home} exact />
            <Route path={homeUrl} exact>
              <Home auth={auth} />
            </Route>
            <Route path={aboutUrl}>
              <About auth={auth} setAuth={setAuth} />
            </Route>
            <Route path={usersUrl}>
              <Users auth={auth} setAuth={setAuth} />
            </Route>
            <Route path={employesUrl}>
              <Employes auth={auth} setAuth={setAuth} />
            </Route>
            <Route path={booksUrl}>
              <Books auth={auth} setAuth={setAuth} />
            </Route>
            <Route path={transactionsUrl}>
              <Transactions auth={auth} setAuth={setAuth} />
            </Route>
            <Route component={NotFound} />

            {/* <Route path={homeUrl} component={Home} exact />
            <Route path={aboutUrl} component={About} />
            <Route path={usersUrl} component={Users} />
            <Route path={employesUrl} component={Employes} />
            <Route path={booksUrl} component={Books} />
            <Route component={NotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
