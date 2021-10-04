import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AllLinkButtons from "../../components/AllLinkButtons.components";
import Card from "../../components/Card.components";
import HeadWithSearch from "../../components/HeadWithSearch.components";
import Button from "../../components/Button.components";
import Loading from "../../components/Loading.components";

import MyVerticallyCenteredModal from "../../components/MyVerticallyCenteredModal.components";

import {
  getBooks,
  getBooksByName,
  updateBookHandler,
  createBookHandler,
  deleteBookHandler,
} from "../../handlers/booksRequest.handlers";
import { purchaseHandler } from "../../handlers/transactions.handlers";
import MyModal from "../../components/MyModal.components";
import UpdateBookComponent from "../../components/UpdateBookComponent.components";
import LinkButton from "../../components/LinkButton.components";
import {
  booksUpdateUrl,
  booksUrl,
  createBookUrl,
  updateBookUrl,
} from "../../config/frontendUrl.config";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const history = useHistory();

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let token = props.auth.usersLogin
    ? props.auth.usersToken
    : props.auth.employesLogin
    ? props.auth.employesToken
    : "";

  useEffect(() => {
    getBooks(token)
      .then((books) => {
        setBooks(books);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!props.auth.employesLogin && !props.auth.usersLogin) {
    return (
      <>
        <h1>Books Page</h1>
        <p>You are Not LoggedIn</p>
        {/* <p>Employer is Not LoggedIn</p> */}
        <AllLinkButtons />
      </>
    );
  }

  const handleSearchInput = (e) => {
    if (e.target.value === "") {
      getBooks(token)
        .then((books) => {
          setBooks(books);
        })
        .catch((error) => console.log(error));
    } else {
      getBooksByName(e.target.value, token)
        .then((books) => {
          console.log(books);
          setBooks(books);
        })
        .catch((error) => console.log(error));
    }

    setSearch(e.target.value);
    // alert(search);
    // console.log(search);
  };

  return (
    <>
      <HeadWithSearch
        title="Books page"
        onChange={handleSearchInput}
        placeholder="Search By Name"
      >
        {props.auth.employesLogin ? (
          <>
            {/* Header If Employes Logged In  */}
            <LinkButton
              title="Create Book"
              className="bg-primary"
              to={createBookUrl}
            />
          </>
        ) : (
          <>{/* Header If Employes Not Logged In  */}</>
        )}
      </HeadWithSearch>

      {/* Get Books */}
      {books ? (
        <>
          <div className="row justify-content-md-center">
            {books.map((book) => {
              return (
                <Card headKey={book.id} header={"book id: " + book.id}>
                  <p>book name: {book.name}</p>
                  <p>book author: {book.author}</p>
                  <p>book price: ${book.price}</p>
                  <p>book solds: {book.sales}</p>
                  <p>book left: {book.quantity - +book.sales}</p>
                  <p>book total quantity: {book.quantity}</p>

                  {props.auth.usersLogin ? (
                    <>
                      {/* If User Logged In */}
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          purchaseHandler(book.id, props.auth.usersToken)
                            .then((response) => {
                              getBooks(token)
                                .then((books) => {
                                  setBooks(books);
                                })
                                .catch((error) => console.log(error));
                            })
                            .catch((error) => console.log(error))
                        }
                      >
                        Purchase
                      </button>
                    </>
                  ) : (
                    <>
                      {/* If Employes Logged In */}
                      <p className="text-danger">
                        Employes Cannot Purchase Book
                        <br />
                        Loggin as User to Purchase Book
                      </p>
                      <LinkButton
                        title="Update"
                        to={{ pathname: updateBookUrl, state: { book: book } }}
                        // state={{ book: book }}
                        // state={{ book: book }}
                      />
                      <Button
                        title="Delete Book"
                        type="button"
                        onClick={() => {
                          deleteBookHandler(book.id, token, history).then(
                            () => {
                              getBooks(token)
                                .then((books) => {
                                  setBooks(books);
                                })
                                .catch((error) => console.log(error));
                            }
                          );
                        }}
                      />
                    </>
                  )}
                </Card>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <p> No books are available to purchase</p>
        </>
      )}
      {books.length < 1 ? (
        <>
          {/* No Books */}
          <Loading />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Books;
