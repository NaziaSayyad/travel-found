import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ItenarySlideshow from "../UI/Itenaries_slideshow";
import { TabNavigation } from "../Ladakh/Itenaries/components/TabNavigation";
import SidebarForm from "../Ladakh/Itenaries/components/SidebarForm";
import "./SpitiItenaries.css";
import CurvedSlideshow from "../UI/Curveslideshow";

const Heading_Name_Curved_Slider = "SPITI MOMENTS"
const Label = "Spiti"
export const SpitiItenary = () =>{
    const { id } = useParams();

  const API = `https://travelfond-backend.onrender.com/spiti/${id}`;
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
      const getdata = async () =>{
        const res = await axios.get(API);

        console.log(res,"Checking");
        
      }
        useEffect(() => {
              // Scroll to top whenever the component mounts or location changes
              window.scrollTo(0, 0);
          }, [location]); 


    useEffect(() => {
    const fetchdata = async () => {
        getdata()
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


    return(
        <>
    
 <ItenarySlideshow  data = {tripDetails} downloadItenary={'Spiti Itinerary'}/>
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
        <h1> Reviews </h1>
        <h1> Reviews </h1>
        <h1> Reviews </h1>
        <h1> Reviews </h1>
        <h1> Reviews </h1>
        <h1> Reviews </h1>
      </div>
      <div>
         <CurvedSlideshow 
         destination ={Label}
         Heading_Name_Curved_Slider={Heading_Name_Curved_Slider} />
      </div>
      </>
    )
}