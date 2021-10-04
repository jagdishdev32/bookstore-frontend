import LinkButton from "./LinkButton.components";

import {
  aboutUrl,
  booksUrl,
  employesLoginUrl,
  employesUrl,
  employesRegisterUrl,
  homeUrl,
  usersUrl,
  usersLoginUrl,
  usersRegisterUrl,
  transactionsUrl,
  createBookUrl,
} from "../config/frontendUrl.config";
import Card from "./Card.components";
import { employesRegistrationEnabled } from "../config/other.config";

const AllLinkButtons = () => {
  return (
    <>
      <Card className="text-center">
        <p className="text-primary">All Other Links</p>
        <LinkButton to={homeUrl} title="Home Page" />
        <LinkButton to={aboutUrl} title="About Page" />
        <LinkButton to={booksUrl} title="Books Page" />
        <LinkButton to={createBookUrl} title="Create New Books Page" />
        <LinkButton to={employesUrl} title="Employes Page" />
        <LinkButton
          to={employesUrl + employesLoginUrl}
          title="Employes Login Page"
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
        <LinkButton to={usersUrl} title="Users Page" />
        <LinkButton to={usersUrl + usersLoginUrl} title="Users Login Page" />
        <LinkButton
          to={usersUrl + usersRegisterUrl}
          title="Users Register Page"
        />
        <LinkButton to={transactionsUrl} title="Transactions Page" />
        <LinkButton to={"alsdfjasdfasdf"} title="404 Page Not Found" />
      </Card>
    </>
  );
};

export default AllLinkButtons;
