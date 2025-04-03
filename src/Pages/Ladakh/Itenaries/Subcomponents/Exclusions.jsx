import React from "react";
import "./Exclusions.css"; 
import { FaTimesCircle } from "react-icons/fa"; // Importing cross icon

export const Exclusions = ({ data }) => {
  return (
    <div className="exclusions-container">
      <h2>
        <span className="title-icon">❌</span> Exclusions
      </h2>
      <ul className="exclusions-list">
        {data?.map((item, index) => (
          <li key={index} className="exclusion-item">
            <FaTimesCircle className="icon" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
