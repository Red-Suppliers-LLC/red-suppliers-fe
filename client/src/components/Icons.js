import React from "react"; 
import BagAid from "../img/doctorsbag.png"; 

import "../styling/Icons.css"; 


const Icons = () => {

    return(
        <div className="center">
        {/* <div className="spacing"> </div> */}
        <img className="font" src={BagAid} />
        {/* <a target="_blank" href="/icons/set/doctors-bag">Doctors Bag icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        </div>
    );
}; 

export default Icons; 