import React from "react";
import "./Exclusions.css"; 
import { FaTimesCircle } from "react-icons/fa"; // Importing cross icon
import { MdArrowRight } from "react-icons/md"; // Looks close to a bullet

export const Exclusions = ({ data }) => {
  return (
    <div  className="itinerary-container">
     <h2 className="itinerary-heading"> Exclusions </h2>
     <ul className="exclusions-list">
        {data?.map((item, index) => (
          <li key={index} className="exclusion-item">
           <MdArrowRight size={30} color="teal" /> {/* Bullet Icon */}
                 <span>{item}</span>
                  {/* <FaTimesCircle className="icon" /> */}
         
          </li>
        ))}
      </ul>
    </div>
  );
};
