import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/" className="nav-item text-dark">
          Home
        </NavLink>
        <NavLink to="/category/motores" className="nav-item text-dark">
          motores
        </NavLink>
        <NavLink to="/category/transmisiones" className="nav-item text-dark">
          transmisiones
        </NavLink>
        <NavLink to="/category/turbos" className="nav-item text-dark">
          turbos
        </NavLink>
        <CartWidget/>
    </div>
  </div>
</Nav>
      </div>
    )
}

export default NavBar