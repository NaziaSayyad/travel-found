import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import NavbarDropdown from "./NavbarDropdown";
import InternationalDropdown from "./International";
import { SubNavbar } from "./SubNavbar";
// import logo from "./logo.png"; // Add your logo

const DomesticAPI = 'http://localhost:8080/domestic';
const InternationalAPI = 'http://localhost:8080/international'
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
          
        {/* Navigation Links
        <div className="nav-links">
        Domestic DropDown  */}
         {/* <div
          className="domestic-dropdown-wrapper"
          onMouseEnter={() => setDomesticDropdown(true)}
          onMouseLeave={() => setDomesticDropdown(false)}
        >
          <Link to="#" className="dropdown-link">
            <span className="domestic-dropdown-trigger">Domestic </span>
            <span className="domestic-dropdown-arrow"><IoIosArrowDown size={20} /></span>
          </Link> */}

          {/* <div className={`domestic-dropdown-panel ${DomesticDropdown ? 'domestic-dropdown-show' : ''}`}>
            <input
              type="text"
              className="domestic-dropdown-search"
              placeholder="Search state or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            /> */}
          {/* <div className="domestic-dropdown-scroll">
              {Object.entries(stateCityData).map(([state, cities]) => {
                const isMatch =
                  state.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  cities.some((city) =>
                    city.toLowerCase().includes(searchTerm.toLowerCase())
                  );

                if (!isMatch) return null;
                return (
                  <div key={state} className="domestic-dropdown-state">
                    <span className="state-title">{state}</span>
                    <div className="city-list">
                      {cities
                        .filter((city) =>
                          city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          state.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((city) => (
                          <Link to="#" key={city}>
                            {city}
                          </Link>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div> */}
             {/* <div className="domestic-dropdown-grid">
              <div className="domestic-dropdown-col">
                <Link to="#"> Andrapradesh </Link>
                <Link to="#"> Arunachal Pradesh </Link>
                <Link to="#"> Assam </Link>
                <Link to="#"> Bihar </Link>
                <Link to="#"> Chhattisgarh </Link>
                <Link to="#"> Goa </Link>
                <Link to="#"> Gujrat </Link>
                <Link to="#"> Haryana </Link>
              </div>
              <div className="domestic-dropdown-col">
                <Link to="#"> Himachal Pradesh </Link>
                <Link to="#"> Jharkhand </Link>
                <Link to="#">  Karnatak</Link>
                <Link to="#">  Kerla </Link>
                <Link to="#"> Madhya Pradesh </Link>
                <Link to="#"> Maharashtra </Link>
                <Link to="#"> Manipur </Link>
                <Link to="#"> Meghalya </Link>
              </div>
              <div className="domestic-dropdown-col">
                <Link to="#">  Rajasthan</Link>
                <Link to="#">  Sikkim </Link>
                <Link to="#">  Tamil Nadu </Link>
                <Link to="#"> Telangana </Link>
                <Link to="#"> Tripura </Link>
                <Link to="#"> Uttar Pradesh </Link>
                <Link to="#"> West Bengal </Link>
                <Link to="#"> Andaman & Nicobar Islands </Link>


              </div>

              <div className="domestic-dropdown-col">
                <Link to="#">  Chandigarh </Link>
                <Link to="#">  Dadra & Nagar Haveli and Daman & Diu </Link>
                <Link to="#">  Delhi (NCT) </Link>
                <Link to="#">  Jammu & Kashmir </Link>
                <Link to="/ladakh">  Ladakh </Link>
                <Link to="#"> Lakshadweep </Link>
                <Link to="#">  Puducherry </Link>
              </div>
            </div>  */}
{/* </div> */}





           
          
        {/* </div>  */}
        <NavbarDropdown NAME = {'Domestic'} />
        
        <InternationalDropdown API = {InternationalAPI} NAME = {'International'} />
        {/*  International DropDown  */}
        {/* <Link to="/ladakh" className="dropdown-link">
          <span className="dropdown-text">International </span>
          <span className="drop-arrow"><IoIosArrowDown size={20} /></span>
        </Link> */}
        {/* Ladakh Drop Down */}
        <div
          className="mega-dropdown"
          onMouseEnter={() => setLadakhDropdown(true)}
          onMouseLeave={() => setLadakhDropdown(false)}
        >
          <Link to="/ladakh" className="dropdown-link">
            <span className="dropdown-text">Ladakh</span>
            <span className="drop-arrow"><IoIosArrowDown size={20} /></span>
          </Link>

          <div className={`mega-dropdown-menu ${LadakhDropdown ? 'show' : ''}`}>
            <div className="dropdown-column">
              <Link to="#"> Group Tours / Bag Packing </Link>
              <Link to="#"> Customize Trips </Link>
              <Link to="#"> Luxurious Ladakh </Link>
              <Link to='/ladakh'> View all </Link>
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
      {/* </div> */}
    </nav>
   </>
  );
};

export default Navbar;
