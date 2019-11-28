import React from "react"
import logo from "../images/PharmacyLogo.jpg"

import "./Navbar.scss"

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <a href="#">
          <img src={logo} alt="Red Suppliers LLC Logo" />
        </a>
        <nav>
          <a href="http://localhost:3000/">HOME</a>
          <a href="http://localhost:3000/about">ABOUT</a>
          <a href="http://localhost:3000/services">SERVICES</a>
          <a href="http://localhost:3000/contactus">CONTACT US</a>
        </nav>
      </div>
    )
  }
}

export default NavBar
