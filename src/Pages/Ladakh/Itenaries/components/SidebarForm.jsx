import React from "react";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import "./SidebarForm.css";

const SidebarForm = () => {
  return(
   <>
     <div className="sidebar-container">
      {/* Pricing Box */}
      <div className="pricing-box">
        <p>Starting from</p>
        <span className="price">₹22,999/-</span>
        <span className="per-person"> per person</span>
        <button className="pricing-btn">Dates & Costing</button>
      </div>
    <div className="form-box">
      <h2>Wanderlust Calling?</h2>
      <p>Allow Us to Call You Back!</p>

      <div className="input-group">
        <i><FaUser /></i>
        <input type="text" placeholder="e.g. John Smith" />
      </div>

      <div className="input-group">
        <i><FaPhone /></i>
        <input type="text" placeholder="Enter your 10 digit number" />
      </div>

      <div className="input-group">
        <i><FaEnvelope /></i>
        <input type="email" placeholder="john@example.com" />
      </div>

      <button className="submit-btn">Submit</button>
    </div>
    </div>
   </>
  );
};

export default SidebarForm;
