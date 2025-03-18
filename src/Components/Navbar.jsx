import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const closeMenuOnEsc = (event) => {
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      };

      useEffect(() => {
        document.addEventListener("keydown", closeMenuOnEsc);
        return () => {
          document.removeEventListener("keydown", closeMenuOnEsc);
        };
      }, []);
return (
        <>
         <div> Navbar </div>


 
 <nav className="navbar">
      <h2>Logo</h2>
      <div className={`sidebar ${isOpen ? "active" : ""}`} style={{ right: isOpen ? "0" : "-250px" }}>
        <ul className="nav-links">
          <li> <Link to="/about">  About </Link> </li>
          <li> <Link to="/Contact">  Contact </Link> </li>
          <li> <a href="#">Services</a></li>
          <li><Link to="/">  Back to dashboard </Link> </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
        </>
)

}
export default Navbar