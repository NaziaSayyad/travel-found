import { useEffect, useState } from "react";
import "./LadakhTrips.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "../../Loading/Loading";
import Carousel from "../UI/Layout";
import FilterComponent from "../Ladakh/Itenaries/components/FilterComponent";
import { Mobile_TravelCarousel } from "../../MobileVersion/Pages/Mobile_TravelCarousel";
import { TravelCarousel } from "../UI/Swiper";
import { useBreakpoint } from "../../Responsive-component/UseMobile";

const images = [
  {
    url: "https://i.ibb.co/My73LbQH/pexels-akshay-salunke-1250693538-23522680.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.ibb.co/yDYdkf9/lake-489289.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.ibb.co/gZ8YhxLc/pangong-tso-7228599.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
];

const API = 'https://travelfond-backend.onrender.com/ladakh';

export const Ladakh_New_Trips = () => {

    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const [cityList, setCityList] = useState([]);
    const [SLM, setSLM] = useState([]);
    const [SL, setSL] = useState([]);
    const [LL, setLL] = useState([]);
    const [data, setData] = useState([]);
    const { isMobile, isTablet, isDesktop } = useBreakpoint(768, 1200);
  
    const [filters, setFilters] = useState({
        route: "",
        budget: "",
        customize: "",
        cities: []
    });
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
    const fetchdata = async () => {
      try {
        const res = await axios.get(API);
        setData(res.data);
        console.log(res.data);


        // Extract unique cities from all Route arrays
        const allCities = res.data.flatMap(trip => trip.Route || []);
        const uniqueCities = [...new Set(allCities)];
        setCityList(uniqueCities);

        setSLM(res.data.filter(trip => trip.code === "SLM"));
        setSL(res.data.filter(trip => trip.code === "SL"));
        setLL(res.data.filter(trip => trip.code === "LL"));
       
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
  }, [])
  
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location]);
    
    useEffect(() => {
        // Scroll to top whenever the component mounts or location changes
        window.scrollTo(0, 0);
    }, [location]);


    const applyFilters = (newFilters) => {
    setFilters(newFilters);

    if (!data) return;

    const filtered = data.filter((trip) => {
      const nightsNumber = parseInt(trip.nights?.split("N")[0]);

      return (
        (!newFilters.nights ||
          (newFilters.nights === "10N/11D"
            ? nightsNumber >= 8
            : nightsNumber === parseInt(newFilters.nights))) &&
        (!newFilters.route || trip.route === newFilters.route) &&
        (!newFilters.customize || trip.customize === newFilters.customize) &&
        (!newFilters.leh || trip.leh === newFilters.leh) &&
        (!newFilters.turtuk || trip.turtuk === newFilters.turtuk) &&
        (!newFilters.hanleUmlingla || trip.leh === newFilters.leh) &&

        (!newFilters.cities.length ||
          newFilters.cities.some(city => trip.Route?.includes(city)))

      );
    });

    setSLM(filtered.filter(trip => trip.code === "SLM"));
    setSL(filtered.filter(trip => trip.code === "SL"));
    setLL(filtered.filter(trip => trip.code === "LL"));
};
useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


    const isFiltered = filters.nights || filters.route.length || filters.budget || filters.cities.length;
//     if (loading) {
//     return <Loading />
//   }

    return (
        <>
        <div> 
            <Carousel images={images}/>
        </div>
            <h1 style={{textAlign : 'center'}}> Ladakh New Trips </h1>

      <FilterComponent onFilterChange={applyFilters} cityList={cityList} />

                <div style={{
                    marginBottom : '2%',
                    // border : '2px solid teal'
                }}>
                 
                 <div  id="group" className="anchor-section">
                    {(!isFiltered || SLM.length > 0) && (
                   <>
                     <h2  className="trips-define">Group Trips </h2>
                     {
                       isMobile && <Mobile_TravelCarousel data={SLM} link={'/ladakh'} />}
                     {isDesktop && <TravelCarousel data={SLM} link={'/ladakh'} />
                     }
           
                   </>
                 )}
                 </div>
           
                 <div id="customize" className="anchor-section">
                    {(!isFiltered || SL.length > 0) && (
                   <>
                     <h2  className="trips-define">Customize Trips </h2>
                     {
                       isMobile && <Mobile_TravelCarousel data={SL} link={'/ladakh'} />}
                     {isDesktop && <TravelCarousel data={SL} link={'/ladakh'} />
                     }
                   </>
                 )}
                 </div>
           
                <div id="luxurious" className="anchor-section">
                     {(!isFiltered || LL.length > 0) && (
                   <>
                     <h2   className="trips-define">Luxurious Ladakh  </h2>
                     {
                       isMobile && <Mobile_TravelCarousel data={LL} link={'/ladakh'} />}
                     {isDesktop && <TravelCarousel data={LL} link={'/ladakh'} />
                     }
                   </>
                 )}
                </div>

                </div>
        </>
    )
}