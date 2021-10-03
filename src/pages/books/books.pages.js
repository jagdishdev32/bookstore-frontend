import { useState, useEffect } from "react";
import Card from "../../components/Card.components";
import Loading from "../../components/Loading.components";

import { getBooks } from "../../handlers/booksRequest.handlers";
import { purchaseHandler } from "../../handlers/transactions.handlers";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  // console.log(books);

  // TODO uncomment for final token
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

  return (
    <>
      <h1>Books page</h1>
      <div className="row justify-content-md-center">
        {books ? (
          <>
            {books.map((book) => {
              return (
                <Card headKey={book.id} header={"book id: " + book.id}>
                  <p>book name: {book.name}</p>
                  <p>book author: {book.author}</p>
                  <p>book quantity: {book.quantity}</p>
                  <p>book price: {book.price}</p>

                  {props.auth.usersLogin ? (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          purchaseHandler(book.id, props.auth.usersToken)
                        }
                      >
                        Purchase
                      </button>
                    </>
                  ) : (
                    <p className="text-danger">
                      Employes Cannot Purchase Book
                      <br />
                      Loggin as User to Purchase Book
                    </p>
                  )}
                </Card>
              );
            })}
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </>
  );
};

export default Books;
