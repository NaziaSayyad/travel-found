
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Ladakh_Mobile.css";
import ItenarySlideshow from "../../Pages/UI/Itenaries_slideshow";
import { Mobile_TravelCarousel } from "./Mobile_TravelCarousel";
const API = 'https://travelfond-backend.onrender.com/ladakh';

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

export const LadakhPage = () =>{
    return(
        <>
        
        {/* <ItenarySlideshow /> */}
        <LadakhCrausel img={images}/>
       
        </>
    )
}
export const LadakhCrausel =({img}) =>{
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
    return(
        <>
        <div className="mobile-carousel-container">
      <Slider {...settings}>
        {img?.map((item, index) => (
          <div key={index} className="mobile-carousel-slide">
            <div
              className="mobile-carousel-image"
              style={{ backgroundImage: `url(${item.url})` }}
            >
              <div className="mobile-carousel-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span className="mobile-Price">{item.price}</span>
            {/* <button className="callback-btn">Request a Callback</button> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
        </>
    )
}
