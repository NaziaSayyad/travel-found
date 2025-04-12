import React, { useState } from "react";
import "./RegistrationForm.css"; // Link to external CSS
import { useLocation } from "react-router-dom";

export const RegistrationForm = () => {
  const location = useLocation();

  const bookingData = location.state;
  console.log("bookingData", bookingData);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    batch: "",
    cost: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send this data to your backend or display a success message
  };

  return (
    <>
      <div className="booking-container">
        <div className="costing-form-container">
          <h2>Register Now</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              className="input-costing"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email ID</label>
            <input
              className="input-costing"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="DOB">Date Of Birth</label>
            <input
              className="input-costing"
              type="text"
              id="dob"
              name="dob"
              placeholder="Enter your Date Of Birth"
              value={formData.dob}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              className="input-costing"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="batch">Select Batch</label>
            <select
              className="input-costing"
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
            >
              <option value="">--Select Batch--</option>
              {bookingData?.batch?.map((batchObj, index) => (
                <option key={index} value={batchObj.batch}>
                  {batchObj.batch} ({batchObj.start} - {batchObj.end})
                </option>
              ))}

            </select>

            <label htmlFor="cost">Select Cost</label>
            <select
              className="input-costing"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              required
            >
              <option value="">--Select Cost--</option>
              {bookingData?.cost?.map((batchObj, index) => (
                <option key={index} value={batchObj.batch}>
                  {batchObj.mode} : <span style={{fontWeight : 'bold'}}> {batchObj.cost}  </span>
                </option>
              ))}

            </select>

            <button className="costing-btn" type="submit">Registered</button>
          </form>
        </div>

        <div className="display-booking">
        <div className="summary-section">

        <div className="tour-card">
          <img src={bookingData?.img} alt="" />
          <h3> {bookingData?.days} {bookingData?.start} to 
            {bookingData?.end} <span> {bookingData?.Name} 
          </span></h3>
         <div className="duration-box">{bookingData?.days}</div>
        </div>

        <div className="price-box">
          <p>Starting Price</p>
          <h2>₹39,999/- <span>per person</span></h2>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};
