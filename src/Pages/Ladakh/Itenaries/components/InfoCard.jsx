import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"; // Import icons
import "./InfoCard.css"; // Import CSS

const InfoCard = ({Drop,Nights}) => {
  console.log('pick-drop',Nights);
  
  return (
    <div className="info-container">
      <div className="info-card">
        <FaMapMarkerAlt className="info-icon" />
        <div>
          <p className="info-title">Pickup & Drop</p>
          <p className="info-value">{Drop} </p>
        </div>
      </div>
      <div className="info-card">
        <FaClock className="info-icon" />
        <div>
          <p className="info-title">Duration</p>
          <p className="info-value">{Nights}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
