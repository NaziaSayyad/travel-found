import React from "react";
import "./UpcomingTrips.css";

const UpcomingTripsBanner = () => {
  return (
    <div className="upcoming-trips-banner">
      <img
        src="https://i.ibb.co/sptPp3wk/UPCOMING-TRIP-1250-400.png"
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
