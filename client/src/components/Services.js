import React from "react"; 
import Navbar from "./NavBar.js"; 
import Footer from "./Footer.js"; 

import "../styling/Home.css"; 

const Services = () => {

    return (
        <>
        <div className="body"> 
        <Navbar />
        </div>
        <h2 className="center"> Our Services </h2>
        <div className="double-space"> </div>
        <div className="side-by-side"> 
           <div className="services1"> 
                <div> 
               <img className="handshake-img" src="https://www.maxpixel.net/static/photo/1x/Hands-Welcome-Handshake-Shaking-Hands-Agreement-3091908.jpg"/> 
               <div className="center">    
                    <h3> Benefits </h3> 
                </div>
                <div className="benefits">
                    <p className="font-size"> Through providing medical supplies we noticed that some buyers look for a few key things such as quality, efficiency, and low cost. In order to maintain consistency and quality we associate ourselves with other professionals to satisfy each and everyone of those criterias. One of our aims is to build a long term relationship of customer satisfaction. </p>    
                </div>  
               </div>
            </div> 
            <div className="spacing"> </div> 
            <div className="services2">  
               <img className="med-img" src="https://2001-2009.state.gov/cms_images/030405_med_supplies.jpg" /> 
               <div className="center">    
                    <h3> Medical Supplies </h3> 
                </div> 
               <div className="supplies"> 
                <p className="font-size"> The list of products we supply can range from Basic First Aid to even OSHA, Pets, Coast Guard, Swimming First Aids and many more. We are constantly updating our inventory to satisfy our buyers. Contact us to see how we can provide what you may need. </p>
            </div>
          </div>
        </div>
        <div className="double-space"> </div>
        <div className="center"> 
            <Footer />
        </div>
        </>
    );
};

export default Services; 