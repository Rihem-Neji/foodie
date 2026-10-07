import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar({ darkMode, setDarkMode }) {
  return (
    <Navbar
      expand="lg"
      className="main-navbar"
      variant={darkMode ? "dark" : "light"}
    >
      <Container>

        <Navbar.Brand href="#home" className="brand">
          🍔 Foodie
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="food-navbar" />

        <Navbar.Collapse id="food-navbar">

          <Nav className="ms-auto align-items-center">

            <Nav.Link href="#home">
              Home
            </Nav.Link>

            <Nav.Link href="#menu">
              Menu
            </Nav.Link>

            <button
              className="theme-button"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavigationBar;