import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button.components";
import { usersHandleRegisterSubmit } from "../../handlers/users.handler";

const UsersRegister = (props) => {
  // const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [phoneNo, setPhoneNo] = useState(undefined);
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  // const nameChangeHandle = (e) => {
  //   setName(e.target.value);
  // };

  const usernameChangeHandle = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandle = (e) => {
    setPassword(e.target.value);
  };

  const ageChangeHandle = (e) => {
    setAge(e.target.value);
  };

  const phoneNoChangeHandle = (e) => {
    setPhoneNo(e.target.value);
  };

  const addressChangeHandle = (e) => {
    setAddress(e.target.value);
  };

  const checkChangeHandle = (e) => {
    if (username !== "" && password !== "") {
      // alert("filled");
      setChecked(true);
    } else {
      alert("Username & Password is required.");
      e.target.checked = false;
      setChecked(false);
    }
  };

  const submitButtonHandle = (e) => {
    e.preventDefault();
    if (checked) {
      usersHandleRegisterSubmit(
        e,
        username,
        password,
        age,
        address,
        phoneNo,
        history,
        props.setAuth
      );
      // alert("checked");
    } else {
      alert("Please Click on Check button");
    }
  };

  return (
    <>
      {/* -- name, username, password, age, address, phone+no */}
      <h1>Users Register Page</h1>
      <p className="text-muted">
        <span className="text-danger">*</span> Marked Are Required.
      </p>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">
            Username/Email
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={usernameChangeHandle}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Password
            <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            className="form-control"
            onChange={passwordChangeHandle}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            onChange={addressChangeHandle}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control"
            onChange={phoneNoChangeHandle}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            onChange={ageChangeHandle}
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
    </>
  );
};

export default UsersRegister;
