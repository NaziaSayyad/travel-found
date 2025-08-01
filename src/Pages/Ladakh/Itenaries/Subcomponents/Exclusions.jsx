import React from "react";
import "./Exclusions.css"; 
import { MdArrowRight } from "react-icons/md";

export const Exclusions = ({ data }) => {
  return (
    <div className="itinerary-container">
      <h2 className="itinerary-heading">Exclusions</h2>
      <ul className="exclusions-list">
        {data?.map((item, index) => (
          <li key={index} className="exclusion-item">
            <div className="icon-text-wrapper">
              <MdArrowRight size={30} color="teal" className="arrow-icon" />
              <span className="exclusion-text">{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
