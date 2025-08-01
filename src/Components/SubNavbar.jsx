import React from "react";
import { Link } from "react-router-dom";
import "./SubNavbar.css";
import { FaSearch, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

export const SubNavbar = () => {
  return (
    <div className="subnavbar">
      {/* Left: Logo */}
      {/* Logo */}
           <Link to='/'> 
           <div className="logo-video-container">
           <video
             className="logo-video"
             src="/logo.mp4"
             autoPlay
             loop
             muted
             playsInline
           />
         </div>
           </Link>

      {/* Center: Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Where do you want to go?" />
        <FaSearch className="search-icon" />
      </div>

      {/* Right: Menu Links */}
      <div className="menu-links">
       {/* dropdown */}
       <div className="dropdown">
       <Link to="#" className="menu-item">
            <FaCalendarAlt className="icon" />
             Best Seller Packages
          </Link>
          <div className="dropdown-content">
            <Link to="/ladakh" className="dropdown-item">Ladakh</Link>
            <Link to="/kashmir" className="dropdown-item">Himachal</Link>
            <Link to= '/spiti' className="dropdown-item">Spiti</Link>
          </div>
        </div>

       {/* about  */}
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us </Link>
        
        </div>

      {/* Contact Button */}
      <div className="contact-btn">
        <FaPhoneAlt className="phone-icon" />
        <span className="number"> +91-9899275976</span>
      </div>
    </div>
  );
};
