import React from "react";
import "./Footer.css";
import { FaFacebook,FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export const SubFooter = ()=>{
    return(
        <footer className="footer">
        <h1>Travelerrr Fond </h1>
        <h4>3rd Floor, Building No-436, Phase IV,
             Udyog Vihar, Sector-18, Gurugram, Haryana-122015</h4>
        <div className="contact">
          <span>  +91-9899275976</span>
          <span> +91-7503255253</span>
          <span> +91-8287805715</span>
          </div>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <div className="footer-bottom">
        <p>© 2025 Travel Fond. All Rights Reserved.</p>
      </div>
      </footer>
    )
}