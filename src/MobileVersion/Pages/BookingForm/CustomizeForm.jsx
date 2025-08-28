import "./CustomizeForm.css";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";


export const CustomizeForm = ({ bookingData }) => {

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(""); // "success" | "error" | ""
    const [feedback, setFeedback] = useState("");
    const [displayprice, setdisplayprice] = useState("");

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        dob: '',
        tripDate: '',
        pax: 1,
        cost: ''
    });
    const loc = useLocation(); // Add this hook

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
        <>
            <div>
                <h2> Register Now </h2>

                <div className="Group-form-container">
                    <div className="Group-costing-form-container">

                        <form onSubmit={handleSubmit}>

                            <h1>Customize Your Trip </h1>

                            <div className="batch-item-div">
                                <label
                                    className="group-label"
                                    htmlFor="name">Full Name</label>
                                <input
                                    className="group-input"
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder='Name *'
                                    required
                                />
                            </div>


                            <div className="batch-item-div">
                                <label
                                    className="group-label"
                                    htmlFor="email">Email ID</label>
                                <input
                                    className="group-input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="batch-item-div">
                                <label
                                    className="group-label"
                                >
                                    Phone Number:  </label>
                                <input
                                    className="group-input"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone *"
                                    required
                                />

                            </div>
                            {/* Email Id  */}
                            <div className="batch-item-div">
                                <label
                                    className="group-label"
                                >  </label>
                                Email ID:
                                <input
                                    className="group-input"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Id *"
                                    required
                                />
                            </div>

                            {/* Trip Date  */}
                            <div className="batch-item-div">
                                <label
                                    className="group-label"
                                    htmlFor="batch">Trip Date:</label>
                                <input
                                    className="group-input-costing"
                                    id="date"
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

                            </div>

                            <div className="batch-item-div">
                                <label className="group-label">
                                    No. of Pax:
                                </label>
                                <select
                                    className="group-input-costing"
                                    id="pax"
                                    name="pax"
                                    value={formData.pax}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">-- No Of Pax --</option>
                                    {bookingData?.Costing?.map((costObj, index) => (
                                        <React.Fragment key={index}>
                                            <option
                                                value={`${costObj.no_packs}`}>
                                                {costObj.no_packs}
                                            </option>

                                        </React.Fragment>
                                    ))}
                                </select>

                            </div>

                           

                            {/* COST SELECTOR */}
                            <div className="batch-item-div">
                                <label
                                    className="group-label"
                                    htmlFor="cost"> Select Cost</label>
                                <select
                                    className="group-input-costing"
                                    id="cost"
                                    name="cost"
                                    value={formData.cost}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setdisplayprice(e.target.value); // update price state
                                    }}
                                    required
                                >
                                    <option value="">-- Mode & Sharing--</option>
                                    {/* show cost options dynamically */}
                                    {(() => {
                                        const selectedPax = bookingData?.Costing?.find(
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
                            </div>

                            <button
                                className="costing-btn"
                                disabled={loading}
                                style={{
                                    cursor: loading ? "not-allowed" : "pointer",
                                    width: '150px'
                                }}
                                type="submit"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
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
                        </form>
                    </div>

                    <div className="Group-display-booking">
                        <div className="Group-summary-section">
                            <div className="Group-tour-card">
                                <img src={bookingData?.img} alt="" />
                                <h3>
                                    {bookingData?.days} {bookingData?.route}{bookingData?.end}{" "}
                                </h3>
                                <h2>{bookingData?.Name}</h2>
                                <div className="Group-duration-box">{bookingData?.days}</div>
                            </div>
                            <div className="Group-price-box">
                                <p>Starting Price</p>
                                <h2>
                                    {displayprice
                                        ? `₹${displayprice}/- Final Price`  // show selected price
                                        : `₹${bookingData?.newprice}/- per person` // fallback default
                                    }
                                </h2>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
