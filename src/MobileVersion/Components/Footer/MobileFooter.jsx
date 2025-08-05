 import { FaCompass, FaHome, FaInstagram, FaPhone, FaSearch } from "react-icons/fa";
import "./MobileFooter.css";

export const MobileFooter = () =>{
    return(
        <>
         <div className="bottom-nav">
        <div className="nav-item">
          <FaInstagram />
          <span>Instagram</span>
        </div>
        <div className="nav-item">
          <FaCompass />
          <span>Explore</span>
        </div>
        <div className="nav-item">
          <FaSearch />
          <span>Search</span>
        </div>
        <div className="nav-item">
          <FaPhone />
          <span>Contact</span>
        </div>
      </div>
        </>
    )
}