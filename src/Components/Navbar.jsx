import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar sticky">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">My Metro Rail.</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Ticket Booking</Link>
          </li>
          <li>
            <Link to="/services">PNR Enquiry</Link>
          </li>
          <li>
            <Link to="/services">Seat Availability</Link>
          </li>
          <li>
            <Link to="/enquiry">Fare Enquiry</Link>
          </li>
          <li>
            <Link to="/footer">Contact</Link>
          </li>
        </ul>
        <div className="lg-buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/signup" className="btn signup-btn">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
