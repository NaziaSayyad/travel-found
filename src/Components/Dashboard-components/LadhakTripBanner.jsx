import React from "react";
import "./LadhakTripBanner.css";
import { Link } from "react-router-dom";

const LadhakTripBanner = () => {
  return (
    <div className="international-trips">
      <div className="trip-banner">
        <div className="trip-content">
          <h1>Ladakh Trips</h1>
          <p>Discover the world, one destination at a time</p>
          <button className="explore-btn">Explore</button>
        </div>
      </div>
      <div className="trip-images">
      <Link to={'/ladakh'}>
      <img src="https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg" alt="Paris" className="trip-img" />
      </Link>
        <Link to={'/ladakh'}>
        <img src="https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg" alt="Mountain" className="trip-img" />
        </Link>
        <Link to={'/ladakh'}>
        <img src="https://i.postimg.cc/yNGFDY4w/118.jpg" alt="Buddha" className="trip-img" />
        </Link>
        <Link to={'/ladakh'}>
        <img src="https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg" alt="Cityscape" className="trip-img" />
      </Link>
      <Link to={'/ladakh'}>
      <img src="https://i.postimg.cc/gcZhYGv2/lake-489289.jpg" alt="img" className="trip-img"/>
      </Link>
      </div>
    </div>
  );
};

export default LadhakTripBanner;