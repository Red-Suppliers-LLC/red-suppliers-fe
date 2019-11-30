import React from "react"
import "../styling/Home.css"
import OurPartners from "./OurPartners.js"
import NavBar from "./NavBar"
import HomeImg from "../img/homepageimgtwo.png"; 
import OurPartners from "./OurPartners.js"; 

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
     <h3> Hand Shake </h3>
        <div className="center">
        <div className="button" type="submit"> Contact US </div>
        </div> 
        <div className="spacing"> </div>
        <div> 
        <h2 style={{fontSize: "30px", display: "flex", justifyContent: "center"}}> Our Services </h2>
        </div> 
        <div className="side-by-side"> 
           <div className="services1"> 
                <div> 
               <img className="handshake-img" src="https://www.maxpixel.net/static/photo/1x/Hands-Welcome-Handshake-Shaking-Hands-Agreement-3091908.jpg"/> 
               <div className="center">    
                    <h3> Benefits </h3> 
                </div>
                <div className="benefits">
                    <p> Through providing medical supplies we noticed that some buyers look for a few key things such as quality, efficiency, and low cost. In order to maintain consistency and quality we associate ourselves with other professionals to satisfy each and everyone of those criterias. One of our aims is to build a long term relationship of customer satisfaction. </p>    
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
                <p> The list of products we supply can range from Basic First Aid to even OSHA, Pets, Coast Guard, Swimming First Aids and many more. We are constantly updating our inventory to satisfy our buyers. Contact us to see how we can provide what you may need. </p>
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
