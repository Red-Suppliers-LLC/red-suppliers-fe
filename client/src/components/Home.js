import React, { Component } from "react"
import "../styling/Home.css"
import "../styling/About.css"

import NavBar from "./NavBar"
import HomeImg from "../img/homepageimgtwo.png"
import Footer from "./Footer.js"
import Icons from "./Icons.js"

import Benefits from "../img/benefits.png"

const Home = () => {
  return (
    <div className="body">
      <div>
        <NavBar />
      </div>
      <div className="home-img-div">
        <img className="home-img" src={HomeImg} alt="home" />
      </div>

      <div className="more-more-space"> </div>

      <Icons />
      <div>
        <h1> Red Suppliers </h1>
      </div>
      <div className="center">
        <p className="div1">
          Red Suppliers specializes in fill the needs of government
          organizations by delivering needed products within the medical
          industry. Red Suppliers focuses on dental and portable aid supplies to
          be delivered to the needed locations
        </p>
      </div>

      <div className="button" type="submit">
        <a className="button-link" href="https://redsuppliers.com/contact">
          Contact Us
        </a>
      </div>

      <div className="services-title">
        <h2>The Services We Offer</h2>
      </div>
      <div className="center">
        <div className="side-by-side">
          <div className="services1">
            <div>
              <img className="handshake-img" src={Benefits} />
              <h3 className="title-font"> Benefits </h3>
              <p className="font-size2">
                Through providing medical supplies we noticed that some buyers
                look for a few key things such as quality, efficiency, and low
                cost. In order to maintain consistency and quality we associate
                ourselves with other professionals to satisfy each and everyone
                of those criterias. One of our aims is to build a long term
                relationship of customer satisfaction.{" "}
              </p>
            </div>
          </div>
          <div className="services2">
            <img
              className="med-img"
              src="https://2001-2009.state.gov/cms_images/030405_med_supplies.jpg"
            />
            <div className="wrapper">
              <h3 className="title-font2"> Medical Supplies </h3>
            </div>
            <div className="center-width">
              <p className="font-size">
                The list of products we supply can range from Basic First Aid to
                even OSHA, Pets, Coast Guard, Swimming First Aids and many more.
                We are constantly updating our inventory to satisfy our buyers.
                Contact us to see how we can provide what you may need.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
