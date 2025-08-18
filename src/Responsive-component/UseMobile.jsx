import { useEffect, useState } from "react";

// export const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768
//     // || window.innerWidth >=700 
//     // ||  window.innerWidth <=1024
//   );

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth <= 500);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   return isMobile;
// };
// import { useEffect, useState } from "react";

// pass custom breakpoints (default: 500, 1024)
export const useBreakpoint = (mobile = 500, tablet = 1024) => {
  const getDevice = () => {
    const width = window.innerWidth;
    if (width <= mobile) return "mobile";
    if (width > mobile && width <= tablet) return "tablet";
    return "desktop";
  };
  const [device, setDevice] = useState(getDevice);
  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobile, tablet]); // depends on breakpoints

  return {
    device,                    // string: "mobile" | "tablet" | "desktop"
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop"
  };
};
