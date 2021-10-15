import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({click}) => {
    return (
        <nav className='navbar'>
            {/* logo */}
            <div className='navbar__logo'>
                <h2>Carrito de Compra MERN</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/"className="text">Tienda</Link>
                </li>
            </ul>
            {/* Menu Hamburguesa */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;