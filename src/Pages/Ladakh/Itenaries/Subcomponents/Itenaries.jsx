import { useState } from "react";
import "./Itenaries.css";
export const Itenaries = ({data})=>{
    console.log(data,"itenaries");
    const [openDay, setOpenDay] = useState(null);

  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

    return(
        <>
        <div className="itinerary-container">
      <h2 className="itinerary-heading">
        <span className="itinerary-icon">[</span> Itinerary <span className="itinerary-icon">]</span>
      </h2>
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
                <li key={i} className="itinerary-detail-item">
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
        </>
    )
}