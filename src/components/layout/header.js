import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
const header = () => {
  return (
    <Navbar
      className="p-2"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to={{
                pathname: "/blog",
                hash: "1",
              }}
            >
              Blog
            </NavLink>
            <NavLink className="nav-link" to="/posts/add-post">
              Add Post
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
