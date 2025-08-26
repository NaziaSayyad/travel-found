import axios from "axios";
import ItenarySlideshow from "../../UI/Itenaries_slideshow"
import InfoCard from "./components/InfoCard"
import SidebarForm from "./components/SidebarForm"
import { TabNavigation } from "./components/TabNavigation"
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./S_M.css";
import { MantineProvider } from "@mantine/core";
import CurvedSlideshow from "../../UI/Curveslideshow";
import Loading from "../../../Loading/Loading";

const Label = 'Ladakh';
const Heading_Name_Curved_Slider = "LADAKH MOMENTS"
export const Shrinagar_Manali = () => {
  const { id } = useParams();

  const API = `https://travelfond-backend.onrender.com/ladakh/${id}`;
  // https://travelfondbackend-production.up.railway.app/ladakh${id}`
  // https://travelfond-backend.onrender.com/ladakh/
  
  const [tripDetails, setTripDetails] = useState("");
  const [loading, setLoading] = useState(true);
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
        const res = await axios.get(API);
        console.log(res.data,"fe");
        setTripDetails(res.data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        
      }finally{
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);


  console.log("Trip Details State:", tripDetails); // Debugging step 2 ✅
  console.log(tripDetails.Inclusions, "incl");


  if(loading){
  return <Loading /> 
}
  return (
    <>
      {/* <h1> Srinagar  to Manali Itineraries </h1>
      <h4> {tripDetails?.newprice}</h4> */}

      <ItenarySlideshow  data = {tripDetails} 
      downloadItenary= {'Ladakh Itinerary'} />

      <div>
        {/* <h1> Two different Components </h1> */}
        <div className="tab-side-container">

          <div>
            {/* <InfoCard pick = {tripDetails?.start} Drop={tripDetails?.End} Nights={tripDetails?.nights} /> */}
            <TabNavigation
              Name={tripDetails?.Itenary_name}
              Inclustion={tripDetails?.Inclusions}
              Exclusion={tripDetails?.Exclusions}
              Itenary={tripDetails?.Itenary}
              Overviews={tripDetails?.overview_highlight}
              route={tripDetails?.Route}
              costing ={tripDetails?.Costing}
              batches = {tripDetails?.Batches}
              start = {tripDetails?.start}
              end = {tripDetails?.End}
              nights = {tripDetails?.nights}
            />
          </div>
          <div className="SidebarForm-container">
            <SidebarForm 
              costing = {tripDetails?.Costing} 
              batches = {tripDetails?.Batches}
              data = {tripDetails}
            />
          </div>
        </div>
      </div>

        
      <div>
        
      </div>
        <div>
            <CurvedSlideshow 
            destination = {Label}
            Heading_Name_Curved_Slider={Heading_Name_Curved_Slider} />
        </div>
    </>
  )
}