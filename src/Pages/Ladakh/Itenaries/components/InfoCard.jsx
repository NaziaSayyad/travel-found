import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"; // Import icons
import "./InfoCard.css"; // Import CSS

const InfoCard = () => {
  return (
    <div className="info-container">
      <div className="info-card">
        <FaMapMarkerAlt className="info-icon" />
        <div>
          <p className="info-title">Pickup & Drop</p>
          <p className="info-value">Srinagar - Manali</p>
        </div>
      </div>

      <div className="info-card">
        <FaClock className="info-icon" />
        <div>
          <p className="info-title">Duration</p>
          <p className="info-value">10N - 11D</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
