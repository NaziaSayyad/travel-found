import React from "react";
import "./MobileDashboard.css";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc'; // colorful Google icon
import { SiTripadvisor } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { MobileFooter } from "../Footer/MobileFooter";
import { DestinationSlideShow } from "../SlideShow/Destination-SlideShow/DestinationSlideshow";
import { HorizontalSlider } from "../SlideShow/Horizontal-SlideShow/HorizontalSlider";
import { Link } from "react-router-dom";

const destinations = [
  {
    link: "/ladakh",
    name: "Ladakh",
    img: "https://i.ibb.co/FLVKvs0B/1-15.jpg"
  },
  {
    link: "/spiti",
    name: "Spiti",
    img: "https://i.ibb.co/KJyMqVj/manas-aggarwal-Pf-ZQ-Gfmqe-I-unsplash.jpg"
  },
  {
    link: "/himachal",
    name: "Himachal",
    img: "https://i.ibb.co/0pGcZKrN/ladakh-7127801.jpg"
  },
  {
    link: "/kashmir",
    name: "Kashmir",
    img: "https://i.ibb.co/7tD7Qv93/mountains-2689450.jpg"
  }
];

const MobileLandingPage = () => {
  return (
    <div className="mobile-container">

      <div className="banner">
        <h1> Vedio In Background </h1>
      </div>

      {/* Reviews */}
      <div className="reviews">
        <div className="review">
          {/* <img src="/google.png" alt="google" /> */}
          <FcGoogle
            style={{ fontSize: '30px' }} />
          <FaStar className="star-icon" />

          <p>5.0<br /> </p>
        </div>
        <div className="review">

          <SiTripadvisor style={{ fontSize: '30px' }} />

          <FaStar className="star-icon" />
          <p>5.0<br /></p>
        </div>
        <div className="review">
          <FaFacebook style={{ color: '#1877F2', fontSize: '30px' }} />
          <FaStar className="star-icon" />
          <p>4.9<br /></p>
        </div>
      </div>

      {/* Destinations */}
      <div className="destinations">
        <h3>Destinations</h3>
        <div className="destination-list">
          {destinations.map((place, index) => {

            return (
              <>
                <div key={index} className="destination-card">
                  <Link to={place.link}>
                  <img
                    src={place.img}
                    alt={place.name}
                  />
                  </Link>
                  <span>{place.name}</span>
                </div>

              </>
            )
          })}
        </div>
      </div>
      <div>
        <HorizontalSlider />
        <h2> Sliders </h2>
        <h2> Sliders </h2>
        <h2> Sliders </h2>
        <h2> Sliders </h2>
        <h2> Sliders </h2>
        <DestinationSlideShow />
        <h4> Slider</h4>
        <h4> Slider </h4>
        <h4> Slider </h4>
        <h4> Slider </h4>
        <h4> Slider </h4>
        <h4> Slider </h4>
        <h4> Slider </h4>
        <h4> Slider </h4>
        <h4> Slider </h4>
        <h4> Slider </h4>
        <h4> Slider </h4>

      </div>

    </div>

  );
};

export default MobileLandingPage;
