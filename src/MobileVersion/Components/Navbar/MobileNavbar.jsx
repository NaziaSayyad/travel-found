import { FaBars, FaSearch } from "react-icons/fa"
import "./MobileNavbar.css";

export const MobileNavbar = () => {

    return (
        <>
            <div className="mobile-container">
                <div className="top-header">
                <img src="/logo.png" alt="logo" className="logo" />
                <span className="phone-number">+91-9090403075</span>
                <FaSearch className="nav-icon" />
                <FaBars className="nav-icon" />
            </div> 
            </div>
        </>
    )
}