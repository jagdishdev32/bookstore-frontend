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
} from "../config/frontendUrl.config";

const AllLinkButtons = () => {
  return (
    <>
      <LinkButton to={aboutUrl} title="AboutUrl" />
      <LinkButton to={booksUrl} title="booksUrl" />
      <LinkButton
        to={employesUrl + employesLoginUrl}
        title="employesLoginUrl"
      />
      <LinkButton to={employesUrl} title="employesUrl" />
      <LinkButton
        to={employesUrl + employesRegisterUrl}
        title="employesRegisterUrl"
      />
      <LinkButton to={homeUrl} title="homeUrl" />
      <LinkButton to={usersUrl} title="usersUrl" />
      <LinkButton to={usersUrl + usersLoginUrl} title="usersLoginUrl" />
      <LinkButton to={usersUrl + usersRegisterUrl} title="usersRegisterUrl" />
      <LinkButton to={transactionsUrl} title="transactionsUrl" />
      <LinkButton to={"alsdfjasdfasdf"} title="404 Page" />
    </>
  );
};

export default AllLinkButtons;
