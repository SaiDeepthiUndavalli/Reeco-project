import React from 'react';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#" className='top'>Reeco</a>
        <a href="#">Store</a>
        <a href="#">Orders</a>
        <a href="#">Analytics</a>
      </div>
      <div className="nav-right d-flex justify-content-end">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        
      </div>
      <div className="name">
        <p>Hello, James <FontAwesomeIcon icon={faArrowDown}/></p>
        </div>
    </nav>
  );
};

export default Navbar;
