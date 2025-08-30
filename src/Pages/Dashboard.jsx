import React, { useEffect }  from 'react'
import UpcomingTripsBanner from '../Components/Dashboard-components/UpcomingTrips'
import LadhakTripBanner from '../Components/Dashboard-components/LadhakTripBanner'
import { useLocation } from 'react-router-dom';
import CurvedSlideshow from './UI/Curveslideshow';

const  Ladakh_Banner = "https://i.ibb.co/0jDgf79F/NUBRA-CARD-BANNER.png"
// "https://i.ibb.co/Z1vMP76k/CARD-BANNER-1.png"
// "https://i.ibb.co/JwDGcFfv/CARD-BANNER.png";
// "https://i.ibb.co/93bnLMBT/500-150-PX.png";
//  "https://i.ibb.co/JwDTcTb7/lake-2594425-1920.jpg"
const ladakh = "Ladakh Trips";
const ladakh_link = "/ladakh";
const ladakh_images = [
  {
    // place: "Nubra",
    price: "45,000",
    img: "https://i.ibb.co/PzJ8VmXz/CARD-3.png"
    // 'https://i.ibb.co/v4pTLt9Z/CARD.png', 
    // "https://i.ibb.co/v4pTLt9Z/CARD.png",
    // "https://i.postimg.cc/htNmg4Fv/lake-6529960.jpg",

  },
  {
    // place: "Tso Moriri",
    price: "40,000",
    img: "https://i.postimg.cc/sfkwnmLt/leh-4152872.jpg"
  },
  {
    // place: "Pangong",
    price: "7000",
    img: "https://i.postimg.cc/yNGFDY4w/118.jpg"
  },
  {
    // place: "Turtuk",
    price: "40,000",
    img: "https://i.postimg.cc/j5s0Gvmq/sand-6740499.jpg"
  },
  {
    // place: "Zanskar",
    price: "45000",
    img: "https://i.ibb.co/h18VstcR/divyanshi-verma-w-Lq-V0-R6-LYNI-unsplash.jpg"
    },
  
];

const Spiti_Banner = "https://i.ibb.co/0pGcZKrN/ladakh-7127801.jpg";
const Spiti = "Spiti Trips";
const Spiti_link = "/spiti";
const Spiti_images = [
  {
    place: "Shimla",
    price: "45,000",
    img: "https://i.ibb.co/vCYZd9QM/bharath-raj-n-Jn5-B80xu-NUs-unsplash.jpg"
  },
  {
    place: "Kalpa",
    price: "40,000",
    img: "https://i.ibb.co/JjpfJ4fs/vinay-manda-Ivr-T-0k-Nxqo-unsplash.jpg" 
    },
  {
    place: "Kaza",
    price: "7000",
    img: "https://i.ibb.co/8VrkyZY/pexels-yogendras31-14672478.jpg" 
    },
  {
    place: "Tirthan",
    price: "40,000",
    img: "https://i.ibb.co/4ZzkyDr6/pexels-harsh-kukadiya-244412142-31756527.jpg"
     },
  {
    place: "Chandratal",
    price: "45000",
    img: "https://i.ibb.co/zVVy2X9q/pexels-eberhardgross-1624255.jpg"
  },
   {
    place: "Shimla",
    price: "45,000",
    img: "https://i.ibb.co/vCYZd9QM/bharath-raj-n-Jn5-B80xu-NUs-unsplash.jpg"
  },
  {
    place: "Kalpa",
    price: "40,000",
    img: "https://i.ibb.co/JjpfJ4fs/vinay-manda-Ivr-T-0k-Nxqo-unsplash.jpg" 
    },
  {
    place: "Kaza",
    price: "7000",
    img: "https://i.ibb.co/8VrkyZY/pexels-yogendras31-14672478.jpg" 
    },
  {
    place: "Tirthan",
    price: "40,000",
    img: "https://i.ibb.co/4ZzkyDr6/pexels-harsh-kukadiya-244412142-31756527.jpg"
     },
  {
    place: "Chandratal",
    price: "45000",
    img: "https://i.ibb.co/zVVy2X9q/pexels-eberhardgross-1624255.jpg"
  }
 
];
const Rajasthan_Banner =  "https://i.ibb.co/SXWMJyGs/2.png";
const Rajasthan = "Rajasthan Trips";
const Rajasthan_link = "/Rajasthan";
const Rajasthan_images = [
  {
    // place: "Jaipur",
    price: "45,000",
    img: "https://i.ibb.co/TMhXb0dv/36.jpg"
    },
  {
    // place: "Jaisalmer",
    price: "40,000",
    img: "https://i.ibb.co/9HRSMqhG/40.jpg"
    },
  {
    // place: "Udaipur",
    price: "7000",
    img: "https://i.ibb.co/rRvLPXGY/44.jpg"
    },
  {
    // place: "Jodhpur",
    price: "40,000",
    img: "https://i.ibb.co/nsk2RD69/47.jpg"
  },
  {
    // place: "Ranthambore",
    price: "45000",
    img: "https://i.ibb.co/S48R464F/52.jpg" 
    },
   {
    // place: "Mount Abu",
    price: "45,000",
    img: "https://i.ibb.co/svFX0kTx/53.jpg"
    },
  {
    // place: "Ajmer",
    price: "40,000",
    img: "https://i.ibb.co/tM07RHpP/57.jpg"
    },
  {
    // place: "Bikaner",
    price: "7000",
    img: "https://i.ibb.co/PZ40tdTn/55.jpg"
    },
  
 
];

const Himachal_Banner = "https://i.ibb.co/6c6pjpMy/1.png"
const Himachal = "Himachal Trips";
const Himachal_link = "/himachal";
const Himachal_images = [
 
  {
    // place: "Manali",
    price: "45,000",
    img: "https://i.ibb.co/pptV7Mj/6.jpg"    
  },
  {
    // place: "Shimla",
    price: "40,000",
    img: "https://i.ibb.co/1fZPWq06/4.jpg"
    },
  {
    // place: "Dalhousie",
    price: "7000",
    img: "https://i.ibb.co/39wf2w40/27.jpg"
    },
  {
    // place: "Dharmshala",
    price: "40,000",
    img:"https://i.ibb.co/jCd8KXb/18.jpg"  
    },
  
];



const Journey = "Journey In Frames";


export const  Dashboard = () => {
   useEffect(() => {
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'instant'
          });
      }, []);
      const location = useLocation(); // Add this hook

        useEffect(() => {
        // Scroll to top whenever the component mounts or location changes
        window.scrollTo(0, 0);
    }, [location]);
    
    return (
      <div>
        {/* <h1> Dashboard </h1> */}
        
    {/* <h1> Vedio in background </h1> */}
        <UpcomingTripsBanner />
     
          {/* Ladakh  */}
          <LadhakTripBanner
          Banner ={Ladakh_Banner}
          images = {ladakh_images} 
          // heading={ladakh}
          link = {ladakh_link}
          />

        {/* Spiti */}
        <LadhakTripBanner 
         Banner ={Rajasthan_Banner}
          images = {Rajasthan_images} 
          //  heading={Rajasthan}
          link = {Rajasthan_link}
        /> 

        {/* Himachal Pradesh */}
        { <LadhakTripBanner 
        Banner ={Himachal_Banner}
        images = {Himachal_images} 
        //  heading={Himachal}
        link = {Himachal_link}
        /> }

        {/* Internationa */} 
        {/* <LadhakTripBanner /> */}
{/* Journey Frames */}

<CurvedSlideshow
      Heading_Name_Curved_Slider = {Journey} 
      destination={'ladakh'}
      /> 
       
      </div>
    )
  }

