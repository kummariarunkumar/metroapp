import React, { Component } from 'react'
import '../Styles/Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      Train.Info
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <a href="/login" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">Login</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div>
</nav>
    )
  }
}

export default Navbar