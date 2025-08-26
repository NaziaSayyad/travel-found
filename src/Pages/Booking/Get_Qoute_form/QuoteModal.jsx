import React, { useEffect, useState } from "react";
import "./QuoteModal.css"
export default function QuoteModal({ onClose }) {
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
    useEffect(() => {
    // Add class when modal opens
    document.body.classList.add("quote-modal-open");

    // Cleanup: remove class when modal closes/unmounts
    return () => {
      document.body.classList.remove("quote-modal-open");
    };
  }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            const response = await fetch("https://travelfond-backend.onrender.com/enquiry", {
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
        <div className="quote-modal-overlay">
            <div className="quote-modal-box">
                {/* Close Button */}
                <button className="quote-modal-close" onClick={onClose}>
                    ✕
                </button>

                <div className="quote-modal-body">
                    {/* Left section */}
                    <div className="quote-modal-left">
                        {/* <img src="/consult.png" alt="Consultation" className="quote-modal-img" /> */}
                        <ul>
                            <li>✅ Free Consultation by Experts</li>
                            <li>✅ No Annoying Spam Calls</li>
                            <li>✅ Authentic Destination Insights</li>
                            <li>✅ Your Data is Safe with Us</li>
                        </ul>
                        {/* <img
                            src=""
                            alt="kl"
                        /> */}
                    </div>

                    {/* Right section */}
                    <div className="quote-modal-right">
                        <h2>Where do you want to go next?</h2>
                        <p>Make your move, fill out your details now!</p>

                        <form
                            onSubmit={handleSubmit}
                            className="quote-modal-form">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name *"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Id *"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone *"
                                required />


                            <textarea name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                            />
                            <button type="submit"
                                disabled={loading}
                                style={{
                                    background: loading ? "#aaa" : "#f0a500",
                                    color: "white",
                                    border: "none",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
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
                </div>
            </div>
        </div>
    );
}
