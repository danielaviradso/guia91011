import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet} from 'react-router-dom'

export default function Principal() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Prueba Rutas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/contar">contador</Nav.Link>
                    <Nav.Link href="/listado">listado</Nav.Link>
                    {/* <Nav.Link href='/DiceGame'>Dicegame</Nav.Link>
                    <Nav.Link href='/avatar'>avatar</Nav.Link>
                    <Nav.Link href='/Botongracioso'>Boton</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <div>
        <Outlet/>
    </div>
    </>
  );
}

