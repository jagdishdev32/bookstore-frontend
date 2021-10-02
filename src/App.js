import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header.components";

import Home from "./pages/Home.pages";
import About from "./pages/About.pages";
import NotFound from "./pages/NotFound.pages";
import Users from "./pages/users/Users.pages";
import Employes from "./pages/employes/Employes.pages";
import Books from "./pages/books/books.pages";

import {
  homeUrl,
  aboutUrl,
  booksUrl,
  employesUrl,
  usersUrl,
} from "./config/frontendUrl.config";

function App() {
  const [auth, setAuth] = useState({
    login: false,
    employesLogin: false,
    usersLogin: false,
  });

  return (
    <>
      <BrowserRouter>
        <Header auth={auth} setAuth={setAuth} />
        <div className="container">
          <Switch>
            <Route path={homeUrl} component={Home} exact />
            <Route path={aboutUrl} component={About} />
            <Route path={usersUrl} component={Users} />
            <Route path={employesUrl} component={Employes} />
            <Route path={booksUrl} component={Books} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
