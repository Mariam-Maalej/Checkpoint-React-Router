import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";
const Navigate = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Movies home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><NavLink exact to="/" activeClassName="selected-link" className="nav">Home</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/movieapp" activeClassName="selected-link" className="nav">Movie list</NavLink></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Navigate;
