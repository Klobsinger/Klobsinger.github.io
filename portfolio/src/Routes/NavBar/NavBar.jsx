import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <Navbar expand="lg" bg='light' className="py-4 custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/About">About</Nav.Link>
          <Nav.Link as={NavLink} to="/Portfolio">Projects</Nav.Link>
          <Nav.Link as={NavLink} to="/Contact">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 