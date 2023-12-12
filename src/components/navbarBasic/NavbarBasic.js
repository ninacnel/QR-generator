import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
      bg="light"
      //data-bs-theme="dark"
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBasic;
