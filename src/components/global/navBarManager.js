import React from "react";
//APIs
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navBar-container">
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="/">Sara Projet</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/users">Liste des l'utilisateurs</Nav.Link>
          <Nav.Link href="/clients">Liste des clients</Nav.Link>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/login">Sara Ayari</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
