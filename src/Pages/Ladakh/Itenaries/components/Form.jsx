import "./SidebarForm.css";
import { FaUser, FaPhone, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import React, { useState } from "react";
export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple frontend validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setFeedback("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setLoading(true);
    setFeedback("");
    setStatus("");

    // ✅ phone validation: only numbers + 10 digits
    if (!/^\d{10}$/.test(formData.phone)) {
      setFeedback("Please enter a valid 10-digit phone number");
      setStatus("error");
      return;
    }

    setLoading(true);
    setFeedback("");
    setStatus("");

    try {
      const response = await fetch("http://localhost:8080/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // now sending name, email, phone, message
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback("✅ Successfully Submitted!");
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" }); // clear form
      } else {
        setFeedback(data.error || "Something went wrong");
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
      <div className="form-box">
        <h2> <FaPhoneAlt style={{ marginLeft: '5px', marginRight: '5px' }} /> Connect with  Expert  </h2>
        <p>Allow Us to Understand You Better!  </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i><FaUser /></i>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
            />
          </div>

          <div className="input-group">
            <i><FaPhoneAlt /></i>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone *"
              required />
          </div>

          <div className="input-group">
            <i><FaEnvelope /></i>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Id *"
              required
            />
          </div>

          <button type="submit"
            disabled={loading}
             className="submit-btn"
           
            style={{
              cursor: loading ? "not-allowed" : "pointer",
            }}
            >
               {loading ? "Submitting..." : "Submit"}
            </button>

        </form>
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
    </>
  )
}