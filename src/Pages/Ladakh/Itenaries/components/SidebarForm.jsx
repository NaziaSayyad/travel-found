import React, { useState } from "react";
import "./SidebarForm.css";

import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import { BatchesPage } from "../Subcomponents/Batches";
import { CostingPage } from "../Subcomponents/Costing";
import QueryForm from "./QueryForm";

const SidebarForm = ({ costing, batches, data}) => {
  const [showCosting, setShowCosting] = useState(false);
  const navigate = useNavigate();

  console.log("booking",data.Name);
  
  const toggleCosting = () => {
    setShowCosting((prev) => !prev);
  };

  const handleBookNow = () => {
    // You can customize this object to send specific data like batch name, cost etc.
    const bookingDetails = {
      Name : data.Name,
      days : data.days,
      img: data.img,
      batch : batches,
      cost :costing,
      start : data.start,
      end : data.End

    };

    navigate("/book-now", { state: bookingDetails });
  };
console.log(data,"DATA");

  return (
    <div className="sidebar-container">
      {/* Pricing Box */}
      <div className="pricing-box">
        <p>Starting from</p>
        <span className="price">{`₹${data.newprice}/-`}</span>
        <span className="per-person"> per person</span>
        <button className="pricing-btn" onClick={toggleCosting}>
          Dates & Costing
        </button>

        {/* Batch Section */}
        {showCosting && (
          <>
           {/* <BatchesPage data={batches}  start={data.start} end ={data.End}  />
            <CostingPage data={costing} />
           <div className="book-now-container">
              <button className="book-now-btn" onClick={handleBookNow}>
                Book Now
              </button>
            </div>
            <QueryForm /> */}
            <div>
            {/* <QueryForm /> */}
            <div className="book-now-container">
              <button className="book-now-btn" onClick={handleBookNow}>
                Customize Your Trip 
              </button>
            </div>
      {batches && (
        <>
         <BatchesPage data={batches}  start={data.start} end ={data.End} />
         <CostingPage data={costing} />
         <div className="book-now-container">
              <button className="book-now-btn" onClick={handleBookNow}>
                Book Now
              </button>
            </div>
        </>
      )}
            </div>
          
          </>
        )}
      </div>

      {/* Form Component */}
      <Form />
    </div>
  );
};

export default SidebarForm;
