import React from "react";
import { Link } from "react-router-dom";
import "./SubNavbar.css";
import { FaSearch, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

export const SubNavbar = () => {
  return (
    <div className="subnavbar">
      {/* Left: Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Traveler Found" />
        {/* <p>Traveler Found</p> */}
      </div>

      {/* Center: Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Where do you want to go?" />
        <FaSearch className="search-icon" />
      </div>

      {/* Right: Menu Links */}
      <div className="menu-links">
        <Link to="#"><FaCalendarAlt className="icon" /> Upcoming Trips</Link>
        <Link to="#">Corporate Tours</Link>
        <Link to="#">Blogs</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Contact Us </Link>
      </div>

      {/* Contact Button */}
      <div className="contact-btn">
        <FaPhoneAlt className="phone-icon" />
        <span> +91-8287805715</span>
      </div>
    </div>
  );
};
