import axios from "axios";
import Carousel from "../UI/Layout";
import { TravelCarousel } from "../UI/Swiper";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import FilterComponent from "./Itenaries/components/FilterComponent";
import CurvedSlideshow from "../UI/Curveslideshow";

const API = 'http://localhost:8080/ladakh';

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

export const Ladakh = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [filters, setFilters] = useState({
    nights: "",
    route: "",
    budget: "",
    customize: "",
    turtuk : "",
    leh: "",
    hanleUmlingla : "",
    cities: []
  });

  const [MLS, setMLS] = useState([]);
  const [DMLS, setDMLS] = useState([]);
  const [SLMD, setSLMD] = useState([]);
  const [LS, setLS] = useState([]);
  const [SLM, setSLM] = useState([]);
  const [SL, setSL] = useState([]);
  const [LL, setLL] = useState([]);
  const [DMLMD, setDMLMD] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setData(res.data);

        // Extract unique cities from all Route arrays
        const allCities = res.data.flatMap(trip => trip.Route || []);
        const uniqueCities = [...new Set(allCities)];
        setCityList(uniqueCities);

        // Initial split
        setMLS(res.data.filter(trip => trip.code === "MLS"));
        setDMLS(res.data.filter(trip => trip.code === "DMLS"));
        setSLMD(res.data.filter(trip => trip.code === "SLMD"));
        setLS(res.data.filter(trip => trip.code === "LS"));
        setSLM(res.data.filter(trip => trip.code === "SLM"));
        setSL(res.data.filter(trip => trip.code === "SL"));
        setLL(res.data.filter(trip => trip.code === "LL"));
        setDMLMD(res.data.filter(trip => trip.code === "DMLMD"));
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchData();
  }, []);

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
        (!newFilters.leh  || trip.leh  === newFilters.leh ) &&
        (!newFilters.turtuk  || trip.turtuk  === newFilters.turtuk ) &&
        (!newFilters.hanleUmlingla  || trip.leh  === newFilters.leh ) &&
        
        (!newFilters.cities.length ||
          newFilters.cities.some(city => trip.Route?.includes(city)))
      
        );
    });

    setMLS(filtered.filter(trip => trip.code === "MLS"));
    setDMLS(filtered.filter(trip => trip.code === "DMLS"));
    setSLMD(filtered.filter(trip => trip.code === "SLMD"));
    setLS(filtered.filter(trip => trip.code === "LS"));
    setSLM(filtered.filter(trip => trip.code === "SLM"));
    setSL(filtered.filter(trip => trip.code === "SL"));
    setLL(filtered.filter(trip => trip.code === "LL"));
    setDMLMD(filtered.filter(trip => trip.code === "DMLMD"));
  };

  const isFiltered = filters.nights || filters.route || filters.budget || filters.cities.length;

  return (
    <div>
      <Carousel images={images} />
      {/* <h1>Ladakh</h1> */}
      <h1>About Ladakh packages</h1>

      <FilterComponent onFilterChange={applyFilters} cityList={cityList} />

      {(!isFiltered || DMLS.length > 0) && (
        <>
          <h2 className="trips-define">Trip From Delhi to Srinagar</h2>
          <TravelCarousel data={DMLS} link = {'/ladakh'} />
        </>
      )}

      {(!isFiltered || MLS.length > 0) && (
        <>
          <h2 className="trips-define">Trip From Manali to Srinagar</h2>
          <TravelCarousel data={MLS}  link = {'/ladakh'} />
        </>
      )}

      {(!isFiltered || SLMD.length > 0) && (
        <>
          <h2 className="trips-define">Trip From Srinagar to Delhi</h2>
          <TravelCarousel data={SLMD} link = {'/ladakh'} />
        </>
      )}

      {(!isFiltered || SLM.length > 0) && (
        <>
          <h2 className="trips-define">Trip From Srinagar to Manali</h2>
          <TravelCarousel data={SLM}  link = {'/ladakh'} />
        </>
      )}

      {(!isFiltered || SL.length > 0) && (
        <>
          <h2 className="trips-define">Trip From Srinagar to Leh</h2>
          <TravelCarousel data={SL}  link = {'/ladakh'} />
        </>
      )}

      {(!isFiltered || LS.length > 0) && (
        <>
          <h2 className="trips-define">Trip From Leh to Srinagar</h2>
          <TravelCarousel data={LS} link = {'/ladakh'} />
        </>
      )}

      {(!isFiltered || LL.length > 0) && (
        <>
          <h2 className="trips-define">Trip From Leh to Leh</h2>
          <TravelCarousel data={LL} link = {'/ladakh'}  />
        </>
      )}

      {(!isFiltered || DMLMD.length > 0) && (
        <>
          <h2 className="trips-define">Trip From Delhi to Delhi</h2>
          <TravelCarousel data={DMLMD}  link = {'/ladakh'} />
        </>
      )}

    </div>
  );
};
