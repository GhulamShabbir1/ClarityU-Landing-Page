import React from 'react';
import logo from '../assets/Original.png'

function Navbar() {
  return (
    <>
    <nav>
        <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        </div>

        <ul>
            <li>Prespective</li>
            <li>Templetes</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>About us</li>
        </ul>

        <div className='nav-btn'>
            <button className='login'>
                Login
            </button>
            <button className='tryforfree'>
                Try For Free
            </button>
        </div>
    </nav>
    </>

  )
}

export default Navbar
