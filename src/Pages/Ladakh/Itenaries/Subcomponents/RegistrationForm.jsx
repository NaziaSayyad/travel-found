import React, { useEffect, useState } from "react";
import "./RegistrationForm.css"; // Link to external CSS
import { useLocation } from "react-router-dom";
import QueryForm from "../components/QueryForm";
import { BatchesPage } from "./Batches";

export const RegistrationForm = () => {
  const location = useLocation();
  const bookingData = location.state;
  console.log('booking',bookingData);
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    journeyType: "",
    batch: "",
    cost: "",
    people: ""
  });
  const options = [
    { label: "1 to 10", value: "1-10" },
    { label: "11 to 20", value: "11-20" },
    { label: "21 to 30", value: "21-30" },
    { label: "31 to 40", value: "31-40" },
    { label: "40+", value: "40+" },
  ];

  const loc = useLocation(); // Add this hook
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);
  useEffect(() => {
    // Scroll to top whenever the component mounts or location changes
    window.scrollTo(0, 0);
  }, [loc]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(e);
      
    try {
      const response = await fetch("http://localhost:8080/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result,"res");
      
      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          dob: "",
          batch: "",
          cost: "",
          people: "",
        });
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while submitting the form.");
    }
  };

  return (
    <>
      <div className="booking-container">
        <div className="costing-form-container">
          <h2>Register Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-form">
            

            </div>
            <label htmlFor="journeyType">Select Journey Type</label>
            <select
              className="input-costing"
              id="journeyType"
              name="journeyType"
              value={formData.journeyType}
              onChange={handleChange}
              required
            >
              <option value="">--Select Journey Type--</option>
              <option value="batch" disabled={bookingData?.batch === undefined}>Batch</option>
              <option value="customize">Customize</option>
             </select>

            {formData.journeyType === 'customize' && (
              <QueryForm />
             )}

           {formData.journeyType === 'batch' && (
              <>
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

            <label htmlFor="dob">Date Of Birth</label>
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
           
                <label htmlFor="people">No. of Traveler</label>
                <select
                  className="input-costing"
                  id="people"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Select No. of Traveler--</option>
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

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
                      {batchObj.mode} : ₹{batchObj.cost}
                    </option>
                  ))}
                </select>
                 <button className="costing-btn" type="submit">
              Register
            </button>

              </>
            )}

           
          </form>
        </div>

        <div className="display-booking">
          <div className="summary-section">
            <div className="tour-card">
              <img src={bookingData?.img} alt="" />
              <h3>
                {bookingData?.days} {bookingData?.start} to {bookingData?.end}{" "}
                <span>{bookingData?.Name}</span>
              </h3>
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
