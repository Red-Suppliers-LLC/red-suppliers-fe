import React from "react";
import "../styling/Home.css"

const Home = () => {
    
    return(
        <>
        <div className="body"> 
        <img src="https://p0.piqsels.com/preview/4/544/846/medical-local-doctor-medicine.jpg" alt="home photo" />
        </div>
        <div> 
        <h1> Red Suppliers LLC </h1>
        </div> 
        <div className="center"> 
        <p className="div1"> Red Suppliers specializes in fill the needs of government organizations by delivering needed products within the medical industry. Red Suppliers focuses on dental and portable aid supplies to be delivered to the needed locations </p> 
        </div>
        <div className="center">
        <div className="button" type="submit"> Contact US </div>
        </div> 
        <div className="spacing"> </div>
        <div className=""> 
           <div> 
                <div> 
               <img className="small-img" src="https://www.maxpixel.net/static/photo/1x/Hands-Welcome-Handshake-Shaking-Hands-Agreement-3091908.jpg"/> 
               </div>
               <div> 
                <p> </p>
               </div>
            </div> 
            <div className="spacing"> </div> 
            <div> 
            <div> 
               <img className="small-img" src="https://2001-2009.state.gov/cms_images/030405_med_supplies.jpg" /> 
               </div>
               <div> 
                <p> </p>
               </div>
            </div>
        </div>
        </> 
    );
}

export default Home; 