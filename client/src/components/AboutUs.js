import React from "react"; 
import Navbar from "./NavBar.js";
import Footer from "./Footer.js";  

import "../styling/About.css"; 

const AboutUs = () => {
 
    
    return(
        <>
        <Navbar />
        <div> 
            <div> 
            <h3> About Us Page </h3>
            </div>
            <div className="spacing"> </div>
            <div> 
                <div> 
                    <img /> 
                </div>
                <div className="body-one">
                    <div>
                    <h3 className="title"> Our Vision </h3>
                    <p> At Red Suppliers LLC we strive to bring a personal and flexible approach to our business and clients. Based on our knowledge, we understand how to leverage time, tasks, and tough decisions. We currently have strong relationships with multiple manufacturers that can deliver  at our immediate request. In order to provide your sector with the best customer experience we make sure to pay attention to the details and efficiently streamline the process in order to maximize our outcome. </p>
                    </div>
                </div>

            </div>
        </div>
        <Footer />
        </> 
    );
};

export default AboutUs; 