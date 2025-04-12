import React, { useState, useRef } from "react";
import "./TabNavigation.css";
import { Overview } from "../Subcomponents/Overview";
import { Itenaries } from "../Subcomponents/Itenaries";
import { Exclusions } from "../Subcomponents/Exclusions";
import { Inclusions } from "../Subcomponents/Inclusions";
import { OtherInfo } from "../Subcomponents/OtherInfo";
import { Route } from "../Subcomponents/Route";
import { CostingPage } from "../Subcomponents/Costing";
import { BatchesPage } from "../Subcomponents/Batches";

export const TabNavigation = ({
  Name,
  Inclustion,
  Exclusion,
  Itenary,
  Overviews,
  route,
  costing,
  batches,
  start,
  end,
}) => {
  const tabs = [
    { Name: "Overview", id: "overview", ref: useRef(null) },
    { Name: "Itinerary", id: "itinerary", ref: useRef(null) },
    { Name: "Inclusions", id: "inclusions", ref: useRef(null) },
    { Name: "Exclusions", id: "exclusions", ref: useRef(null) },
    { Name: "Other Info", id: "other-info", ref: useRef(null) },
    { Name: "Batches", id: "batches", ref: useRef(null) },
    { Name: "Costing", id: "costing", ref: useRef(null) },
  ];

  const [activeTab, setActiveTab] = useState("overview");

 const handleTabClick = (id) => {
  setActiveTab(id);
  const element = document.getElementById(id);
  
  if (element) {
    const navHeight = 100; // Height of your main navigation bar
    const tabHeight = 70;  // Height of your tab container
    const totalOffset = navHeight + tabHeight;
    
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - totalOffset,
      behavior: 'smooth'
    });
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
            {tab.Name}
          </div>
        ))}
        <div
          className="underline"
          style={{
            left: `${(tabs.findIndex((tab) => tab.id === activeTab) / tabs.length) * 100}%`,
            width: `${100 / tabs.length}%`,
          }}
        ></div>
      </div>

      <div>
        <div id="overview" ref={tabs[0].ref} className="section">
          <h2 style={{ marginLeft: "5%" }}>Overview</h2>
          <div style={{ textAlign: "left", marginLeft: "2%" }}>
            <Route data={route} />
          </div>
          <Overview data={Overviews} />
        </div>

        <div id="itinerary" ref={tabs[1].ref} className="section">
          <Itenaries data={Itenary} />
        </div>

        <div id="inclusions" ref={tabs[2].ref} className="section">
          <Inclusions data={Inclustion} />
        </div>

        <div id="exclusions" ref={tabs[3].ref} className="section">
          <Exclusions data={Exclusion} />
        </div>

        <div id="other-info" ref={tabs[4].ref} className="section">
          <OtherInfo />
        </div>

        <div id="batches" ref={tabs[5].ref} className="section">
          <BatchesPage data={batches} start={start} end={end} />
        </div>

        <div id="costing" ref={tabs[6].ref} className="section">
          <CostingPage data={costing} />
        </div>
      </div>
    </>
  );
};
