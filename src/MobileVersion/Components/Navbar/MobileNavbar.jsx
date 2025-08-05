import { FaBars, FaSearch } from "react-icons/fa"
import "./MobileNavbar.css";
import { Link } from "react-router-dom";

export const MobileNavbar = () => {

    return (
        <>
            <div className="mobile-container">
                <div className="top-header">
                <Link to='/'> 
           {/* <div className="logo-video-container"> */}
           {/* <video
             className="mobile-logo-video"
            //  src="/Travel-Fond-Mobile-Logo.mp4"
            src="/travel-fond-logo.mp4"
             autoPlay
             loop
             muted
             playsInline
           /> */}
           <img
           className="mobile-log-img"
           src="/travelfond-logo-image.png"
           />
         {/* </div> */}
           </Link>
           <span className="phone-number"> +91-9899275976</span>
                <FaSearch className="nav-icon" />
                <FaBars className="nav-icon" />
            </div> 
            </div>
        </>
    )
}