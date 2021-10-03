import { useEffect, useState } from "react";
import AllLinkButtons from "../../components/AllLinkButtons.components";
import Card from "../../components/Card.components";
import Loading from "../../components/Loading.components";

import { getTransactions } from "../../handlers/transactions.handlers";

const Transactions = (props) => {
  const [transactions, setTransactions] = useState(false);

  // let token = props.auth.employesToken;
  let token = props.auth.employesLogin
    ? props.auth.employesToken
    : props.auth.usersLogin
    ? props.auth.usersToken
    : "";
  console.log(transactions);

  useEffect(() => {
    if (token === props.auth.usersToken) {
      // If Request is made with Users Token
      getTransactions(token, "users")
        .then((transactions) => {
          setTransactions(transactions);
        })
        .catch((error) => console.log(error));
    } else if (token === props.auth.employesToken) {
      // If Request is made with Employes Token
      getTransactions(token)
        .then((transactions) => {
          setTransactions(transactions);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  if (!props.auth.employesLogin && !props.auth.usersLogin) {
    return (
      <>
        <h1>Transactions Page</h1>
        <p>You are Not LoggedIn</p>
        {/* <p>Employer is Not LoggedIn</p> */}
        <AllLinkButtons />
      </>
    );
  }

  return (
    <>
      {props.auth.employesLogin ? (
        <>
          {/* If Employes LoggedIn */}
          <h1>Transactions Page</h1>
          <div className="row justify-content-md-center">
            {transactions ? (
              <>
                {transactions.map((transaction) => {
                  return (
                    <Card
                      headKey={transaction.id}
                      header={"transaction Id: " + transaction.id}
                    >
                      <p>book id: {transaction.book_id}</p>
                      <p>user_id: {transaction.user_id}</p>
                      <p>transaction_date: {transaction.transaction_date}</p>
                      <p>quantity: {transaction.quantity}</p>
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
      ) : (
        <>
          {/* If Page Request By User */}
          <h1>My Transactions</h1>
          {transactions ? (
            <>
              <div className="row justify-content-md-center">
                {transactions.map((transaction) => {
                  return (
                    <Card
                      headKey={transaction.transaction_id}
                      header={"transaction Id: " + transaction.transaction_id}
                    >
                      <p>book name: {transaction.name}</p>
                      <p>book author: {transaction.author}</p>
                      {/* <p>book id: {transaction.book_id}</p>
                      <p>book id: {transaction.book_id}</p>
                      <p>book id: {transaction.book_id}</p>
                      <p>user_id: {transaction.user_id}</p> */}
                      <p>quantity: {transaction.quantity}</p>
                      <p>book Final price : ${transaction.price}</p>
                      <p>transaction_date: {transaction.transaction_date}</p>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <Loading />
              <AllLinkButtons />
            </>
          )}
          {/* If Noone is loggedIn (Predefined in Function) */}
          {/* <Loading /> */}
          {/* <AllLinkButtons /> */}
        </>
      )}
    </>
  );
};

export default Transactions;
