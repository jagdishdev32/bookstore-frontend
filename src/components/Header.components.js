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
} from "../config/frontendUrl.config";
import { employesHandleLogout } from "../handlers/employes.handler";
import { usersHandleLogout } from "../handlers/users.handler";

const Header = (props) => {
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href={homeUrl}>Bookstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={homeUrl}>Home</Nav.Link>
              <Nav.Link href={aboutUrl}>About</Nav.Link>
            </Nav>

            {/* Login Checks */}
            <Nav>
              {props.auth.employesLogin ? (
                <>
                  {/* Logged In */}
                  {/* <h1>true</h1> */}
                  {/* Employee Books Routes */}
                  <NavDropdown title="Employes Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href={booksUrl}>Books</NavDropdown.Item>
                    <NavDropdown.Item href={transactionsUrl}>
                      Transactions
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href={employesUrl}
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
                    <NavDropdown.Item href={employesUrl + employesLoginUrl}>
                      Employee Login
                    </NavDropdown.Item>
                    <NavDropdown.Item href={employesUrl + employesRegisterUrl}>
                      Employee Register
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={employesUrl + employesLoginUrl}>
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
                    <NavDropdown.Item href={booksUrl}>Books</NavDropdown.Item>
                    <NavDropdown.Item href={transactionsUrl}>
                      My Transactions
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action/3.4"
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
                    <NavDropdown.Item href={usersUrl + usersLoginUrl}>
                      User Login
                    </NavDropdown.Item>
                    <NavDropdown.Item href={usersUrl + usersRegisterUrl}>
                      User Register
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={usersUrl + usersLoginUrl}>
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
