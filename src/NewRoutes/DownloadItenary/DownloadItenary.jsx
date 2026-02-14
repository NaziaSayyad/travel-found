import React, { useState } from "react";
import axios from "axios";

export default function DownloadItineraryModal({ open, setOpen, onVerified }) {
  const [step, setStep] = useState("form"); // form | otp | verified
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    otp: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Send OTP
  const sendOtp = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:8080/send-otp", {
        phone: formData.phone
      });

      setStep("otp");
    } catch (error) {
      alert("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!formData.otp) {
      alert("Enter OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8080/verify-otp",
        {
          ...formData,
          itineraryId: "DELHI-MANALI" // change dynamically if needed
        }
      );

      if (res.data.success) {
        setStep("verified");

        setTimeout(() => {
          onVerified();   // 👈 CALLS YOUR downloadPDF()
          handleClose();
        }, 1500);
      } else {
        alert("Invalid OTP");
      }

    } catch (error) {
      alert("Verification failed");
    } finally {
      setLoading(false);
    }
  };

  // Close & Reset
  const handleClose = () => {
    setOpen(false);
    setStep("form");
    setFormData({
      name: "",
      email: "",
      phone: "",
      otp: ""
    });
  };

  if (!open) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>

        {/* FORM STEP */}
        {step === "form" && (
          <>
            <h2>Download Itinerary</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
            />

            <button
              onClick={sendOtp}
              style={buttonStyle}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {/* OTP STEP */}
        {step === "otp" && (
          <>
            <h2>Enter OTP</h2>

            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              style={inputStyle}
            />

            <button
              onClick={verifyOtp}
              style={buttonStyle}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {/* VERIFIED STEP */}
        {step === "verified" && (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "green" }}>✔ Verified</h2>
            <p>Your download is starting...</p>
          </div>
        )}

        {/* Close Button */}
        {step !== "verified" && (
          <button onClick={handleClose} style={closeStyle}>
            ✕
          </button>
        )}

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const modalStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  width: "350px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  position: "relative"
};

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#f5a623",
  color: "white",
  cursor: "pointer"
};

const closeStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "16px"
};
