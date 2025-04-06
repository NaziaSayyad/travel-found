import React, { useState, useRef, useEffect } from "react";
import "./TabNavigation.css";
import axios from "axios";
import { Overview } from "../Subcomponents/Overview";
import { Itenaries } from "../Subcomponents/Itenaries";
import { Exclusions } from "../Subcomponents/Exclusions";
import { Inclusions } from "../Subcomponents/Inclusions";
import { OtherInfo } from "../Subcomponents/OtherInfo";
import { Route } from "../Subcomponents/Route";

export const TabNavigation = ({Name,Inclustion,Exclusion,Itenary,Overviews,route }) => {
  const tabs = [
    { Name: "Overview & Highlights", id: "overview", ref: useRef(null) },
    { Name: "Itinerary", id: "itinerary", ref: useRef(null)},
    { Name: "Inclusions", id: "Inclusions", ref: useRef(null)},
    { Name: "Exclusions", id: "exclusions", ref: useRef(null)},
    { Name: "Other Info", id: "other-info", ref: useRef(null)},
    
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
            {tab.Name}
          </div>
        ))}
        <div className="underline" style={{ left: `${tabs.findIndex(tab => tab.id === activeTab) * 20}%` }}></div>
      </div>
      <div>
        <h2 style={{marginLeft : '5%'}}> Overview  </h2>

        <div style={{textAlign : 'left',marginLeft : '2%'}}> <Route data ={route}/> </div>
        <div ref={tabs[0].ref}> <Overview data={Overviews} /> </div>
        <div ref={tabs[1].ref}> <Itenaries data={Itenary} /> </div>
        <div ref={tabs[2].ref}> <Inclusions data={Inclustion} /></div>
        <div ref={tabs[3].ref}><Exclusions data={Exclusion} /></div>
        <div ref={tabs[4].ref}><OtherInfo /></div>
        
      </div>
    </>
  );
};

