import axios from "axios";
import ItenarySlideshow from "../../UI/Itenaries_slideshow"
import InfoCard from "./components/InfoCard"
import SidebarForm from "./components/SidebarForm"
import { TabNavigation } from "./components/TabNavigation"
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { MantineProvider } from "@mantine/core";
import CurvedSlideshow from "../../UI/Curveslideshow";

const Heading_Name_Curved_Slider = "Ladakh moments";


export const Shrinagar_Manali = () => {
  const { id } = useParams();

  const API = `http://localhost:8080/ladakh/${id}`;
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);


  console.log("Trip Details State:", tripDetails); // Debugging step 2 ✅
  console.log(tripDetails.Inclusions, "incl");


  return (
    <>
      {/* <h1> Srinagar  to Manali Itineraries </h1>
      <h4> {tripDetails?.newprice}</h4> */}

      <ItenarySlideshow  data = {tripDetails}/>

      <div>
        {/* <h1> Two different Components </h1> */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop : '40px'
        }}>

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
          <div style={{
            position: 'sticky',
            top: '100px', // adjust according to your header height
            height: 'fit-content',
            alignSelf: 'flex-start' // ensures it sticks at the top of the container
          }}>
            <SidebarForm 
              costing = {tripDetails?.Costing} 
              batches = {tripDetails?.Batches}
              data = {tripDetails}
            />
          </div>
        </div>
      </div>

        
      <div>
        <h1> Reviews </h1>
        <h1> Reviews </h1>
        <h1> Reviews </h1>
        <h1> Reviews </h1>
        <h1> Reviews </h1>
        <h1> Reviews </h1>
      </div>
        <div>
            <CurvedSlideshow Heading_Name_Curved_Slider={Heading_Name_Curved_Slider} />
        </div>
    </>
  )
}