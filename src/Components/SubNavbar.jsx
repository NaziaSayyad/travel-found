import React from "react";
import { Link } from "react-router-dom";
import "./SubNavbar.css";
import { FaSearch, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

export const SubNavbar = () => {
  return (
    <div className="subnavbar">
      {/* Left: Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Travel Fond" />
        {/* <p>Traveler Found</p> */}
      </div>

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
            <Link to="/kashmir" className="dropdown-item">Kashmir</Link>
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
