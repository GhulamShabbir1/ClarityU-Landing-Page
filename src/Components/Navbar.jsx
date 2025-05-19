import logo from "../assets/Original.png";
import Dropdown from "../assets/dd.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul>
          <li>Prespective</li>
          <li>Templetes</li>
          <li>Pricing</li>
          <div className="dropdown">
            <li className="dropdown-button">Resources <img src={Dropdown} alt="" /></li>
            <div className="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>
          <div className="dropdown">
            <li className="dropdown-button">About us <img src={Dropdown} alt="" /></li>
            <div className="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </ul>

        <div className="nav-btn">
          <button className="login">Login</button>
          <button className="tryforfree">Try For Free</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
