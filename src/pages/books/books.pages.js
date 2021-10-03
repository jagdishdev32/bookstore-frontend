import { useState, useEffect } from "react";
import AllLinkButtons from "../../components/AllLinkButtons.components";
import Card from "../../components/Card.components";
import HeadWithSearch from "../../components/HeadWithSearch.components";
import Loading from "../../components/Loading.components";

import { getBooks, getBooksByName } from "../../handlers/booksRequest.handlers";
import { purchaseHandler } from "../../handlers/transactions.handlers";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(books);

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
      <HeadWithSearch title="Books page" onChange={handleSearchInput} />
      {/* <div className="books-head flex d-flex justify-content-between ">
        <h1>Books page</h1>
        <div className="search">
          <input
            type="search"
            className="form-control inline mr-sm-2"
            // className="d-inline-flex p-2 my-1"
            placeholder="Search"
            onChange={handleSearchInput}
          />
        </div>
      </div> */}
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
                    </>
                  )}
                </Card>
              );
            })}
          </div>
        </>
      ) : (
        <>
          {/* No Books */}
          No books are available to purchase
          {/* <Loading /> */}
        </>
      )}
    </>
  );
};

export default Books;
