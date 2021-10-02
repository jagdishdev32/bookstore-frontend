import { Switch, Route, Link } from "react-router-dom";
import {
  employesLoginUrl,
  employesRegisterUrl,
  employesUrl,
} from "../../config/frontendUrl.config";
import EmployesLogin from "./EmployesLogin.pages";
import EmployesRegister from "./EmployesRegister.pages";

const Employes = () => {
  return (
    <>
      <h1>Employes Page</h1>
      <Switch>
        <Route
          path={`${employesUrl + employesLoginUrl}`}
          component={EmployesLogin}
        />
        <Route
          path={`${employesUrl + employesRegisterUrl}`}
          component={EmployesRegister}
        />
      </Switch>

      <Link
        to={`${employesUrl + employesLoginUrl}`}
        className="btn btn-primary m-2"
      >
        Login
      </Link>
      <Link
        to={`${employesUrl + employesRegisterUrl}`}
        className="btn btn-primary m-2"
      >
        Registor
      </Link>
    </>
  );
};

export default Employes;
