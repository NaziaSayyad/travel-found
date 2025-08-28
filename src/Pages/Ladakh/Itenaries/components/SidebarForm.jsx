import React, { useState } from "react";
import "./SidebarForm.css";

import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import { BatchesPage } from "../Subcomponents/Batches";
import { CostingPage } from "../Subcomponents/Costing";
import QueryForm from "../../../Booking/Customize_Form/QueryForm";
import QuoteModal from "../../../Booking/Get_Qoute_form/QuoteModal";

const SidebarForm = ({ costing, batches, data}) => {
  const [showCosting, setShowCosting] = useState(false);
  const navigate = useNavigate();
  // console.log(data,"sidebar");
  // console.log(batches,"batch");
  // console.log(costing,"costing");
  
  
  
 const [isModalOpen, setIsModalOpen] = useState(false);

    const openQuoteModal = () => {
  document.body.classList.add("quote-modal-open"); // add a class to body
  setIsModalOpen(true); // open modal
};

const closeQuoteModal = () => {
  document.body.classList.remove("quote-modal-open"); // remove the class
  setIsModalOpen(false); // close modal
};

  
  const toggleCosting = () => {
    setShowCosting((prev) => !prev);
  };

  const handleBookNow = () => {
    // You can customize this object to send specific data like batch name, cost etc.
    const bookingDetails = {
       data:data
    };
    
    navigate("/book-now", { state: bookingDetails });
  };

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
            <div>
           
      {batches ? (
        <>
            <div className="book-now-container">
         <button className="book-now-btn" onClick={openQuoteModal}>
               Get Quotes
          </button>
            </div>
         <BatchesPage data={batches}  start={data.start} end ={data.End} />
         <CostingPage data={costing} />
         <div className="book-now-container">
              <button className="book-now-btn" onClick={handleBookNow}>
                Book Now
              </button>
            </div>
        </>
      ):(
          <div className="book-now-container">
              <button className="book-now-btn" onClick={handleBookNow}>
                Customize Your Trip 
              </button>
            </div>
      )}
      <div className="book-now-container">
  
</div>

            </div>
          
          </>
        )}
         {isModalOpen && <QuoteModal onClose={closeQuoteModal} />}
      </div>

      {/* Form Component */}
      <Form />
    </div>
  );
};

export default SidebarForm;
