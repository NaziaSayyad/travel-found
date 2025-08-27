import React, { useEffect, useState } from "react";
import "./RegistrationForm.css"; // Link to external CSS
import { useLocation } from "react-router-dom";
import QueryForm from "./QueryForm";

export const RegistrationForm = () => {
  const location = useLocation();

  const bookingData = location.state?.data || {};
  console.log("booking Details", bookingData);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
    cost: "",
    tripdate: "",
    mode: ""
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
      behavior: "instant",
    });
  }, []);
  useEffect(() => {
    // Scroll to top whenever the component mounts or location changes
    window.scrollTo(0, 0);
  }, [loc]);


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
      const response = await fetch("http://localhost:8080/booking", {
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
        setFormData({ name: "", email: "", phone: "", batch: "", cost: "",  tripdate: "", mode: "" }); // clear form
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
    <>
      <div className="booking-container">
        <h2>Register Now</h2>

        {bookingData.Batches ? (
          <>
            <div className="parent-booking-div">
              <div className="costing-form-container">

                <form onSubmit={handleSubmit}>

                  <h1>Book Your Batch </h1>

                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder='Name *'
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
                  <label>
                    Phone Number:
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone *"
                      required
                    />
                  </label>
                  <label>
                    Email ID:
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Id *"
                      required
                    /> </label>

                
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
                    {bookingData?.
                      Batches?.map((batchObj, index) => (
                        <option key={index} value={batchObj.batch}>
                          {batchObj.batch} ({batchObj.start} - {batchObj.end})
                        </option>
                      ))}
                  </select>

                  {/* Mode of Transport  */}
                  <label>
                    Mode
                    <select
                      className="input-costing"
                      id="mode"
                      name="mode"
                      value={formData.mode}
                      onChange={handleChange}
                      required
                    >
                      <option value="">--Select Mode --</option>
                      {bookingData?.Costing?.map((costObj, index) => (
                        <React.Fragment key={index}>
                          <option
                            value={`${costObj.mode}`}>
                            {costObj.mode}
                          </option>

                        </React.Fragment>
                      ))}
                    </select>
                  </label>

                  {/* COST SELECTOR */}
                  <label htmlFor="cost">Select Cost</label>
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
                    {(() => {
                      const selectedmode = bookingData?.Costing?.find(
                        (c) => String(c.mode) === String(formData.mode)
                      );

                      if (!selectedmode) return null;

                      return (
                        <>
                          {selectedmode.doubleSharing !== "-" && (
                            <option value={selectedmode.doubleSharing}>
                              Double Sharing (₹{selectedmode.doubleSharing})
                            </option>
                          )}
                          {selectedmode.tripleSharing !== "-" && (
                            <option value={selectedmode.tripleSharing}>
                              Triple Sharing (₹{selectedmode.tripleSharing})
                            </option>
                          )}
                        </>
                      );
                    })()}

                  </select>

                  <button
                    className="costing-btn"
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


              <div className="display-booking">
                <div className="summary-section">
                  <div className="tour-card">
                    <img src={bookingData?.img} alt="" />
                    <h3>
                      {bookingData?.days} {bookingData?.route}{bookingData?.end}{" "}

                    </h3>
                    <h2>{bookingData?.Name}</h2>
                    <div className="duration-box">{bookingData?.days}</div>
                  </div>

                  <div className="price-box">
                    <p>Starting Price</p>
                    <h2>
                      {displayprice
                        ? `₹${displayprice}/- Final Price`  // show selected price
                        : `₹${bookingData?.newprice}/- per person` // fallback default
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
          </>
        )

          : (
            <>
              <QueryForm data={bookingData} />
            </>
          )}




      </div>
    </>
  );
};
