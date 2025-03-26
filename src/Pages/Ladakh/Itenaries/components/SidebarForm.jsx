import React, { useState } from "react";
import "./SidebarForm.css";

const SidebarForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="right-section">
      {/* Price Box */}
      <div className="price-box">
        <p>Starting from</p>
        <h2>₹39,999/- <span>per person</span></h2>
        <button className="cost-btn">Dates & Costing</button>
      </div>

      {/* Form Box */}
      <div className="form-box">
        <h3 className="highlight-text">Wanderlust Calling?</h3>
        <p>Allow Us to Call You Back!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              placeholder="e.g. John Smith"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Phone No. *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your 10-digit number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email ID *</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SidebarForm;
