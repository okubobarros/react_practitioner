import "./Navbar.css"
import { NavLink } from "react-router-dom";


const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Daleship</span>
        <NavLink to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          Home
        </NavLink>
        <NavLink to="/service" style={{ color: '#fff', textDecoration: 'none' }}>
          Serviços
        </NavLink>
        <NavLink to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
          Shipping com a Dale
        </NavLink>
        <NavLink to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
          Company
        </NavLink>

        <div className="navItems">
          <button className="navButton">Registre-se</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div >
  )
}

export default Navbar