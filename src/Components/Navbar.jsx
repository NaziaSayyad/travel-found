import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import NavbarDropdown from "./NavbarDropdown";
import InternationalDropdown from "./International";
import { SubNavbar } from "./SubNavbar";
// import logo from "./logo.png"; // Add your logo

// const DomesticAPI = 'https://travelfond-backend.onrender.com/domestic';
 const DomesticAPI = `https://travelfondbackend-production.up.railway.app/domestic`;
const InternationalAPI = `https://travelfondbackend-production.up.railway.app/international`;
const Navbar = () => {
  const [DomesticDropdown, setDomesticDropdown] = useState(false);
  const [LadakhDropdown, setLadakhDropdown] = useState(false);

  return (
    
   <>
   <SubNavbar /> 
    <nav className="navbar">
      <div>
         <Link to='/'>
      <img 
          className="logo-img"
          src="/travelfond-logo-image.png"
          />
      </Link>
      </div>
      <div className="nav-container">
        <NavbarDropdown NAME = {'Domestic'} />
        <InternationalDropdown API = {InternationalAPI} NAME = {'International'} />
        <div
          className="mega-dropdown"
          onMouseEnter={() => setLadakhDropdown(true)}
          onMouseLeave={() => setLadakhDropdown(false)}
        >
          <Link to="/ladakhTrip" className="dropdown-link">
            <span className="dropdown-text">Ladakh</span>
            <span className="drop-arrow"><IoIosArrowDown size={20} /></span>
          </Link>

          <div className={`mega-dropdown-menu ${LadakhDropdown ? 'show' : ''}`}>
            <div className="dropdown-column">
              <Link to="/ladakhTrip#group"> Group Tours / Bag Packing </Link>
              <Link to="/ladakhTrip#customize"> Customize Trips </Link>
              <Link to="/ladakhTrip#luxurious"> Luxurious Ladakh </Link>
              <Link to='/ladakhTrip'> View all </Link>
            </div>
          </div>
        </div>

        <div className="nav-links">

          <Link to="/ladakh" className="dropdown-link">
            <span className="dropdown-text">Himachal</span>
            <span className="drop-arrow"><IoIosArrowDown size={20} /></span>
          </Link>
          <Link to="/spiti" className="dropdown-link">
            <span className="dropdown-text"> Spiti </span>
            <span className="drop-arrow"><IoIosArrowDown size={20} /></span>
          </Link>
          <Link to="/ladakh" className="dropdown-link">
            <span className="dropdown-text">🎁 Gift Cards</span>
            <span className="drop-arrow"><IoIosArrowDown size={20} /></span>
          </Link>
          <Link to="/ladakh" className="dropdown-link">
            <span className="dropdown-text">   Refer & Earn </span>
            <span className="drop-arrow"><IoIosArrowDown size={20} /></span>
          </Link>
        </div>

      </div>
    </nav>
   </>
  );
};

export default Navbar;
