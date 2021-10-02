import { Switch, Route, Link } from "react-router-dom";
import {
  usersLoginUrl,
  usersRegisterUrl,
  usersUrl,
} from "../../config/frontendUrl.config";
import UsersLogin from "./UsersLogin.pages";
import UsersRegister from "./UsersRegister.pages";

const Users = () => {
  return (
    <>
      <h1>Users Page</h1>
      <Switch>
        <Route path={`${usersUrl}${usersLoginUrl}`} component={UsersLogin} />
        <Route
          path={`${usersUrl}${usersRegisterUrl}`}
          component={UsersRegister}
        />
      </Switch>

      <Link to={`${usersUrl}${usersLoginUrl}`} className="btn btn-primary m-2">
        Login
      </Link>
      <Link
        to={`${usersUrl}${usersRegisterUrl}`}
        className="btn btn-primary m-2"
      >
        Registor
      </Link>
    </>
  );
};

export default Users;
