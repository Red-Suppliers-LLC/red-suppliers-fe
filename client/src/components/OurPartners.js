import React from "react";
import "../styling/ourpartners.css"; 

const OurPartners = () => {
    
    return(
        <>
        <div> 
        <h2 className="center"> Our Partners </h2>
        </div>
        <div className="space-between"> </div> 
        <div> 
            {/* Once we have agreements with the manufactures we can switch the h3 tag to an img tag with the partners logo */}
            <div className="set-one"> 
            <div className="partner-one"> <h3> Partners One </h3> </div>
            <div className="partner-two"> <h3> Partner Two </h3> </div>
            </div> 
            <div className="set-two"> 
            <div className="partner-three"> <h3> Partner Three </h3> </div>
            <div className="partner-four"> <h3> Partner Four </h3> </div> 
            </div>
        </div> 
        </>
    )
}

export default OurPartners; 