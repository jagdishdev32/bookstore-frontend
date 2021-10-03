import { Switch, Route, Link } from "react-router-dom";
import LinkButton from "../../components/LinkButton.components";
import {
  booksUrl,
  employesLoginUrl,
  employesRegisterUrl,
  employesUrl,
} from "../../config/frontendUrl.config";
import EmployesLogin from "./EmployesLogin.pages";
import EmployesRegister from "./EmployesRegister.pages";

import { employesRegistrationEnabled } from "../../config/other.config";

const Employes = (props) => {
  return (
    <>
      <h1>Employes Page</h1>
      <Switch>
        <Route path={`${employesUrl + employesLoginUrl}`}>
          <EmployesLogin auth={props.auth} setAuth={props.setAuth} />
        </Route>
        <Route
          path={`${employesUrl + employesRegisterUrl}`}
          component={EmployesRegister}
        >
          <EmployesRegister auth={props.auth} setAuth={props.setAuth} />
        </Route>
      </Switch>

      {props.auth.employesLogin ? (
        <>
          {/* Employes Logged In */}
          <LinkButton title="Books" to={booksUrl} />
        </>
      ) : (
        <>
          {/* Employes Not Logged In */}
          <LinkButton title="Login" to={`${employesUrl + employesLoginUrl}`} />
          {employesRegistrationEnabled ? (
            <>
              {/* Registration Enabled */}
              <LinkButton
                title="Register"
                to={`${employesUrl + employesRegisterUrl}`}
              />
            </>
          ) : (
            <>{/* Registration Not Enabled */}</>
          )}
        </>
      )}
    </>
  );
};

export default Employes;
