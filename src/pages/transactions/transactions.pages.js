import { useEffect, useState } from "react";
import AllLinkButtons from "../../components/AllLinkButtons.components";
import Card from "../../components/Card.components";
import Loading from "../../components/Loading.components";

import { getTransactions } from "../../handlers/transactions.handlers";

const Transactions = (props) => {
  const [transactions, setTransactions] = useState([]);

  let token = props.auth.employesToken;

  useEffect(() => {
    getTransactions(token)
      .then((transactions) => {
        setTransactions(transactions);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!props.auth.employesLogin) {
    return (
      <>
        <h1>Transactions Page</h1>
        <p>Employer is Not LoggedIn</p>
        <AllLinkButtons />
      </>
    );
  }

  return (
    <>
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
  );
};

export default Transactions;
