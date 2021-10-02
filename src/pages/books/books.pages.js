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
    : props.auth.employesToken
    ? props.auth.employesToken
    : "";

  // let token = props.auth.employesToken;
  // let token = props.auth.usersToken;
  // console.log(props.auth.usersToken);
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwidXNlcl9pZCI6MywiaWF0IjoxNjMzMjAyMTMyLCJleHAiOjE2MzMyMDkzMzJ9.vyx_lVNisCxImt8WDoZaI0EPHQ6VpsqaRo6_8XKdLRk";

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
                          // purchaseHandler(book.id, props.auth.usersToken)
                          purchaseHandler(
                            book.id,
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…0OTB9.M-ZcSJYX2JczvNbpEfjwPALWdbp10GOs8tnxA3YojfIeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwidXNlcl9pZCI6MywiaWF0IjoxNjMzMjAxMjkwLCJleHAiOjE2MzMyMDg0OTB9.M-ZcSJYX2JczvNbpEfjwPALWdbp10GOs8tnxA3YojfI"
                          )
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
