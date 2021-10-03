import { useEffect, useState } from "react";
import AllLinkButtons from "../../components/AllLinkButtons.components";
import Card from "../../components/Card.components";
import HeadWithSearch from "../../components/HeadWithSearch.components";
import Loading from "../../components/Loading.components";

import {
  getTransactions,
  getTransactionsBySearch,
} from "../../handlers/transactions.handlers";

const Transactions = (props) => {
  const [transactions, setTransactions] = useState(false);
  const [initialTransactions, setInitialTransactions] = useState([]);

  // let token = props.auth.employesToken;
  let token = props.auth.employesLogin
    ? props.auth.employesToken
    : props.auth.usersLogin
    ? props.auth.usersToken
    : "";
  // console.log(transactions);

  useEffect(() => {
    if (token === props.auth.usersToken) {
      // If Request is made with Users Token
      getTransactions(token, "users")
        .then((transactions) => {
          setTransactions(transactions);
          setInitialTransactions(transactions);
        })
        .catch((error) => console.log(error));
    } else if (token === props.auth.employesToken) {
      // If Request is made with Employes Token
      getTransactions(token)
        .then((transactions) => {
          setTransactions(transactions);
          setInitialTransactions(transactions);
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

  const handleSearchInput = (e) => {
    if (e.target.value === "") {
      setTransactions(initialTransactions);
      // getTransactions(token)
      //   .then((transactions) => {
      //     setTransactions(transactions);
      //     setInitialTransactions(transactions)
      //   })
      //   .catch((error) => console.log(error));
    } else {
      // setSearch(e.target.value);

      // //TODO fix transaction issue
      // getTransactionsBySearch(token, e.target.value)
      //   .then((response) => {
      //     alert(response);
      //     console.log(response);
      //   })
      //   .catch((error) => console.log(error));
      // console.log(e.target.value);

      setTransactions((prevTransactions) => {
        return initialTransactions.filter(
          (transaction) => transaction.user_id == e.target.value
        );
      });
      // transactions
      //   .filter((transaction) => {
      //     return transaction.user_id == e.target.value;
      //   })
      //   .map((trans) => {
      //     console.log(trans);
      //   });
    }
  };

  return (
    <>
      {props.auth.employesLogin ? (
        <>
          {/* If Employes LoggedIn */}
          {/* <h1>Transactions Page</h1> */}
          <HeadWithSearch
            title="Transactions Page"
            onChange={handleSearchInput}
            placeholder="Search by User Id"
          />
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
              {transactions.length < 1 ? (
                <>
                  {/* If No Transactions */}
                  <p>You have No Transactions</p>
                </>
              ) : (
                <>
                  {/* If Transactions */}
                  <div className="row justify-content-md-center">
                    {transactions.map((transaction) => {
                      return (
                        <Card
                          headKey={transaction.transaction_id}
                          header={
                            "transaction Id: " + transaction.transaction_id
                          }
                        >
                          <p>book name: {transaction.name}</p>
                          <p>book author: {transaction.author}</p>
                          {/* <p>book id: {transaction.book_id}</p>
                      <p>book id: {transaction.book_id}</p>
                      <p>book id: {transaction.book_id}</p>
                      <p>user_id: {transaction.user_id}</p> */}
                          <p>quantity: {transaction.quantity}</p>
                          <p>book Final price : ${transaction.price}</p>
                          <p>
                            transaction_date: {transaction.transaction_date}
                          </p>
                        </Card>
                      );
                    })}
                  </div>
                </>
              )}
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
