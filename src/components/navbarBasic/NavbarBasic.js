import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function NavbarBasic() {
  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/");
  };

  const goProductsHandler = () => {
    navigate("/products");
  };

  const goProductoHandler = () => {
    navigate("/prod/:id");
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ marginBottom: "-40px" }}
    >
      <Container>
        <Navbar.Brand
          href=""
          onClick={goHomeHandler}
          style={{ cursor: "pointer" }}
        >
          QR-Generator
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" onClick={goHomeHandler}>
              Home
            </Nav.Link>
            <Nav.Link href="" onClick={goProductsHandler}>
              Products
            </Nav.Link>
            <Nav.Link href="" onClick={goProductoHandler}>
              Producto
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBasic;
