import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import { TravelCarousel } from "../UI/Swiper";
import { useBreakpoint } from "../../Responsive-component/UseMobile";
import { Mobile_TravelCarousel } from "../../MobileVersion/Pages/Mobile_TravelCarousel";

export const City = () => {
  const { id, city_id } = useParams();
  const [loading, setLoading] = useState(true);

  const [city, setcity] = useState();
  const [HP, setHP] = useState();
  const location = useLocation();
  const { isMobile, isTablet, isDesktop } = useBreakpoint(820, 1200, 1024);

  const API = `https://travelfond-backend.onrender.com/weekend/${id}/city/${city_id}`;

  // Fetch API 
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(API);
        console.log(res.data, " DATA");


        console.log(res.data.city, "city");
        setcity(res.data.city);
        const newdata = res.data.city.itenaries;
        // console.log(newdata,"NEW");
        setHP(newdata.filter(trip => trip.code === "HP"));


        // setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);

      } finally {
        // setLoading(false);
      }
    };
    fetchdata();
  }, [id]);

  // Location
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        const yOffset = -80; // adjust if you have a fixed navbar
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // aligns the top of the div with the top of the viewport
      });
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  useEffect(() => {
    // Scroll to top whenever the component mounts or location changes
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <>
      <div style={{ marginTop: '15%' }}>
        <h1>
          Itenaries Page</h1>

        <h4> {city?.City}</h4>
        <img
          style={{
            width: '200px',
            height: '200px'
          }}
          src={city?.image}
        />

        <h3> Itenaries Data Will Come Here</h3>
        {
          isMobile && 
            <Mobile_TravelCarousel 
            data={HP}
            link={'/ladakh'} />
        }
        {isDesktop &&
          <TravelCarousel
            data={HP}
            link={'/ladakh'}
          />
        }
        {isTablet &&
          <TravelCarousel
            data={HP}
            link={'/ladakh'}
          />
        }
      </div>
    </>
  )
}