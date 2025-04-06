import axios from "axios";
import ItenarySlideshow from "../../UI/Itenaries_slideshow"
import InfoCard from "./components/InfoCard"
import SidebarForm from "./components/SidebarForm"
import { TabNavigation } from "./components/TabNavigation"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";


export const Shrinagar_Manali = () => {
  const { id } = useParams();

  const API = `http://localhost:8080/ladakh/${id}`;
  const [tripDetails, setTripDetails] = useState("");
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(API);
        // console.log(res.data,"fe");
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
      <h1> Shrinagar  to Manali Itenary </h1>

      <ItenarySlideshow />

      <div>
        <h1> Two different Components </h1>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>

          <div>
            <InfoCard Drop={tripDetails?.pickDrop} Nights={tripDetails?.nights} />
            <TabNavigation
              Name={tripDetails?.Itenary_name}
              Inclustion={tripDetails?.Inclusions}
              Exclusion={tripDetails?.Exclusions}
              Itenary={tripDetails?.Itenary}
              Overviews={tripDetails?.overview_highlight}
              route={tripDetails?.Route}
            />

          </div>
          <div style={{
            position: 'sticky',
            top: '100px', // adjust according to your header height
            height: 'fit-content',
            alignSelf: 'flex-start' // ensures it sticks at the top of the container
          }}>
            <SidebarForm />
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
    </>
  )
}