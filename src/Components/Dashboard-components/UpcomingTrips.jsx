import React from "react";
import "./UpcomingTrips.css";

const UpcomingTripsBanner = () => {
  return (
    <div className="upcoming-trips-banner">
      <img
        src="https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg" 
        alt="Upcoming  Trips"
        className="banner-image"
      />
      <div className="banner-text">
        <h2>
          UPCOMING <span className="highlight"> TRIPS</span> 
        </h2>
      </div>
    </div>
  );
};

export default UpcomingTripsBanner;
