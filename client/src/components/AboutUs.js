import React from "react"
import Navbar from "./NavBar.js"
import Footer from "./Footer.js"

import "../styling/About.css"
import "../styling/Footer.css"

import AboutImg from "../img/aboutus.png"
import OurVision from "../img/ourvision.png"

const AboutUs = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="aboutUs">
        <div className="wrap-one">
          <div className="mobile-center">
            <img className="visionimg" src={OurVision} />
          </div>

          <div className="body-one">
            <div className="body-three">
              <h3 className="title"> Our Vision </h3>
              <p>
              To become the leading U.S. supplier of Medical, Dental, and Hospital equipment to the growing Health sector.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUstwo">
        <div className="wrap-two">
          <img className="aboutimg" src={AboutImg} />
          <div className="body-two">
            <div className="body-three">
              <h3 className="titleTwo"> About Us </h3>
              <p className="body-two-paragraph">
              Red Suppliers LLC has past experience in both web design and marketing. Now the two founders are looking to leverage their skills and use innovative technology to streamline their services.

              At Red Suppliers LLC we strive to bring a personal and flexible approach to our business and clients. Based on our knowledge, we understand how to leverage time, tasks, and tough decisions. We currently have strong relationships with multiple manufacturers that can deliver  at our immediate request. In order to provide your sector with the best customer experience we make sure to pay attention to the details and efficiently streamline the process in order to maximize our outcome. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
