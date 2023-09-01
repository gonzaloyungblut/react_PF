import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Indumentaria S.A.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="./category/Hombre">Hombres</Nav.Link>
            <Nav.Link href="/category/Mujere">Mujeres</Nav.Link>
            <Nav.Link href="/category/Niños">Niños</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
);
