import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Appbar = (props) => {
	return (
		<Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Mii TodoApp</Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to='/' exact>
            <NavItem href="#">Home</NavItem>
          </LinkContainer>
          <LinkContainer to='/todo'>
            <NavItem href="#">Todo App</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavDropdown title="User" id="basic-nav-dropdown">
            <MenuItem>Login</MenuItem>
            <MenuItem>Register</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
	);
}

export default Appbar;