import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button.components";
import { employesLoginUrl, employesUrl } from "../../config/frontendUrl.config";
import { createBookHandler } from "../../handlers/booksRequest.handlers";

const CreateBook = (props) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState(10);
  const [price, setPrice] = useState(100);
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const quantityChangeHandler = (e) => {
    setQuantity(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const checkChangeHandle = (e) => {
    // if (username !== "" && password !== "") {
    if (name !== "" && quantity !== "" && author !== "" && price !== "") {
      // alert("filled");
      setChecked(true);
    } else {
      alert("Fill necessory inputs");
      e.target.checked = false;
      setChecked(false);
    }
  };

  const submitButtonHandle = (e) => {
    e.preventDefault();
    if (checked) {
      createBookHandler(
        name,
        author,
        quantity,
        price,
        props.auth.employesToken,
        history
      );
      //   alert("checked");
    } else {
      alert("Please Click on Check button");
    }
  };

  if (!props.auth.employesLogin) {
    history.push(employesUrl + employesLoginUrl);
    return null;
  }

  return (
    <>
      <h1>CreateBook Page</h1>
      <p className="text-muted">
        <span className="text-danger">*</span> Marked Are Required.
      </p>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">
            Book Name
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={nameChangeHandler}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Author
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={authorChangeHandler}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Quantity
            <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            className="form-control"
            onChange={quantityChangeHandler}
            defaultValue={10}
            min={10}
            required
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">
            Price
            <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            className="form-control"
            onChange={priceChangeHandler}
            defaultValue={100}
            min={100}
            required
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

export default CreateBook;
