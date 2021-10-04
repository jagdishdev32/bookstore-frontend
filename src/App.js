import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header.components";

import Home from "./pages/Home.pages";
import About from "./pages/About.pages";
import NotFound from "./pages/NotFound.pages";
import Users from "./pages/users/Users.pages";
import Employes from "./pages/employes/Employes.pages";
import Books from "./pages/books/Books.pages";
import Transactions from "./pages/transactions/transactions.pages";

import {
  homeUrl,
  aboutUrl,
  booksUrl,
  employesUrl,
  usersUrl,
  transactionsUrl,
  createBookUrl,
  updateBookUrl,
} from "./config/frontendUrl.config";

import loginData from "./data/loginData.data";
import CreateBook from "./pages/books/CreateBook.pages";
import UpdateBook from "./pages/books/UpdateBook.pages";

function App() {
  const [auth, setAuth] = useState(loginData);

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
            <Route path={createBookUrl}>
              <CreateBook auth={auth} setAuth={setAuth} />
            </Route>
            <Route path={updateBookUrl}>
              <UpdateBook auth={auth} setAuth={setAuth} />
            </Route>
            <Route path={transactionsUrl}>
              <Transactions auth={auth} setAuth={setAuth} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
