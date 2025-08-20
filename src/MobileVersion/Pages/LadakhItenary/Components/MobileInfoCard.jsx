import "./MobileInfoCard.css";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"; // Import icons

export const MobileInfoCard = ({pick,Drop,Nights})=>{

    return(
        <>
        <div className="mobile-info-container">
              <div className="mobile-info-card">
                <FaMapMarkerAlt className="mobile-info-icon" />
                <div>
                  <p className="mobile-info-title">Pickup / Start Point</p>
                  <p className="mobile-info-value">{pick} </p>
                </div>
              </div>
              <div className="mobile-info-card">
                <FaMapMarkerAlt className="mobile-info-icon" />
                <div>
                  <p className="mobile-info-title">Drop / End Point</p>
                  <p className="mobile-info-value">{Drop} </p>
                </div>
              </div>
              <div className="mobile-info-card">
                <FaClock className="mobile-info-icon" />
                <div>
                  <p className="mobile-info-title">Duration</p>
                  <p className="mobile-info-value">{Nights}</p>
                </div>
              </div>
            </div>
        </>
    )
}