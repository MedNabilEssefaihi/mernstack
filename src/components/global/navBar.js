import React from "react";
//APIs
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navBar-container">
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Sara Projet</Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Utilisateur" id="basic-nav-dropdown">
            <NavDropdown.Item href="/users">
              Liste des utilisateurs
            </NavDropdown.Item>
            <NavDropdown.Item href="users/add">
              Ajouter un utilisateur
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/clients">Clients</Nav.Link>
          <Nav.Link href="/rapports">Rapports</Nav.Link>
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
