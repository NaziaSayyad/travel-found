import axios from "axios";
import Carousel from "../UI/Layout"
import { TravelCarousel } from "../UI/Swiper"
import { useEffect, useState } from "react";
 import "./LadakhPage.css";
const API = 'http://localhost:8080/ladakh';


export const Ladakh = () =>{
    const [data,setdata] = useState();
    const [filterData,setfilterData] = useState();
    const getdata = async() =>{
        const res = await axios.get(API);
       return res.data;
        
    }
    const fetchdata = async () =>{
    const res = await getdata();
        console.log(res, "res");
        setdata(res)
    const filteredTrips = res.filter(trip => trip.code === "MLS");
    console.log(filteredTrips,"filter");
    setfilterData(filteredTrips);
       
    }
    useEffect(() =>{
        fetchdata();

    },[])
        return(
        <>
        
        <div>
            <Carousel />
            <h1> Ladakh </h1>
            <h1> About Ladakh packages  </h1>
            <h1> About Ladakh packages  </h1>
            <h2 className="trips-define"> Trip From  Delhi to Srinagar</h2>
            <TravelCarousel  data={data}/>
            <h2 className="trips-define"> Trip From Manali to Srinagar</h2>
            <TravelCarousel  data={filterData}/>
            <h2 className="trips-define"> Trip From Srinagr to Mnali </h2>
            <TravelCarousel  data={filterData}/>
        </div>
        </>
    )
}
