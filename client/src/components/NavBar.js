import React from "react"
import logo from "../img/PharmacyLogo.PNG"

class NavBar extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="http://localhost:3000/"
            style={{
              justifyContent: "flex-end",
              textDecoration: "none",
              alignContent: "center",
              margin: "5px",
              fontWeight: "900"
            }}
          >
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
            Red Suppliers LLC
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href="http://localhost:3000/"
            style={{
              // justifyContent: "flex-end",
              textDecoration: "none",
              alignContent: "center",
              margin: "10px",
              fontWeight: "600"
            }}
          >
            HOME
          </a>
          <a
            href="http://localhost:3000/about"
            style={{
              // justifyContent: "flex-end",
              textDecoration: "none",
              alignContent: "center",
              margin: "10px",
              fontWeight: "600"
            }}
          >
            ABOUT
          </a>
          <a
            href="http://localhost:3000/services"
            style={{
              //justifyContent: "flex-end",
              textDecoration: "none",
              alignContent: "center",
              margin: "10px",
              fontWeight: "600"
            }}
          >
            SERVICES
          </a>
          <a
            href="http://localhost:3000/contact"
            style={{
              // justifyContent: "flex-end",
              textDecoration: "none",
              alignContent: "center",
              margin: "10px",
              marginRight: "155px",
              fontWeight: "600"
            }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    )
  }
}

export default NavBar
