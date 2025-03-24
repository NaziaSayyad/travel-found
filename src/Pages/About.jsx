import react from "react"
import "../CSS/AboutUs.css";

function About(){

return (
        <>
         <div className="about">
    {/* <h1> About Us</h1> */}
    <img src="https://www.justwravel.com/assets/images/contact/Main%20Banner.png"/>
  
   <div className="tagline">
     <h1> Your Next  <span className="highlight-green"> Adventure </span> is just a  
      <br/> <span className="highlight-green"> Call</span> away!
     </h1>
</div> 
<div> 
<p>Got questions? Need travel tips? Or just want to share your latest travel story?</p>
      <p>
        We're all ears! At Traveler Found, we're not just about selling trips; we're about
        creating unforgettable experiences.
      </p>
      <p>So, let's get the conversation started!</p>
      {/* <h3>
        Your <span className="highlight-green">Wravel</span> Companions
      </h3> */}
</div>
</div>
 {/* <div className="container">
 <h2>
   Your next <span className="highlight-green">Adventure</span> is just a <span className="highlight-green">Call</span> away!
 </h2>
 <p>Got questions? Need travel tips? Or just want to share your latest travel story?</p>
 <p>
   We're all ears! At Traveler Found, we're not just about selling trips; we're about
   creating unforgettable experiences.
 </p>
 <p>So, let's get the conversation started!</p>
 <h3>
   Your <span className="highlight-green">Wravel</span> Companions
 </h3>
</div> */}

        </>
)


}
export default About