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
    <div className="collapse navbar-collapse" id="navbarNav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/category/motores" className="nav-item">
          motores
        </Link>
        <Link to="/category/transmisiones" className="nav-item">
          transmisiones
        </Link>
        <Link to="/category/turbos" className="nav-item">
          turbos
        </Link>
        <CartWidget/>
    </div>
  </div>
</Nav>
        </div>
    )
}

export default NavBar