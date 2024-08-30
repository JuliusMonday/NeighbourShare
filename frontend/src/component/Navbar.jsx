import logo from "../assets/NeighborShare.png"
import { Link } from "react-router-dom"
import { FaArrowRight,FaTimes, FaBars } from 'react-icons/fa';
import { useState } from "react";
import "./Navbar.css"
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
  return (
    <nav className="navbar">
      <div className="navbar-container ">
        <div className="navbar-logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleClick}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-links" onClick={handleClick}>Browse Items</Link>
          </li>
          <li className="nav-item">
            <Link to="/post" className="nav-links" onClick={handleClick}>Post an Item</Link>
          </li>
          <li className="nav-item" id="mobile-contact">
          <Link to="/contact" className="nav-links" onClick={handleClick}>Contact Us <FaArrowRight/></Link>
          </li>
          <li className="nav-item">
          <Link to="/sign-up" className="nav-links" onClick={handleClick}>Sign Up</Link>
          </li>
          <li className="nav-item login">
            <Link to="/login" className="nav-links" onClick={handleClick}>Login</Link>
          </li>
          <li className="nav-item profile">
            <Link to="/profile" className="nav-links" onClick={handleClick}>Profile</Link>
          </li>
        </ul>
        <div className="contact-btn">
          <button className="btn-contact">
            <Link to="/contact" className="nav-links contact-innerBtn" onClick={handleClick}>Contact Us <FaArrowRight className="contact-icon"/></Link>
          </button>
        </div>
         <div className="mobile-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;