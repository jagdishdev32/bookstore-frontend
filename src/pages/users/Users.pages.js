// import { Switch, Route, Link } from "react-router-dom";
// import {
//   usersLoginUrl,
//   usersRegisterUrl,
//   usersUrl,
// } from "../../config/frontendUrl.config";
// import UsersLogin from "./UsersLogin.pages";
// import UsersRegister from "./UsersRegister.pages";

// const Users = () => {
//   return (
//     <>
//       <h1>Users Page</h1>
//       <Switch>
//         <Route path={`${usersUrl}${usersLoginUrl}`} component={UsersLogin} />
//         <Route
//           path={`${usersUrl}${usersRegisterUrl}`}
//           component={UsersRegister}
//         />
//       </Switch>

//       <Link to={`${usersUrl}${usersLoginUrl}`} className="btn btn-primary m-2">
//         Login
//       </Link>
//       <Link
//         to={`${usersUrl}${usersRegisterUrl}`}
//         className="btn btn-primary m-2"
//       >
//         Registor
//       </Link>
//     </>
//   );
// };

// export default Users;

import { Switch, Route, Link } from "react-router-dom";
import LinkButton from "../../components/LinkButton.components";
import { transactionsUrl } from "../../config/backendUrl.config";
import {
  booksUrl,
  usersLoginUrl,
  usersRegisterUrl,
  usersUrl,
} from "../../config/frontendUrl.config";
import UsersLogin from "./UsersLogin.pages";
import UsersRegister from "./UsersRegister.pages";

const Users = (props) => {
  return (
    <>
      <h1>Users Page</h1>
      <Switch>
        <Route path={`${usersUrl + usersLoginUrl}`}>
          <UsersLogin auth={props.auth} setAuth={props.setAuth} />
        </Route>
        <Route
          path={`${usersUrl + usersRegisterUrl}`}
          component={UsersRegister}
        >
          <UsersRegister auth={props.auth} setAuth={props.setAuth} />
        </Route>
      </Switch>
      <br />

      {props.auth.usersLogin ? (
        <>
          {/* Users Logged In */}
          <LinkButton title="Books" to={booksUrl} />
          <LinkButton title="Transactions" to={transactionsUrl} />
        </>
      ) : (
        <>
          {/* Users Not Logged In */}
          <LinkButton title="Login" to={`${usersUrl + usersLoginUrl}`} />
          <LinkButton title="Register" to={`${usersUrl + usersRegisterUrl}`} />
        </>
      )}
    </>
  );
};

export default Users;
