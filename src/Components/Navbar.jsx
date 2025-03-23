import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "./logo.png"; // Add your logo

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        {/* <div className="logo">
          <img src={"logo"} alt="Traveler Found" />
        </div> */}

        {/* Navigation Links */}
        <div className="nav-links">
          {/* <div><Link to="#">Manali</Link></div> */}

          {/* Mega Dropdown - India Packages */}
          <div 
            className="mega-dropdown"
            onMouseOver={() => setDropdown(true)}
            onMouseOut={() => setDropdown(false)}
          >
            <Link to="#">Ladakh ▼</Link>
            
            {/* {dropdown && (
              <div className="mega-dropdown-menu">
                <div className="dropdown-column">
                  <Link to="#">Ladakh</Link>
                  <Link to="#">Spiti</Link>
                  <Link to="#">Meghalaya</Link>
                  <Link to="#">Kashmir</Link>
                  <Link to="#">Kerala</Link>
                  <Link to="#">Andaman</Link>
                </div>
                <div className="dropdown-column">
                  <Link to="#">Rajasthan</Link>
                  <Link to="#">Himachal Pradesh</Link>
                  <Link to="#">Sikkim</Link>
                  <Link to="#">Uttarakhand</Link>
                  <Link to="#">Leh Ladakh Bike Trips</Link>
                  <Link to="#">Spiti Valley Bike Trips</Link>
                </div>
              </div>
            )} */}
          </div>

        <div className="nav-links">
           <div><Link to="#">Kashmir ▼</Link></div>
            <div><Link to="#">Spiti ▼</Link></div>
           <div><Link to="#">🎁 Gift Cards</Link></div>
           <div><Link to="#"> Refer & Earn </Link></div>
         
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
