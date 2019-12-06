import React from "react"
import "../styling/Footer.css"; 


class Footer extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ justifyContent: "center" }}>
        <div className="copy"> 
          <h3 style={{ fontSize: "12px" }}>
            © Copyright 2019 Red Suppliers, LLC 
          </h3>
          </div> 
        </div>
      </div>
    )
  }
}
export default Footer