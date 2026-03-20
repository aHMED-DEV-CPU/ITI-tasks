import React, { Component } from 'react'
import './Navbar.css'   

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h2 className="logo">dailyDev</h2>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    )
  }
}