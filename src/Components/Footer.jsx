import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Company Info */}
        <div className="footer-column">
          <h3>Traveler Found</h3>
          <p>Your perfect travel partner for unforgettable adventures.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          {/* <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div> */}
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest travel updates.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Traveler Found. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

