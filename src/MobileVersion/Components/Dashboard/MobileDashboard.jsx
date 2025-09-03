import React from "react";
import "./MobileDashboard.css";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc'; // colorful Google icon
import { SiTripadvisor } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { MobileFooter } from "../Footer/MobileFooter";
import { DestinationSlideShow } from "../SlideShow/Destination-SlideShow/DestinationSlideshow";
import { HorizontalSlider } from "../SlideShow/Horizontal-SlideShow/HorizontalSlider";
import { Link } from "react-router-dom";

/* 
1. Bir
2. ⁠McLeodganj - Dharamshala
3. ⁠kasol 
4. ⁠kasol - kheerganga
5. ⁠kasol - Tosh
6. ⁠Manali
7. ⁠manali - Sissu
8. ⁠Jispa
9. ⁠Kasol - Manali
10. ⁠tirthan Valley
11. ⁠Shangarh
12. ⁠Dalhousie 
13. ⁠Amritsar
14. ⁠Chail
15. ⁠Rohru
16. ⁠Chanshal Valley
17. ⁠Chitkul
18. ⁠Kalpa
19. ⁠Yula Kanda
20. ⁠Chamba
21. ⁠Chakrata
22. ⁠Nainital
23. ⁠Mukteshwar
24. ⁠Bhimtal
25. ⁠Kanatal
26. ⁠Mussoorie
27. ⁠Ranikhet
28. ⁠Majkhali
29. ⁠Minsiyari
30. ⁠Kasar Devi
31. ⁠Chamba
32. ⁠Sursingdhar
33. ⁠Jim Corbett
34. ⁠Jim Corbett- Nainital
35. ⁠Ramganga
36. ⁠Rishikesh
37. ⁠Chopta - Tungnath - Chandrashila
38. ⁠Jaipur
39. ⁠Udaipur
40. ⁠Jodhpur 
41. ⁠Jaisalmer
42. ⁠Ajmer
43. ⁠Ranthambore
44. ⁠Shimla
45. ⁠Mashobra
46. ⁠Kasauli
*/
const destinations = [
  {
    link: "/kashmir",
    name: "Bir-Billing",
    img: "https://i.ibb.co/4vVMYhf/35.jpg"
  },
  {
    link: "/ladakhTrip",
    name: "Dharamshala",
    img: "https://i.ibb.co/QFM9C0cV/14.jpg" 
   
  },
  {
    link: "/spiti",
    name: "Kasol",
    img: "https://i.ibb.co/KJyMqVj/manas-aggarwal-Pf-ZQ-Gfmqe-I-unsplash.jpg"
  },
  {
    link: "/himachal",
    name: "Kasol-Kheerganga",
    img: "https://i.ibb.co/0pGcZKrN/ladakh-7127801.jpg"
  },
  {
    link: "/kashmir",
    name: "Kasol-Tosh",
    img: "https://i.ibb.co/7tD7Qv93/mountains-2689450.jpg"
  },
  {
    link: "/kashmir",
    name: "Manali",
    img: "https://i.ibb.co/d05675hZ/5.jpg"
  },
  {
    link: "/kashmir",
    name: "Sisu",
    img: "https://i.ibb.co/pptV7Mj/6.jpg"
  },
  {
    link: "/kashmir",
    name: "Jispa",
    img: "https://i.ibb.co/jZx1ZWX3/pratik-gupta-Szf-XDFj-O9-YI-unsplash.jpg"
  },
  {
    link: "/kashmir",
    name: "Kasol-Manali",
    img: "https://i.ibb.co/7tZ678p8/soham-nandi-Yak-UHx-f7-A4-unsplash.jpg"
  },
  {
    link: "/kashmir",
    name: "Tirthan Valley",
    img: "https://i.ibb.co/21hHSWBT/30.jpg"
  },
  {
    link: "/kashmir",
    name: "Shangarth",
    img: "https://i.ibb.co/cS2QZPK8/pexels-yogendras31-13979460.jpg"
  },
  {
    link: "/kashmir",
    name: "Dalhousie",
    img: "https://i.ibb.co/NgHChtrC/25.jpg"
  },
  {
    link: "/kashmir",
    name: "Amritsar",
    img: "./Amritsar.jpg"
  },
  {
    link: "/kashmir",
    name: "Chail",
    img: "https://i.ibb.co/6h28wX4/19.jpg"
  },
  {
    link: "/kashmir",
    name: "Rohru",
    img: "https://i.ibb.co/zHjbWGxc/yogesh-sharma-Pnu-T63-PYf-Zk-unsplash.jpg"
  },
  {
    link: "/kashmir",
    name: "Chanshal Valley",
    img: "./Chanshal.jpg"
  },
  {
    link: "/kashmir",
    name: "Chitkul",
    img: "https://i.ibb.co/jP1Ld1jh/11.jpg"
  },
  {
    link: "/kashmir",
    name: "Kalpa",
    img: "https://i.ibb.co/B5hZmqkp/pexels-karan-hansraj-2147704894-29774206.jpg"
  },
  {
    link: "/kashmir",
    name: "Vula Kanda",
    img: "https://i.ibb.co/rKnPQTpP/pexels-dhruv-jangid-2945224-30255559.jpg"
  },
  {
    link: "/kashmir",
    name: "Chamba",
    img: "./Chamba.jpg"
  },
  {
    link: "/kashmir",
    name: "Chakrata",
    img: "https://i.ibb.co/zVVy2X9q/pexels-eberhardgross-1624255.jpg"
  },
  {
    link: "/kashmir",
    name: "Nanital",
    img: "https://i.ibb.co/Hfmsv9nG/pexels-arjun-godara-277047411-27818167.jpg"
  },
  {
    link: "/kashmir",
    name: "Mukteshwar",
    img: "https://i.ibb.co/tpCCRBTG/pexels-harsh-kukadiya-244412142-31756527.jpg"
  },
  {
    link: "/kashmir",
    name: "Bhimtal",
    img: "https://i.ibb.co/RTgzWMQR/vivek-kumar-7k1-IKQZik-Sc-unsplash.jpg"
  },
  {
    link: "/kashmir",
    name: "Kantal",
    img: "https://i.ibb.co/fVXQqL8Z/vinay-manda-Ivr-T-0k-Nxqo-unsplash.jpg"
  },
  {
    link: "/kashmir",
    name: "Massorie",
    img: "https://i.ibb.co/fz3Jhsj5/sukant-sharma-b6rs6-V-9l-H4-unsplash-1.jpg"
  },
  {
    link: "/kashmir",
    name: "Ranikhet",
    img: "https://i.ibb.co/xSFzGv1D/118.jpg"
  },
  {
    link: "/kashmir",
    name: "Majkhali",
    img: "https://i.ibb.co/tT6YB2kb/mountain-7565282.jpg"
  },
  {
    link: "/kashmir",
    name: "Minsiyari",
    img: "https://i.ibb.co/nqV2sZy9/sukant-sharma-b6rs6-V-9l-H4-unsplash-1.jpg"
  },
  {
    link: "/kashmir",
    name: "Kasar Devi",
    img: "https://i.ibb.co/0yFDRpxF/pexels-yogendras31-31307367.jpg" 
  },
  {
    link: "/kashmir",
    name: "Sursingdhar",
    img: "https://i.ibb.co/8VrkyZY/pexels-yogendras31-14672478.jpg"
  },
  {
    link: "/kashmir",
    name: "JimCorbett",
    img: "./Jim_corbet.jpg"
  },
  {
    link: "/kashmir",
    name: "JimCorbett - Nanital",
    img: "./corbet_Nanital.jpg"
  },
  {
    link: "/kashmir",
    name: "Ramgang",
    img: "./Ramganga.jpg"
  },
  {
    link: "/kashmir",
    name: "Rishikesh",
    img: "./Rishikesh.jpg"
  },
  {
    link: "/kashmir",
    name: "Chopta-Tungnath-Chandrashila",
    img: "https://i.ibb.co/ccmGGs4b/soham-nandi-GCi-Wr0jd4o-I-unsplash.jpg"
  },
  {
    link: "/kashmir",
    name: "Jaipur",
    img: "https://i.ibb.co/TMhXb0dv/36.jpg" 
  },
   {
    link: "/kashmir",
    name: "Udaipur",
    img: "https://i.ibb.co/rRvLPXGY/44.jpg" 
  },
  {
    link: "/kashmir",
    name: "Jhodhpur",
    img: "https://i.ibb.co/Myt5qbLK/47.jpg" 
  },
  {
    link: "/kashmir",
    name: "Jaisalmer",
    img: "https://i.ibb.co/W447nd91/40.jpg" 
  },
  {
    link: "/kashmir",
    name: "Ajmer",
    img: "https://i.ibb.co/6RpZTvH5/57.jpg" 
  },
  {
    link: "/kashmir",
    name: "Rathambore",
    img: "https://i.ibb.co/TMKLFcTb/51.jpg" 
  },
  {
    link: "/kashmir",
    name: "Shimla",
    img: "https://i.ibb.co/cXKjy9jw/4.jpg" 
  },
  {
    link: "/kashmir",
    name: "Mashobra",
    img: "https://i.ibb.co/p6L20dYL/pexels-arthousestudio-5015233.jpg" 
  },
  {
    link: "/kashmir",
    name: "Kasauli",
    img: "https://i.ibb.co/svPBRVZV/pangong-tso-7228599.jpg"  
  }
];

const MobileLandingPage = () => {
  return (
    <>
    
    <div className="mobile-container">

      <div className="banner">
        <h1> Vedio In Background </h1>
      </div>

      {/* Reviews */}
      <div className="reviews">
        <div className="review">
          {/* <img src="/google.png" alt="google" /> */}
          <FcGoogle
            style={{ fontSize: '30px' }} />
          <FaStar className="star-icon" />

          <p>5.0<br /> </p>
        </div>
        <div className="review">

          <SiTripadvisor style={{ fontSize: '30px' }} />

          <FaStar className="star-icon" />
          <p>5.0<br /></p>
        </div>
        <div className="review">
          <FaFacebook style={{ color: '#1877F2', fontSize: '30px' }} />
          <FaStar className="star-icon" />
          <p>4.9<br /></p>
        </div>
      </div>

      {/* Destinations */}
      <div className="destinations">
        <h3>Weekend Gateway</h3>
        <div className="destination-list">
          {destinations.map((place, index) => {

            return (
              <>
                <div key={index} className="destination-card">
                  <Link to={place.link}>
                  <img
                    src={place.img}
                    alt={place.name}
                  />
                  </Link>
                  <span>{place.name}</span>
                </div>

              </>
            )
          })}
        </div>
      </div>
      <div>
        <HorizontalSlider />
        
        <DestinationSlideShow />
        
        
      </div>

    </div>
    <MobileFooter />
    </>

  );
};

export default MobileLandingPage;
