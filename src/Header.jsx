//crea el Header con un menu de navegacion de react-bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tutorial React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/*crea el menu de navegacion*/}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="http://148.216.54.18/~valero/ragum/muestra.html">
              RAGUM
            </Nav.Link>
            <Nav.Link href="fismat.umich.mx">Fismat</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
