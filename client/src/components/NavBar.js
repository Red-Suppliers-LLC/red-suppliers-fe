import React from "react"
import logo from "../img/PharmacyLogo.PNG"
import "../styling/NavBar.css"; 

class NavBar extends React.Component {
  render() {
    return (
      <div className="wrap-navbar">
        <div>
          {/* <a
            href="http://localhost:3000/"
          > */}
          <div>  
            <img
              src={logo}
              alt="Red Suppliers LLC Logo"
              style={{
                height: "75px",
                width: "auto",
                borderRadius: "50px",
                marginLeft: "155px"
              }}
            />
            </div>
            
          {/* </a> */}
        </div>

        <div className="name"> 
        <div> 
            <h3> Red Suppliers LLC </h3> 
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
            href="http://localhost:3000/services"
            className="link"
          >
            SERVICES
          </a>
          <a
            href="http://localhost:3000/contact"
            className="link"
          >
            CONTACT US
          </a>
        </div>
      </div>
    )
  }
}

export default NavBar
