import React from "react";
import "./LadhakTripBanner.css";
import { Link } from "react-router-dom";

const heading = "Ladakh Trips";
const para = "Discover the world, one destination at a time";
const link = "/ladakh";
const images = [
  { img: "https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg" },
  { img: "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg" },
  { img: "https://i.postimg.cc/yNGFDY4w/118.jpg" },
  { img: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg" }, ,
  { img: " https://i.postimg.cc/gcZhYGv2/lake-489289.jpg" }
]


const LadhakTripBanner = () => {
  images.map((i) =>{
    console.log(i.img);
    
  })
  return (
    <div className="international-trips">
      <div className="trip-banner">
        <div className="trip-content">
          <h1>{heading}</h1>
          <p>{para}</p>
          <button className="explore-btn">Explore</button>
        </div>
      </div>
        {
          images.map((i) =>{
           
        <div className="trip-images">
        <Link to={link}>
          <img src={i.img} alt="Paris" className="trip-img" />
        </Link>
        <Link to={link}>
          <img src={i.img} alt="Mountain" className="trip-img" />
        </Link>
        <Link to={link}>
          <img src={i.img} alt="Buddha" className="trip-img" />
        </Link>
        <Link to={link}>
          <img src={i.img} alt="Cityscape" className="trip-img" />
        </Link>
        <Link to={link}>
          <img src={i.img} alt="img" className="trip-img" />
        </Link>
        </div>
            
          })
        }
       
      
    </div>
  );
};
export default LadhakTripBanner;
