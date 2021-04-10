import React from "react";
//APIs
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navBar-container">
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="/">Sara Projet</Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Utilisateur" id="basic-nav-dropdown">
            <NavDropdown.Item href="/users">
              Liste des utilisateurs
            </NavDropdown.Item>
            <NavDropdown.Item href="/users/add">
              Ajouter un utilisateur
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Clients" id="basic-nav-dropdown">
            <NavDropdown.Item href="/clients">
              Liste des clients
            </NavDropdown.Item>
            <NavDropdown.Item href="/clients/add">
              Ajouter un client
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Rapports" id="basic-nav-dropdown">
            <NavDropdown.Item href="/rapports">
              Liste des rapports
            </NavDropdown.Item>
            <NavDropdown.Item href="/rapports/add">
              Ajouter un rapport
            </NavDropdown.Item>
          </NavDropdown>
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
