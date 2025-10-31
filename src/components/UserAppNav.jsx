import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function UserAppNav({ isLoggedIn, handleLogout }) {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">User Profile App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Startseite</Nav.Link>
            <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
            {!isLoggedIn ?
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
              :
              <>
                <Nav.Link as={Link} to="/profile">Profil</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserAppNav;