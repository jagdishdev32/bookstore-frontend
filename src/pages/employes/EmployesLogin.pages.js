import { useState } from "react";
import { useHistory } from "react-router-dom";
import { employesUrl } from "../../config/frontendUrl.config";
import { employesHandleLoggedInSubmit } from "../../handlers/employes.handler";

const EmployesLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  if (props.auth.employesLogin) {
    history.push(employesUrl);
    return null;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   employesLogin(username, password)
  //     .then((data) => {
  //       handleLoggedIn(data.access_token, props.setAuth)
  //         .then(() => {
  //           alert("Login Successful");
  //           history.push(employesUrl);
  //         })
  //         .catch((error) => alert(error.message));
  //     })
  //     .catch((error) => alert(error.message));

  //   return;
  // };

  return (
    <>
      <br />
      <h1>Employes Login Page</h1>

      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your data with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) =>
            employesHandleLoggedInSubmit(
              e,
              username,
              password,
              history,
              props.setAuth
            )
          }
        >
          Submit
        </button>
      </form>
      <br />
    </>
  );
};

export default EmployesLogin;
