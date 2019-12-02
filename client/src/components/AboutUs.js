import React from "react"; 
import Navbar from "./NavBar.js";
import Footer from "./Footer.js";  

import "../styling/About.css"; 
import "../styling/Footer.css"; 

import AboutImg from "../img/aboutus.png"; 
import OurVision from "../img/ourvision.png"; 

const AboutUs = () => {
 

    return(
        <>
        <Navbar />
        <div> 
            <div> 
            {/* <h3> About Us Page </h3> */}
            </div>
            <div className="spacing"> </div>
            <div className="wrap-one"> 
                <div> 
                    <img className="visionimg" src={OurVision} />
                    
                </div>
                
                <div className="body-one">
                    <div>
                    <h3 className="title"> Our Vision </h3>
                    <p> At Red Suppliers LLC we strive to bring a personal and flexible approach to our business and clients. Based on our knowledge, we understand how to leverage time, tasks, and tough decisions. We currently have strong relationships with multiple manufacturers that can deliver  at our immediate request. In order to provide your sector with the best customer experience we make sure to pay attention to the details and efficiently streamline the process in order to maximize our outcome. </p>
                    </div>
                </div>

            </div>
        </div>
        <div className="about-space"> </div> 
        <div> 
            <div> 
            {/* <h3> About Us Page </h3> */}
            </div>
            <div className="spacing"> </div>
            <div className="wrap-two"> 
                <div> 
                    <img className="aboutimg" src={AboutImg} />
                
                </div>
                
                <div className="body-one">
                    <div>
                    <h3 className="title"> About Us </h3>
                    <p> Red Suppliers specializes in filling the needs of government organizations by delivering 
                    Supplies within the medical industry. Red Suppliers mainly focuses on dental and portable aid
                    supplies to be delivered to local and national locations.Our focus is to provide a qualitative service with government organizations to ensure customer satisfaction.
                    </p>
                    </div>
                </div>

            </div>
        </div>

        <div className="copy">
        <Footer />
        </div> 
        </> 
    );
};

export default AboutUs; 