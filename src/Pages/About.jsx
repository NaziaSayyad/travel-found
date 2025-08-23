import react from "react"
import "../CSS/AboutUs.css";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Ali Khan",
    role: "Marketing Head",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Sara Lee",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/80",
  },
]; 

function About(){

return (
        <>
 
 <div className="about-container">
      <div className="about-section">
        <h1 style={{textAlign : 'center'}}>About Us</h1>
        <p>
          Welcome to our company! 
          At Travel Fond, our journey began with two passionate friends who shared a
common love for travel and exploration. What started as casual conversations
about our adventures soon transformed into a mission to redefine how people
experience the world. Today, as partners, we channel that same enthusiasm
into offering unforgettable travel experiences that are both personalized and
extraordinary.
        </p>
        <p>
        Both of us hold an MBA from the only institute specializing in travel and
tourism, equipping us with a deep understanding of the industry. This
academic foundation, combined with our hands-on experience as avid
travellers, allows us to deliver unparalleled insights into the world of travel,
from the smallest details to the grandest landscapes. We are not just travel
planners; we are dedicated travel enthusiasts who know what it takes to make
every journey extraordinary.
</p>
<p>
Perfection is at the core of everything we do. We believe in offering not just
the best destinations, but also the best advice and support every step of the
way. From understanding the unique moods and needs of our travellers to
setting realistic expectations and ensuring seamless experiences, we leave
nothing to chance. Whether it’s the tiniest requirement or a specific
preference, we are meticulous in attending to the details that matter most to
you.
</p>
<p>
At Travel Fond, loyalty is key. Our clients aren’t just customers—they’re
partners in the adventure, and we cherish the trust they place in us. Our team
goes above and beyond to ensure every traveller feels understood and valued,
whether it’s recommending hidden gems or providing expert guidance. We
focus on delivering experiences that align with your desires and exceed your
expectations.
</p>
<p>
Let us take care of the minutes details and understand your travel needs to
craft the most memorable trips. With our knowledge, passion for travel, and
commitment to excellence, we promise to guide you towards the best
experiences, creating memories that will last a lifetime.
</p>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div className="member" key={index}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        </>
)


}
export default About