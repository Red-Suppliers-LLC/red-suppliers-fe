import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

import logo from "../img/logo.png";
import "../styling/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="wrap-navbar">
        {/* https://redsuppliers.com */}

        <div className="nav">
          <div className="wrap-both">
            <div className="logo">
              <img
                className="nav-img"
                src={logo}
                alt="Red Suppliers LLC Logo"
              />

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
    );
  }
}

export default NavBar;
