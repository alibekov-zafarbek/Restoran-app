import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="leftSide">
        <Link to='/'>
        <img src={logo} alt="logo" />
        </Link>
        <div className="hiddenLinks">
        <Link to='/'>
          Home
        </Link>
        <Link to='/menu'>
          Menu
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
        </div>

      </div>
      <div className="rightSide">
        <Link to='/'>
          Home
        </Link>
        <Link to='/menu'>
          Menu
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar