import { useState } from "react";
import "./Itenaries.css";
import { MdArrowRight } from "react-icons/md"; // Looks close to a bullet

export const Itenaries = ({data})=>{
    console.log(data,"itenaries");
    const [openDay, setOpenDay] = useState(null);

  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

    return(
        <>
        <div className="itinerary-container">
      <h2 className="itinerary-heading"> Itineraries </h2>

      {data?.map((item, index) => (
        <div
          key={index}
          className={`itinerary-box ${openDay === index ? "expanded" : ""}`}
          onClick={() => toggleDay(index)}
        >
          <div className="itinerary-day-header">
            <button className="itinerary-day-button">{item.Day}</button>
            <span className="itinerary-title">{item.Title}</span>
            <button className="itinerary-toggle-button">{openDay === index ? "−" : "+"}</button>
          </div>
          {openDay === index && (
            <ul className="itinerary-details">
              {item.Details.map((detail, i) => (
              
              <div key={i} className="itinerary-detail-item">
                 <MdArrowRight size={30} color="teal" /> {/* Bullet Icon */}
                 <span>{detail}</span>
                </div>
                           
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
        </>
    )
}