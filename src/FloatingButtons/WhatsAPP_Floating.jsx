import "./WhatsAPP_Floating.css";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { WhatsAppButton } from "../Pages/UI/WhatsappButton";

export const FloatingButtons = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-buttons">
      {/* Scroll to Top Button */}
      {/* <button className="float-btn scroll-btn" onClick={scrollToTop}>
        <IoIosArrowUp size={22} />
      </button> */}

      {/* WhatsApp Button */}
     <button className="whatsapp-float">
         <WhatsAppButton />
     </button>
    </div>
  );
};
