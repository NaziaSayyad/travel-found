import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Traveler Found</h1>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>

          {/* HOT DEALS DROPDOWN */}
          <li className="dropdown">
            <Link to="/home">Hot Deals</Link>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <Link to="/domestic">Domestic</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/domestic/beach">Beach Destinations</Link></li>
                  <li><Link to="/domestic/mountains">Mountain Retreats</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/international">International</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/international/europe">Europe</Link></li>
                  <li><Link to="/international/asia">Asia</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* TRIPS DROPDOWN */}
          <li className="dropdown">
  <Link to="/trips">Trips</Link>
  <div className="dropdown-menu">
    <ul>
      <li className="dropdown">
        <Link to="/trips/domestic">Domestic Trips</Link>
        <div className="dropdown-menu">
          <ul>
            <li><Link to="/trips/domestic/hill-stations">Hill Stations</Link></li>
            <li><Link to="/trips/domestic/wildlife">Wildlife Tours</Link></li>
          </ul>
        </div>
      </li>
      <li className="dropdown">
        <Link to="/trips/international">International Trips</Link>
        <div className="dropdown-menu">
          <ul>
            <li><Link to="/trips/international/adventure">Adventure Tours</Link></li>
            <li><Link to="/trips/international/cultural">Cultural Tours</Link></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</li>


          {/* WEEKEND TRIPS DROPDOWN */}
          <li className="dropdown">
            <Link to="/weekendtrips">Weekend Trips</Link>
            <ul className="dropdown-menu">
              <li><Link to="/weekendtrips/camping">Camping</Link></li>
              <li><Link to="/weekendtrips/roadtrips">Road Trips</Link></li>
            </ul>
          </li>

          {/* CORPORATE TOURS DROPDOWN */}
          <li className="dropdown">
            <Link to="/corporatetour">Corporate Tour</Link>
            <ul className="dropdown-menu">
              <li><Link to="/corporatetour/team-building">Team Building</Link></li>
              <li><Link to="/corporatetour/retreats">Retreats</Link></li>
            </ul>
          </li>

          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>

        </ul>
      </div>
    </nav>
  );
}
