import React from 'react'
import { Link } from 'react-router-dom'
import { House, ShoppingCart } from 'phosphor-react'
import "../components/Navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbartitle">
            <h1>An Awesome Store</h1>
        </div>
        <div className="links">
            <Link to="/">
                <House 
                    size={32}
                />
             </Link>
            <Link to="/cart">
                <ShoppingCart 
                    size={32}
                />
            </Link>
        </div>
    </div>
  )
}
