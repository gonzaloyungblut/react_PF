import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
import { Link } from 'react-router-dom';

export const NavBar = () => (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Indumentaria S.A.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/category/Hombre">Hombres</Nav.Link>
            <Nav.Link as={Link} to="/category/Mujer">Mujeres</Nav.Link>
            <Nav.Link as={Link} to="//category/Niños">Niños</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
);
