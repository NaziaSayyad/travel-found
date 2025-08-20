import InfoCard from "../../../../Pages/Ladakh/Itenaries/components/InfoCard";
import { Exclusions } from "../../../../Pages/Ladakh/Itenaries/Subcomponents/Exclusions";
import { Inclusions } from "../../../../Pages/Ladakh/Itenaries/Subcomponents/Inclusions";
import { Itenaries } from "../../../../Pages/Ladakh/Itenaries/Subcomponents/Itenaries";
import { OtherInfo } from "../../../../Pages/Ladakh/Itenaries/Subcomponents/OtherInfo";
import { Overview } from "../../../../Pages/Ladakh/Itenaries/Subcomponents/Overview";
import { Route } from "../../../../Pages/Ladakh/Itenaries/Subcomponents/Route";
import { MobileInclusions } from "./MobileInclusions";
import { MobileInfoCard } from "./MobileInfoCard";
import "./MobileTabNavigation.css";
import React, { useState, useRef } from "react";

export const MobileTabNavigation = ({
    Name,
    Inclusion,
    Exclusion,
    Itenary,
    Overviews,
    route,
    costing,
    batches,
    start,
    end,
    nights
}) => {
    const tabs = [
        { Name: "Overview", id: "overview", ref: useRef(null) },
        { Name: "Itinerary", id: "itinerary", ref: useRef(null) },
        { Name: "Inclusions", id: "inclusions", ref: useRef(null) },
        { Name: "Exclusions", id: "exclusions", ref: useRef(null) },
        { Name: "Other Info", id: "other-info", ref: useRef(null) },
    ];
    const [activeTab, setActiveTab] = useState("overview");

    const [isFixed, setIsFixed] = useState(false);
    const infoCardRef = useRef(null);

    const handleTabClick = (id) => {
        setActiveTab(id);
        setIsFixed(true);
        const element = document.getElementById(id);

        if (element) {
            const navHeight = 60;
            const tabHeight = 70;
            const infoCardHeight = infoCardRef.current ? infoCardRef.current.offsetHeight : 0;
            const totalOffset = navHeight + tabHeight + infoCardHeight;

            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - totalOffset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* <h1> Mobile TabNavigation </h1> */}
            <div className="mobile-tab-container">
                {tabs?.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab?.Name}
                    </div>
                ))}
                <div
                    className="mobile-underline"
                    style={{
                        left: `${(tabs?.findIndex((tab) => tab.id === activeTab) / tabs.length) * 100}%`,
                        width: `${100 / tabs.length}%`,
                    }}
                ></div>
            </div>

            <div
                ref={infoCardRef}
                className={`mobile-info-card-container ${isFixed ? 'fixed' : ''}`}
                style={{ marginTop: '50px' }}
            >
                <MobileInfoCard
                    pick={start} Drop={end} Nights={nights}
                />
                {/* <InfoCard 
                pick={start} Drop={end} Nights={nights} 
                /> */}
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
                    <MobileInclusions data={Inclusion} />
                </div>

                <div id="exclusions" ref={tabs[3].ref} className="section">
                    <Exclusions data={Exclusion} />
                </div>

                <div id="other-info" ref={tabs[4].ref} className="section">
                    <h1>  Other Info </h1>
                    {/* <OtherInfo /> */}
                </div>

            </div>

        </>
    )
}