import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div>
<Nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Navbar.Brand to="/">
        Mundo Bmw
    </Navbar.Brand>
    <div className="collapse navbar-collapse"  id="navbarNav">
        <Nav.Link to="/" className="nav-item text-dark">
          Home
        </Nav.Link>
        <Nav.Link to="/category/motores" className="nav-item text-dark">
          motores
        </Nav.Link>
        <Nav.Link to="/category/transmisiones" className="nav-item text-dark">
          transmisiones
        </Nav.Link>
        <Nav.Link to="/category/turbos" className="nav-item text-dark">
          turbos
        </Nav.Link>
        <CartWidget/>
    </div>
  </div>
</Nav>
      </div>
    )
}

export default NavBar