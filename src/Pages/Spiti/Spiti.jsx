import { useEffect, useState } from "react";
import Carousel from "../UI/Layout";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { TravelCarousel } from "../UI/Swiper";
import FilterComponent from "../Ladakh/Itenaries/components/FilterComponent";
import { SpitiFilterComponent } from "./SpitiFilterComponent";
import { useIsMobile } from "../../Responsive-component/UseMobile";
import { Mobile_TravelCarousel } from "../../MobileVersion/Pages/Mobile_TravelCarousel";


const images = [
  {
    url: "https://i.ibb.co/jkHk0w5z/vivek-kumar-7k1-IKQZik-Sc-unsplash.jpg",
    title: "Spiti Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.ibb.co/ccmGGs4b/soham-nandi-GCi-Wr0jd4o-I-unsplash.jpg",
    title: "Spiti Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
  {
    url: "https://i.ibb.co/FLVKvs0B/1-15.jpg",
    title: "Spiti Tour Packages",
    description: "Feel the thrill of the mountains and monasteries",
    price: "Rs. 34,999/- Per Person",
  },
];
const API = 'http://localhost:8080/spiti';

export const Spiti = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);
  const location = useLocation(); // Add this hook
  const [data, setdata] = useState();
  const [SSM, setSSM] = useState();
  const [SSS, setSSS] = useState([]);
  const [TSM, setTSM] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [filters, setFilters] = useState({
    route: "",
    budget: "",
    customize: "",
    cities: []
  });


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  useEffect(() => {
    // Scroll to top whenever the component mounts or location changes
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(API);
        setdata(res.data);
        console.log(res.data);


        // Extract unique cities from all Route arrays
        const allCities = res.data.flatMap(trip => trip.Route || []);
        const uniqueCities = [...new Set(allCities)];
        setCityList(uniqueCities);

        setSSM(res.data.filter(trip => trip.code === "SSM"));
        setSSS(res.data.filter(trip => trip.code === "SSS"));
        setTSM(res.data.filter(trip => trip.code === "TSM"));

      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
  }, [])

  const applyFilters = (newFilters) => {
    console.log(newFilters, "updates");

    setFilters(newFilters);

    if (!data) return;

    const filtered = data.filter((trip) => {
      const nightsNumber = parseInt(trip.nights?.split("N")[0]);
      console.log(trip.route, "trip route");
      //  if (trip.route === newFilters.route){
      //     console.log("res", trip.route);

      //   } 

      console.log(newFilters.route, "new");

      return (
        // (!newFilters.nights ||
        //   (newFilters.nights === "10N/11D"
        //     ? nightsNumber >= 8
        //     : nightsNumber === parseInt(newFilters.nights))) &&
        (!newFilters.route.length || newFilters.route.includes(trip.route)) &&

        (!newFilters.customize || trip.customize === newFilters.customize) &&


        (!newFilters.cities.length ||
          newFilters.cities.some(city => trip.Route?.includes(city)))

      );
    });
    setSSM(filtered.filter(trip => trip.code === "SSM"));
    setSSS(filtered.filter(trip => trip.code === "SSS"));
    setTSM(filtered.filter(trip => trip.code === "TSM"));


  };

  const isFiltered = filters.nights || filters.route.length || filters.budget || filters.cities.length;


  return (
    <>
      <div>
        <Carousel images={images} />

        <h1> Spiti Valley </h1>

        {/* <FilterComponent onFilterChange={applyFilters} cityList = {cityList} /> */}

        <SpitiFilterComponent onFilterChange={applyFilters} cityList={cityList} />

        {(!isFiltered || TSM.length > 0) && (
          <>
            <h2 className="trips-define">Trip From Tirthan Spiti Manali </h2>
            {
              isMobile ? <Mobile_TravelCarousel data={TSM} link={'/spiti'} /> :
                <TravelCarousel data={TSM} link={'/spiti'} />
            }
          </>
        )}

        {(!isFiltered || SSM.length > 0) && (
          <>
            <h2 className="trips-define">Trip From Shimla Spiti Manali </h2>
            {
              isMobile ? <Mobile_TravelCarousel data={SSM} link={'/spiti'} /> :
                <TravelCarousel data={SSM} link={'/spiti'} />
            }
          </>
        )}
        {(!isFiltered || SSS.length > 0) && (
          <>
            <h2 className="trips-define">Trip From Shimla Spiti Shimla </h2>
            {
              isMobile ? <Mobile_TravelCarousel data={SSS} link={'/spiti'} /> :
                <TravelCarousel data={SSS} link={'/spiti'} />
            }
          </>
        )}



      </div>
    </>
  )
}