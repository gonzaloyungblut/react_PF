import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
export const Navbar = () => (
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Indumentaria S.A.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Hombres</Nav.Link>
            <Nav.Link href="#features">Mujeres</Nav.Link>
            <Nav.Link href="#pricing">Niños</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
      </>
);
