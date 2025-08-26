import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple frontend validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setLoading(true);
    setMessage("");
    setStatus("");

    try {
      const response = await fetch("https://travelfond-backend.onrender.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Successfully Subscribed!");
        setStatus("success");
        setEmail(""); // clear input
      } else {
        setMessage(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch (error) {
      setMessage("❌ Failed to connect. Try again later.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        // background: "#1976d2",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "350px",
        margin: "auto",
      }}
    >
      <h3 style={{ color: "white" }}>News Letter</h3>
      <p style={{ color: "white" }}>Subscribe to get the latest travel updates.</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #333",
          }}
        />

        <button
          type="submit"
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
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: "10px",
            color: status === "success" ? "lightgreen" : "red",
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
