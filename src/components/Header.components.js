import React from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
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
import { basename, hashEnabled } from "../config/other.config";
import { employesHandleLogout } from "../handlers/employes.handler";
import { usersHandleLogout } from "../handlers/users.handler";

const Header = (props) => {
  let hashUrl = "";
  let homeUrlFinal = homeUrl,
    aboutUrlFinal = aboutUrl,
    employesUrlFinal = employesUrl,
    usersUrlFinal = usersUrl,
    transactionsUrlFinal = transactionsUrl,
    createBookUrlFinal = createBookUrl,
    booksUrlFinal = booksUrl;

  if (hashEnabled) {
    hashUrl = "#";
    homeUrlFinal = basename + hashUrl + homeUrl;
    aboutUrlFinal = basename + hashUrl + aboutUrl;
    employesUrlFinal = basename + hashUrl + employesUrl;
    usersUrlFinal = basename + hashUrl + usersUrl;
    transactionsUrlFinal = basename + hashUrl + transactionsUrl;
    booksUrlFinal = basename + hashUrl + booksUrl;
    createBookUrlFinal = basename + hashUrl + createBookUrl;
  }

  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href={homeUrlFinal}>Bookstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={homeUrlFinal}>Home</Nav.Link>
              {props.auth.employesLogin || props.auth.usersLogin ? (
                <>
                  {/* If Any LoggedIn */}
                  <Nav.Link href={booksUrlFinal}>Books</Nav.Link>
                  <Nav.Link href={transactionsUrlFinal}>Transactions</Nav.Link>
                </>
              ) : (
                <>{/* If Noone LoggedIn */}</>
              )}
              <Nav.Link href={aboutUrlFinal}>About</Nav.Link>
            </Nav>

            {/* Login Checks */}
            <Nav>
              {props.auth.employesLogin ? (
                <>
                  {/* Logged In */}
                  {/* <h1>true</h1> */}
                  {/* Employee Books Routes */}
                  <NavDropdown title="Employes Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href={booksUrlFinal}>
                      Books
                    </NavDropdown.Item>
                    <NavDropdown.Item href={createBookUrlFinal}>
                      Create Book
                    </NavDropdown.Item>
                    <NavDropdown.Item href={transactionsUrlFinal}>
                      Transactions
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href={employesUrlFinal}
                      onClick={() => employesHandleLogout(props.setAuth)}
                    >
                      Employee Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  {/* Logged Out */}
                  {/* <h1>false</h1> */}
                  {/* Employee Routes */}
                  <NavDropdown title="Employes Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      href={employesUrlFinal + employesLoginUrl}
                    >
                      Employee Login
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href={employesUrlFinal + employesRegisterUrl}
                    >
                      Employee Register
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href={employesUrlFinal + employesLoginUrl}
                    >
                      Books
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}

              {props.auth.usersLogin ? (
                <>
                  {/* Logged In */}
                  {/* <h1>true</h1> */}
                  {/* Users Books Routes */}
                  <NavDropdown title="Users Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href={booksUrlFinal}>
                      Books
                    </NavDropdown.Item>
                    <NavDropdown.Item href={transactionsUrlFinal}>
                      My Transactions
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      // href="#action/3.4"
                      onClick={() => usersHandleLogout(props.setAuth)}
                    >
                      Users Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  {/* Logged Out */}
                  {/* <h1>false</h1> */}
                  {/* Users Routes */}
                  <NavDropdown title="Users Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href={usersUrlFinal + usersLoginUrl}>
                      User Login
                    </NavDropdown.Item>
                    <NavDropdown.Item href={usersUrlFinal + usersRegisterUrl}>
                      User Register
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={usersUrlFinal + usersLoginUrl}>
                      Books
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
