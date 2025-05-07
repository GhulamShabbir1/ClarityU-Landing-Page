import React from 'react';
import logo from '../assets/Original.png'

function Navbar() {
  return (
    <>
    <nav>
        <div>
        <img src={logo} alt="Logo" />
        </div>
        <div>
        <ul>
            <li>Prespective</li>
            <li>Templetes</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>About us</li>
        </ul>
        </div>
        <div>
            <button>
                Login
            </button>
            <button>
                Try For Free
            </button>
        </div>
    </nav>
    </>

  )
}

export default Navbar
