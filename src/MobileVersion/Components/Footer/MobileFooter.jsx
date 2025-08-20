// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaSearch, FaPhone } from "react-icons/fa";
import { MdExplore } from "react-icons/md";

import "./MobileFooter.css";
export const MobileFooter = () => {
  return (
    <nav className="bottom-nav">
      <div className="mobile-nav-item">
        <FaInstagram />
        <span>Instagram</span>
      </div>

      <div className="mobile-nav-item">
        <MdExplore />
        <span>Explore</span>
      </div>

      <div className="mobile-nav-item">
        <FaSearch />
        <span>Search</span>
      </div>

      <div className="mobile-nav-item">
        <FaPhone />
        <span>Contact</span>
      </div>
    </nav>
  );
};

