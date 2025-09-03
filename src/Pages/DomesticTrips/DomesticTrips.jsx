import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useBreakpoint } from "../../Responsive-component/UseMobile";
import { LadakhPage } from "../../MobileVersion/Pages/Ladakh_Mobile";
import Carousel from "../UI/Layout";
import "./DomesticTrips.css";
import { Mobile_TravelCarousel } from "../../MobileVersion/Pages/Mobile_TravelCarousel";
import { TravelCarousel } from "../UI/Swiper";
const images = [
  {
    url: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.ibb.co/cXDPsY8j/1-4.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.ibb.co/FLVKvs0B/1-15.jpg",
    title: "Ladakh Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
];

const sec_API = 'https://travelfond-backend.onrender.com/weekend'
// 'http://localhost:8080/weekend';
// https://travelfond-backend.onrender.com/weekend
const  DomesticTrips = () =>{
    const [data,setdata] = useState();
    const [loading,setLoading] = useState(true);
    const [Data, setData] = useState([]);
   const [cityList, setCityList] = useState([]);
   const {id} = useParams();
    const { isMobile, isTablet, isDesktop } = useBreakpoint(820, 1200, 1024);
    const [HM, setHM] = useState([]);
  const [RJ, setRJ] = useState([]);
  const [UK, setUK] = useState([]);
  const API = `https://travelfond-backend.onrender.com/domestic/${id}`;
// https://travelfondbackend-production.up.railway.app/ladakh
  const [filters, setFilters] = useState({
    route: "",
    budget: "",
    customize: "",
    cities: []
  });

 const location = useLocation(); // Add this hook

   useEffect(() => {
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'instant'
          });
      }, []);   

   useEffect(() => {
              // Scroll to top whenever the component mounts or location changes
              window.scrollTo(0, 0);
          }, [location]); 
     
    useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(sec_API);
        setData(res.data);
        console.log(res.data);


        // Extract unique cities from all Route arrays
        const allCities = res.data.flatMap(trip => trip.Route || []);
        const uniqueCities = [...new Set(allCities)];
        setCityList(uniqueCities);

        setHM(res.data.filter(trip => trip.code === "HM"));
        setRJ(res.data.filter(trip => trip.code === "RJ"));
        setUK(res.data.filter(trip => trip.code === "UK"));

      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
  }, [])

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
        (!newFilters.hanleUmlinHMa || trip.leh === newFilters.leh) &&

        (!newFilters.cities.length ||
          newFilters.cities.some(city => trip.Route?.includes(city)))

      );
    });

    setHM(filtered.filter(trip => trip.code === "HM"));
    setRJ(filtered.filter(trip => trip.code === "RJ"));
    setUK(filtered.filter(trip => trip.code === "UK"));
  };
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


 useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(API);
        console.log(res.data.State,"fe");
        console.log(res.data);
        
        setdata(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);
const isFiltered = filters.nights || filters.route.length || filters.budget || filters.cities.length;
  
    return(
        <>
        <div>
           {isMobile && <LadakhPage />}
          {isDesktop && <Carousel images={images} />}
        </div>
      {/* <div style={{marginTop : '1%'}}>

         <h4>  weekend Trips   </h4>
       <h1> state :  {data?.State}</h1>
       <div className="weekend-container">
        {
          data?.City?.map((el,index) => (
        <h4 key={index}> {el}</h4>
        ))
        }
       </div>
      </div> */}
       <div style={{
               marginBottom: '2%',
               // border : '2px solid teal'
             }}>
       
               <div id="group" className="anchor-section">
                 {(!isFiltered || HM.length > 0) && (
                   <>
                     <h2 className="trips-define">Himachal Pradesh </h2>
                     {isMobile && <Mobile_TravelCarousel data={HM} link={'/ladakh'} />}
                     {isDesktop && <TravelCarousel data={HM} link={'/ladakh'} />}
                     {isTablet && <TravelCarousel data={HM} link={'/ladakh'} />}
       
       
                   </>
                 )}
               </div>
       
               <div id="customize" className="anchor-section-customize">
                 {(!isFiltered || RJ.length > 0) && (
                   <>
                     <h2 className="trips-define"> Rajasthan  </h2>
                     {isMobile && <Mobile_TravelCarousel data={RJ} link={'/ladakh'} />}
                     {isDesktop && <TravelCarousel data={RJ} link={'/ladakh'} />}
                     {isTablet && <TravelCarousel data={RJ} link={'/ladakh'} />}
       
                   </>
                 )}
               </div>
       
               <div id="luxurious" className="anchor-section-luxurious">
                 {(!isFiltered || UK.length > 0) && (
                   <>
                     <h2 className="trips-define"> Uttrakhand  </h2>
                     {isMobile && <Mobile_TravelCarousel data={UK} link={'/ladakh'} />}
                     {isDesktop && <TravelCarousel data={UK} link={'/ladakh'} />}
                     {isTablet && <TravelCarousel data={UK} link={'/ladakh'} />}
       
                   </>
                 )}
               </div>
       
             </div>
        </>
    )
}
export default DomesticTrips;
