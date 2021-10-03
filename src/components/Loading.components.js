import { usersLoginUrl, usersUrl } from "../config/backendUrl.config";

const Loading = (props) => {
  return (
    <>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="text-muted text-center">
        if loading takes more than <span className="text-danger">2min</span>{" "}
        then please logout and &nbsp;
        <a className="text-primary" href={usersUrl + usersLoginUrl}>
          login{" "}
        </a>{" "}
        again.
      </p>
    </>
  );
};

export default Loading;
