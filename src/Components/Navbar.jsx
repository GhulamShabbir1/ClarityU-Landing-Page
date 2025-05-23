import { useState } from "react";
import logo from "../assets/Original.png";
import Dropdown from "../assets/dd.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      
        <nav className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>Prespective</li>
            <li>Templetes</li>
            <li>Pricing</li>

            <div className="dropdown">
              <li className="dropdown-button">
                Resources <img src={Dropdown} alt="" />
              </li>
              <div className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </div>

            <div className="dropdown">
              <li className="dropdown-button">
                About us <img src={Dropdown} alt="" />
              </li>
              <div className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </div>
            <div className="nav-btn">
            <button className="login">Login</button>
            <button className="tryforfree">Try For Free</button>
          </div>
          </ul>

          
        </nav>

    </>
  );
}

export default Navbar;
