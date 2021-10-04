import React from "react";
import AllLinkButtons from "../components/AllLinkButtons.components";
import Card from "../components/Card.components";

const About = (props) => {
  return (
    <>
      {/* <h1>About</h1> */}
      <Card>
        <h1>About Project</h1>
        <p>
          This Bookstore project was a challenge to create full stack project
        </p>
        <div className="challenge">
          <h3 id="challenge-completed-">Challenge</h3>
          <p>
            Develop an Online Bookstore website with backend using Express
            Js/NodeJs
          </p>
          <ol>
            <li>System will have 2 types of users - Sellers &amp; Customers</li>
            <li>
              Sellers should be able to
              <ul>
                <li>Add / Update / Delete Books</li>
                <li>See list of sold books if any customer buys any book</li>
              </ul>
            </li>
            <li>
              Customer should be able to
              <ul>
                <li>Sign up with personal details and address</li>
                <li>Access List of Books</li>
                <li>Search books by name</li>
                <li>Purchase a book</li>
                <li>See list of purchased books</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="links-">
          <p>
            Backend source{" "}
            <a href="https://github.com/jagdishdev32/Bookstore-backend">here</a>{" "}
            &amp; Frontend source{" "}
            <a href="https://github.com/jagdishdev32/Bookstore-frontend">
              here
            </a>
          </p>
        </div>
      </Card>
      <Card>
        <h1>About Jagdish</h1>
        <p>
          Jagdish is Self-Taught Programmer who is mainly focused towards
          topic’s related to Cyber Security and Web Development.
        </p>
      </Card>
      <AllLinkButtons />
    </>
  );
};

export default About;
