import React, { useState } from "react";
import "./TabNavigation.css";

const TabNavigation = () => {
  const tabs = [
    { name: "Overview & Highlights", id: "overview" },
    { name: "Itinerary", id: "itinerary" },
    { name: "Inclusions", id: "inclusions" },
    { name: "Exclusions", id: "exclusions" },
    { name: "Other Info", id: "other-info" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.name}
        </div>
      ))}
      <div className="underline" style={{ left: `${tabs.findIndex(tab => tab.id === activeTab) * 20}%` }}></div>
    </div>
  );
};

export default TabNavigation;
