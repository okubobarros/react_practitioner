import "./Navbar.css"
// import Menu from './MenuItems';
import { NavLink } from "react-router-dom";


const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Daleship</span>
        <NavLink to="/" style={{ color: '#fff' }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ color: '#fff' }}>
          About Us
        </NavLink>
        <NavLink to="/contact" style={{ color: '#fff' }}>
          Contact Us
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