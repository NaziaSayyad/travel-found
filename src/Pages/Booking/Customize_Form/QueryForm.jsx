import React, { useState } from 'react';
import './QueryForm.css';

const QueryForm = ({ data }) => {

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    dob: '',
    tripDate: '',
    pax: 1,
    cost: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [feedback, setFeedback] = useState("");
  const [displayprice, setdisplayprice] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");

    // simple frontend validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setFeedback("Please enter a valid email address");
      setStatus("error");
      setLoading(false)
      return;
    }

    setLoading(true);
    setFeedback("");
    setStatus("");

    // ✅ phone validation: only numbers + 10 digits
    if (!/^\d{10}$/.test(formData.phone)) {
      setFeedback("Please enter a valid 10-digit phone number");
      setStatus("error");
      setLoading(false)
      return;
    }

    setLoading(true);
    setFeedback("");
    setStatus("");
    try {
      const response = await fetch("https://travelfond-backend.onrender.com/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // now sending name, email, phone, message
      });

      const bookingdata = await response.json();

      if (response.ok) {
        setFeedback("✅ Successfully Submitted!");
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", tripDate: "", pax: "", cost: "" }); // clear form
      } else {
        setFeedback(bookingdata.error || "Something went wrong");
        setStatus("error");
      }
    } catch (error) {
      setFeedback("❌ Failed to connect. Try again later.");
      setStatus("error");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="query-form-container">

      <div className="parent-booking-div">
        <div className='costing-form-container'>
          <h2>Customise Your Trip</h2>

          <form onSubmit={handleSubmit}>
            <label className='query-form-label'>
              Full Name:
              <input
              className='query-form-input'
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Name *'
                required
              />
            </label>

            <label className='query-form-label'>
              Phone Number:
              <input
              className='query-form-input'
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone *"
                required
              />
            </label>

            <label className='query-form-label'>
              Email ID:
              <input
              className='query-form-input'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Id *"
                required
              /> </label>
            <label className='query-form-label'>
              Trip Date:
              <input
              className='query-form-input'
                type="date"
                name="tripDate"
                value={formData.tripDate}
                onChange={handleChange}
                required
                placeholder="Select Date"
                style={{
                  color: 'darkblue',
                  fontSize: '14px',
                  fontFamily: 'initial',
                  cursor: 'pointer',
                  '&::-webkit-datetime-edit-text': { color: 'transparent' },
                  '&::-webkit-calendar-picker-indicator': { cursor: 'pointer' }
                }}
              />
            </label>

            <label className='query-form-label'>
              No. of Pax:
              <select
                className="input-costing"
                id="pax"
                name="pax"
                value={formData.pax}
                onChange={handleChange}
                required
              >
                <option value="">--Select No Of Pax --</option>
                {data?.Costing?.map((costObj, index) => (
                  <React.Fragment key={index}>
                    <option
                      value={`${costObj.no_packs}`}>
                      {costObj.no_packs}
                    </option>

                  </React.Fragment>
                ))}
              </select>
            </label>

            {/* COST SELECTOR */}
            <label className='query-form-label' htmlFor="cost">Select Cost</label>
            <select
              className="input-costing"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={(e) => {
                handleChange(e);
                setdisplayprice(e.target.value); // update price state
              }}
              required
            >
              <option value="">--Select Mode & Sharing--</option>

              {/* show cost options dynamically */}
              {(() => {
                const selectedPax = data?.Costing?.find(
                  (c) => String(c.no_packs) === String(formData.pax)
                );

                if (!selectedPax) return null;

                return (
                  <>
                    {selectedPax.doubleSharing !== "-" && (
                      <option value={selectedPax.doubleSharing}>
                        Double Sharing (₹{selectedPax.doubleSharing})
                      </option>
                    )}
                    {selectedPax.tripleSharing !== "-" && (
                      <option value={selectedPax.tripleSharing}>
                        Triple Sharing (₹{selectedPax.tripleSharing})
                      </option>
                    )}
                  </>
                );
              })()}

            </select>
            <button
              className='query-btn'
              disabled={loading}
              style={{
                cursor: loading ? "not-allowed" : "pointer"
              }}
              type="submit"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        {/* Display Section  */}
        <div className="display-booking">
          <div className="summary-section">
            <div className="tour-card">
              <img src={data?.img} alt="" />
              <h3>
                {data?.days} {data?.route}{data?.end}{" "}

              </h3>
              <h2>{data?.Name}</h2>
              <div className="duration-box">{data?.days}</div>
            </div>

            <div className="price-box">
              <p>Starting Price</p>
              <h2>
                {displayprice
                  ? `₹${displayprice}/- Final Price`  // show selected price
                  : `₹${data?.newprice}/- per person` // fallback default
                }
                
              </h2>
            </div>

            {feedback && (
              <p
                style={{
                  marginTop: "10px",
                  color: status === "success" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {feedback}
              </p>
            )}

          </div>
        </div>






      </div>

    </div>
  );
};

export default QueryForm;
