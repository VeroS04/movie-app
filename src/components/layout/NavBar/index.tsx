import { Navbar as NavbarBTS, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";

const NavBar = () => {
  return (
    <NavbarBTS className="container-nav">
      <Container fluid>
        <NavbarBTS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBTS.Collapse id="basic-navbar-nav">
          <Nav className="btn-movies">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/new-releases">
              Estrenos
            </NavLink>
            <NavLink className="nav-link" to="/popular">
              Popular
            </NavLink>
            <NavLink className="nav-link" to="/search">
              Buscador
            </NavLink>
          </Nav>
          <Nav className="btn-forms">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              Registro
            </NavLink>
          </Nav>
        </NavbarBTS.Collapse>
      </Container>
    </NavbarBTS>
  );
};

export { NavBar };
