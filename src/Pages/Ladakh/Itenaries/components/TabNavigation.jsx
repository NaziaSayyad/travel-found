import React, { useState, useRef } from "react";
import "./TabNavigation.css";
import { Overview } from "../Subcomponents/Overview";
import { Itenaries } from "../Subcomponents/Itenaries";
import { Exclusions } from "../Subcomponents/Exclusions";
import { Inclusions } from "../Subcomponents/Inclusions";
import { OtherInfo } from "../Subcomponents/OtherInfo";

const TabNavigation = () => {
  const tabs = [
    { name: "Overview & Highlights", id: "overview", ref: useRef(null) },
    { name: "Itinerary", id: "itinerary", ref: useRef(null) },
    { name: "Inclusions", id: "inclusions", ref: useRef(null) },
    { name: "Exclusions", id: "exclusions", ref: useRef(null) },
    { name: "Other Info", id: "other-info", ref: useRef(null) },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (id) => {
    setActiveTab(id);
  
    const tabRef = tabs.find((tab) => tab.id === id)?.ref;
  
    if (tabRef?.current) {
      const navbar = document.querySelector(".tab-container");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const yOffset = -navbarHeight - 20; // Adjusting offset
  
      const y = tabRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }; 

  return (
    <>
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

      <div>
        <div ref={tabs[0].ref}><Overview /></div>
        <div ref={tabs[1].ref}><Itenaries /></div>
        <div ref={tabs[2].ref}><Inclusions /></div>
        <div ref={tabs[3].ref}><Exclusions /></div>
        <div ref={tabs[4].ref}><OtherInfo /></div>
      </div>
    </>
  );
};

export default TabNavigation;
