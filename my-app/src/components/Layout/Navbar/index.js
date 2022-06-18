import "./Navbar.css"
// import Menu from './MenuItems';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Daleship</span>
        <div className="navItems">
          <button className="navButton">Registre-se</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar