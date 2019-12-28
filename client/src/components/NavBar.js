import React from "react"
import logo from "../img/logo.png"
import "../styling/NavBar.css"

class NavBar extends React.Component {
  // Make backend database to allow toggle below
  // state = {
  //   newtoggle: {
  //     toggle: false
  //   }
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.state.toggle(this.state)
  //   this.setState({
  //     newtoggle: {
  //       toggle: false
  //     }
  //   })
  // }

  //  handleChange = event => {
  //  this.setState({
  //    newtoggle: {
  //       ...this.state.toggle,
  //       [event.target.name]: event.target.value
  //    }
  //  })
  // }
  // Make backend database to allow toggle above
  render() {
    return (
      <div className="wrap-navbar">
        {/* http://localhost:3000 */}

        {/* https://redsuppliers.com */}

        <div className="nav">
          {/* <div className="wrap-nav-link">  */}
          <div className="wrap-both">
            {/* <div className="wrap-img-link">  */}
            <div className="logo">
              <img
                className="nav-img"
                src={logo}
                alt="Red Suppliers LLC Logo"
              />
              <div className="link-bar">
                <label for="toggle">&#9776;</label>
              </div>

              <input type="checkbox" id="toggle" />
              <div className="wrap-link">
                <a href="https://redsuppliers.com/" className="link">
                  HOME
                </a>
                <a href="https://redsuppliers.com/about" className="link">
                  ABOUT
                </a>
                <a href="https://redsuppliers.com/services" className="link">
                  SERVICES
                </a>
                <a href="https://redsuppliers.com/contact" className="link">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
