import React, { useState, useEffect } from "react";
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

  // -----------------------------
  // Reset & Close
  // -----------------------------
  const handleClose = () => {
    if (step === "verified") return;

    setOpen(false);
    setStep("form");
    setFormData({
      name: "",
      email: "",
      phone: "",
      otp: ""
    });
  };

  // -----------------------------
  // ESC key close
  // -----------------------------
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, step]);

  // -----------------------------
  // Handle input change
  // -----------------------------
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // -----------------------------
  // Send OTP
  // -----------------------------
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

  // -----------------------------
  // Verify OTP
  // -----------------------------
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
          itineraryId: "DELHI-MANALI"
        }
      );

      if (res.data.success) {
        setStep("verified");

        // setTimeout(async () => {
          await onVerified();   // 🔥 wait for download to finish
          setOpen(false);       // 🔥 close AFTER download
        // }, 1200);
      }
      else {
        alert("Invalid OTP");
      }

    } catch (error) {
      alert("Verification failed");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      style={overlayStyle}
      onClick={handleClose}
    >
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >

        {/* X Button */}
        {step !== "verified" && (
          <button
            onClick={handleClose}
            style={closeStyle}
          >
            &times;
          </button>
        )}

        {/* FORM STEP */}
        {step === "form" && (
          <>
            <h2 style={titleStyle}>Download Itinerary</h2>

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
            <h2 style={titleStyle}>Enter OTP</h2>

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

      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

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
  zIndex: 9999
};

const modalStyle = {
  background: "#ffffff",
  padding: "30px 25px",
  borderRadius: "12px",
  width: "360px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  position: "relative",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
};

const titleStyle = {
  margin: 0,
  marginBottom: "10px"
};

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

const buttonStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#f5a623",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold"
};

const closeStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  color: "red",
  border: "1px solid black",
  background: "#ffffff",
  fontSize: "20px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
};
