import React from "react"
import "../styling/Home.css"
import HomeImg from "../img/homeimg.png"
import OurPartners from "./OurPartners.js"
import NavBar from "./NavBar"

const Home = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="body">
        <img className="home-img" src={HomeImg} alt="home" />
      </div>
      <div>
        <h1> Red Suppliers </h1>
      </div>
      <div className="center">
        <p className="div1">
          {" "}
          Red Suppliers specializes in fill the needs of government
          organizations by delivering needed products within the medical
          industry. Red Suppliers focuses on dental and portable aid supplies to
          be delivered to the needed locations{" "}
        </p>
      </div>
      <div className="center">
        <div className="button" type="submit">
          {" "}
          Contact Us{" "}
        </div>
      </div>
      <div className="spacing"> </div>
      <div>
        <h2
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {" "}
          Our Services{" "}
        </h2>
      </div>
      <div className="side-by-side">
        <div className="services1">
          <div>
            <img
              className="handshake-img"
              src="https://www.maxpixel.net/static/photo/1x/Hands-Welcome-Handshake-Shaking-Hands-Agreement-3091908.jpg"
              alt="handShake"
            />
            <div className="center">
              <h3> Hand Shake </h3>
            </div>
            <div className="center">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              </p>
            </div>
          </div>
        </div>
        <div className="spacing"> </div>
        <div className="services2">
          <img
            className="med-img"
            src="https://2001-2009.state.gov/cms_images/030405_med_supplies.jpg"
            alt="medication supplies"
          />
          <div className="center">
            <h3> Medical Supplier </h3>
          </div>
          <div className="center">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti{" "}
            </p>
          </div>
        </div>
      </div>
      {/* our partners component */}
      <div className="spacing"> </div>
      <div>
        <OurPartners />
      </div>
    </>
  )
}

export default Home
