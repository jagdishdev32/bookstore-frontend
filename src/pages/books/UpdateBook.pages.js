import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../../components/Button.components";
import { employesLoginUrl, employesUrl } from "../../config/frontendUrl.config";
import { updateBookHandler } from "../../handlers/booksRequest.handlers";

const UpdateBook = (props) => {
  const history = useHistory();
  // Receiving Arguments from LinkButton
  const location = useLocation();

  // const { book } = location.state
  //   ? location.state
  //   : {
  //       book: {
  //         name: "none",
  //         author: "none",
  //         quanitity: "none",
  //         price: "none",
  //       },
  //     };

  const { book } = location.state;

  const defaultValues = {
    bookId: book.id,
    name: book.name ? book.name : "",
    author: book.author ? book.author : "",
    quantity: book.quantity ? book.quantity : 10,
    price: book.price ? book.price : 100,
  };

  const [name, setName] = useState(defaultValues.name);
  const [author, setAuthor] = useState(defaultValues.author);
  const [quantity, setQuantity] = useState(defaultValues.quantity);
  const [price, setPrice] = useState(defaultValues.price);
  const [checked, setChecked] = useState(false);

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
      updateBookHandler(
        defaultValues.bookId,
        name,
        author,
        quantity,
        price,
        props.auth.employesToken,
        history
      );
      // alert("checked");
    } else {
      alert("Please Click on Check button");
    }
  };

  if (!props.auth.employesLogin && !book) {
    history.push(employesUrl + employesLoginUrl);
    return null;
  }

  return (
    <>
      <h1>UpdateBook Page</h1>
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
            defaultValue={defaultValues.name}
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
            defaultValue={defaultValues.author}
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
            defaultValue={defaultValues.quantity}
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
            defaultValue={defaultValues.price}
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

export default UpdateBook;
