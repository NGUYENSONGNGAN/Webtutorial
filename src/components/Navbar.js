import React from 'react'
import Logo from "../assets/pizzaLogo.png"
import {Link} from "react-router-dom"
import "../styles/Navbar.css"


function Navbar() {
  return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo}/>
                <div></div>
            </div>
            <div className='rightSide'>
            <Link to="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
  )
}

export default Navbar