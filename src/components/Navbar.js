// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/category" className="navbar__link">Category</Link>
        </li>
        <li className="navbar__item">
          <Link to="/login" className="navbar__link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
