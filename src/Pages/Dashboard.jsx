import React, { useEffect }  from 'react'
import UpcomingTripsBanner from '../Components/Dashboard-components/UpcomingTrips'
import LadhakTripBanner from '../Components/Dashboard-components/LadhakTripBanner'
import { useLocation } from 'react-router-dom';
import CurvedSlideshow from './UI/Curveslideshow';

const Banner = "Discover the world, one destination at a time";

const ladakh = "Ladakh Trips";
const ladakh_link = "/ldakh";
const ladakh_images = [
  {
    place: "Manali",
    price: "45,000",
    img: "https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg",

  },
  {
    place: "Leh",
    price: "40,000",
    img: "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg"
  },
  {
    place: "Pangong",
    price: "7000",
    img: "https://i.postimg.cc/yNGFDY4w/118.jpg"
  },
  {
    place: "Turtuk",
    price: "40,000",
    img: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg"
  },
  {
    place: "Nubra",
    price: "45000",
    img: "https://i.postimg.cc/gcZhYGv2/lake-489289.jpg"
  },
  
];

const Spiti = "Spiti Trips";
const Spiti_link = "/spiti";
const Spiti_images = [
  {
    place: "Manali",
    price: "45,000",
    img: "https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg",

  },
  {
    place: "Leh",
    price: "40,000",
    img: "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg"
  },
  {
    place: "Pangong",
    price: "7000",
    img: "https://i.postimg.cc/yNGFDY4w/118.jpg"
  },
  {
    place: "Turtuk",
    price: "40,000",
    img: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg"
  },
  {
    place: "Nubra",
    price: "45000",
    img: "https://i.postimg.cc/gcZhYGv2/lake-489289.jpg"
  },
 
];

const Himachal = "Himachal Trips";
const Himachal_link = "/himachal";
const Himachal_images = [
 
  {
    place: "Manali",
    price: "45,000",
    img: "https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg",

  },
  {
    place: "Leh",
    price: "40,000",
    img: "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg"
  },
  {
    place: "Pangong",
    price: "7000",
    img: "https://i.postimg.cc/yNGFDY4w/118.jpg"
  },
  {
    place: "Turtuk",
    price: "40,000",
    img: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg"
  },
  {
    place: "Nubra",
    price: "45000",
    img: "https://i.postimg.cc/gcZhYGv2/lake-489289.jpg"
  }
];
const Journey = "Journey In Frames";


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
     
          {/* Ladakh  */}
          <LadhakTripBanner
          Banner ={Banner}
          images = {ladakh_images} 
          heading={ladakh}
          link = {ladakh_link}
          />

        {/* Spiti */}
        <LadhakTripBanner 
         Banner ={Banner}
          images = {Spiti_images} 
           heading={Spiti}
          link = {Spiti_link}
        />

        {/* Himachal Pradesh */}
        <LadhakTripBanner 
        Banner ={Banner}
        images = {Himachal_images} 
         heading={Himachal}
        link = {Himachal_link}
        />

        {/* Internationa */} 
        {/* <LadhakTripBanner /> */}
{/* Journey Frames */}

<CurvedSlideshow
      Heading_Name_Curved_Slider = {Journey} /> 
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

