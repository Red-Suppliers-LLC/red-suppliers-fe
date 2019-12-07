import React from "react"
import logo from "../img/PharmacyLogo.PNG"
import "../styling/NavBar.css"; 

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
        <div>
          {/* <a
            href="http://localhost:3000/"
          > */}
          {/* <div className="flex-img"> 
            <img
              src={logo}
              alt="Red Suppliers LLC Logo"
              className="nav-img"
            />
            </div> */}
            
          {/* </a> */}
        </div>

        <div className="name"> 
        <div> 
            <h3> Red Suppliers LLC </h3> 
            </div> 
        </div> 
        
            {/* <form onSubmit="handleSubmit"> 
            <label> &#9776; </label>
            <input type="checkbox" onChange="handleChange"/>  
           </form> */}

        {/* http://localhost:3000 */}

        {/* https://redsuppliers.com */}

        <div className="nav"> 
        <div className="wrap-both"> 
        <div className="logo"> 
        <img
             src={logo}
              alt="Red Suppliers LLC Logo"
              className="nav-img"
            />
          </div>
          <div className="link-bar">  
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"/> 
        </div>  
        </div> 
        <div className="wrap-link">
          <a
            href="http://localhost:3000/"
            className="link"
          >
            HOME
          </a>
          <a
            href="http://localhost:3000/about"
            className="link"
          >
            ABOUT
          </a>
          <a
            href="https://redsuppliers.com/services"
            className="link"
          >
            SERVICES
          </a>
          <a
            href="https://redsuppliers.com/contact"
            className="link"
          >
            CONTACT US
          </a>
        </div>
        </div>
      </div>
    )
  }
}

export default NavBar
