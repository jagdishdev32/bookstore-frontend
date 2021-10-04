import React from "react";
import AllLinkButtons from "../components/AllLinkButtons.components";
import Card from "../components/Card.components";
import LinkButton from "../components/LinkButton.components";
import {
  booksUrl,
  employesLoginUrl,
  employesRegisterUrl,
  employesUrl,
  usersLoginUrl,
  usersRegisterUrl,
  usersUrl,
} from "../config/frontendUrl.config";
import { employesRegistrationEnabled } from "../config/other.config";

const Home = (props) => {
  return (
    <>
      {/* <h1>Home Page</h1>
      <AllLinkButtons /> */}
      <div className="home-header text-center">
        <h1 className="text-primary">Welcome to Bookstore</h1>
        <p className="text-muted">by Jagdish</p>
      </div>

      <div className="home-body text-center">
        <div className="home-body books ">
          <Card
            // header="Get Books"
            headKey="home-body-books"
            className="text-center"
          >
            {props.auth.employesLogin || props.auth.usersLogin ? (
              <>
                {/* If any LoggedIn */}
                <p className="text-danger">Keep Purchasing Have a good day</p>
                <LinkButton to={booksUrl} title="Books" />
              </>
            ) : (
              <>
                {/* If Noone LoggedIn */}
                <p className="text-danger">To Get Books Need to LoggedIn</p>
                <LinkButton to={usersUrl + usersLoginUrl} title="Users Login" />
                <LinkButton
                  to={employesUrl + employesLoginUrl}
                  title="Employes Login"
                />
                <p className="text-danger">New To Our App</p>
                <LinkButton
                  to={usersUrl + usersRegisterUrl}
                  title="User Registraion"
                />
                {employesRegistrationEnabled ? (
                  <>
                    {/* If Employes Registration Enabled */}
                    <LinkButton
                      to={employesUrl + employesRegisterUrl}
                      title="Employes Registraion"
                    />
                  </>
                ) : (
                  <>{/* If Employes Registration Disabled */}</>
                )}
              </>
            )}
          </Card>
        </div>
      </div>

      <AllLinkButtons />
    </>
  );
};

export default Home;
