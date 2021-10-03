import { employesRegistrationEnabled } from "../../config/other.config";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button.components";
import { employesHandleRegisterSubmit } from "../../handlers/employes.handler";

const EmployesRegister = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  const usernameChangeHandle = (e) => {
    if (username === "") {
      setChecked(false);
    }
    setUsername(e.target.value);
  };

  const passwordChangeHandle = (e) => {
    if (password === "") {
      setChecked(false);
    }
    setPassword(e.target.value);
  };

  const checkChangeHandle = (e) => {
    if (username !== "" && password !== "") {
      // alert("filled");
      setChecked((prev) => !prev);
    } else {
      alert("Username & Password is required.");
      e.target.checked = false;
      setChecked(false);
    }
  };

  const submitButtonHandle = (e) => {
    e.preventDefault();
    if (checked) {
      employesHandleRegisterSubmit(
        e,
        username,
        password,
        history,
        props.setAuth
      );
    } else {
      alert("Please Click on Check button. & Check all fields are filled.");
    }
  };

  return (
    <>
      {employesRegistrationEnabled ? (
        <>
          {/* Registration Enabled */}
          <h1>Employes Register Page</h1>
          <div className="form">
            <p className="text-muted">
              <span className="text-danger">*</span> Marked Are Required.
            </p>
            <form className="row g-3">
              <div className="mb-3">
                <label className="form-label">
                  Username<span className="text-danger">*</span>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={usernameChangeHandle}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your data with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password<span className="text-danger">*</span>{" "}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={passwordChangeHandle}
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onSelect={() => setChecked(true)}
                    onChange={checkChangeHandle}
                  />
                  <label className="form-check-label">Check me out</label>
                </div>
              </div>
              <div className="col-12">
                <Button onClick={submitButtonHandle} title="Submit" />
              </div>
            </form>
            <br />
          </div>
        </>
      ) : (
        <>
          {/* Registration Not Enabled */}
          <h1>
            Employes Registrations are Not Available <br />
            Please Contact Admin
          </h1>
        </>
      )}
    </>
  );
};

export default EmployesRegister;
