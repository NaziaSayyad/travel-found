import React, { useEffect }  from 'react'
import UpcomingTripsBanner from '../Components/Dashboard-components/UpcomingTrips'
import LadhakTripBanner from '../Components/Dashboard-components/LadhakTripBanner'
import { useLocation } from 'react-router-dom';

export const  Dashboard = () => {
   useEffect(() => {
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'instant'
          });
      }, []);
      const location = useLocation(); // Add this hook

        useEffect(() => {
        // Scroll to top whenever the component mounts or location changes
        window.scrollTo(0, 0);
    }, [location]);
    
    return (
      <div>
        <h1> Dashboard </h1>
        
    <h1> Vedio in background </h1>
        <UpcomingTripsBanner />
     
     <LadhakTripBanner />
        
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
        <h1> Dashboard </h1>
      </div>
    )
  }

