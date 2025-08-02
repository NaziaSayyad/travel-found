import React from "react";
import "./MobileDashboard.css";
import { FaSearch, FaBars, FaHome, FaCompass, FaPhone, FaStar } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc'; // colorful Google icon
import { SiTripadvisor } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { DestinationSlideShow } from "../SlideShow/DestinationSlideshow";

const destinations = [
  {name : "Ladakh",  img : "https://i.ibb.co/FLVKvs0B/1-15.jpg"},
  {name : "Spiti",   img : "https://i.ibb.co/KJyMqVj/manas-aggarwal-Pf-ZQ-Gfmqe-I-unsplash.jpg"},
  {name : "Himachal", img:"https://i.ibb.co/0pGcZKrN/ladakh-7127801.jpg"},
  {name : "Kashmir",  img : "https://i.ibb.co/7tD7Qv93/mountains-2689450.jpg"}
];

const MobileLandingPage = () => {
  return (
    <div className="mobile-container">
      {/* Top Header */}
      {/* <div className="top-header">
        <img src="/logo.png" alt="logo" className="logo" />
        <span className="phone-number">+91-9090403075</span>
        <FaSearch className="icon" />
        <FaBars className="icon" />
      </div> */}

      {/* Hero Banner */}
      {/* <div className="hero-section">
        <img src="/banner.jpg" alt="travel banner" className="hero-image" />
        <div className="hero-overlay">
          <h2>Global Community of Travelers</h2>
          <h1> Background Vedio </h1>
          <p className="highlight">Sprl</p>
        </div>
      </div> */}
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

           return(
            <>
             <div key={index} className="destination-card">
              <img
                src={place.img}
                alt={place.name}
              />
              <span>{place.name}</span>
            </div>
            
            </>
           )
        })}
        </div>
      </div>
          <div>
            <h2> Sliders </h2>
             <h2> Sliders </h2> 
             <h2> Sliders </h2>
              <h2> Sliders </h2>
               <h2> Sliders </h2>
               <DestinationSlideShow />

          </div>
      {/* Bottom Nav */}
      <div className="bottom-nav">
        <div className="nav-item">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <FaCompass />
          <span>Explore</span>
        </div>
        <div className="nav-item">
          <FaSearch />
          <span>Search</span>
        </div>
        <div className="nav-item">
          <FaPhone />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default MobileLandingPage;
