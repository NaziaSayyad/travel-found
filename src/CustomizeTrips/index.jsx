// import { useState, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import HeroSection from "@/components/HeroSection";
// import StepIndicator from "@/components/StepIndicator";
// import DestinationPicker from "@/components/DestinationPicker";
// import TravelDetails from "@/components/TravelDetails";
// import PreferencesSelector from "@/components/PreferencesSelector";
// import TripSummary from "@/components/TripSummary";

// const Index = () => {
//   const [step, setStep] = useState(-1); // -1 = hero
//   const [destination, setDestination] = useState<string | null>(null);
//   const [dates, setDates] = useState({ start: "", end: "" });
//   const [travelers, setTravelers] = useState(2);
//  const [activities, setActivities] = useState<string[]>([]);

//   const [budget, setBudget] = useState("");

//   const builderRef = useRef<HTMLDivElement>(null);

//   const startPlanning = () => {
//     setStep(0);
//     setTimeout(() => {
//       builderRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   const canProceed = () => {
//     if (step === 0) return !!destination;
//     if (step === 1) return !!(dates.start && dates.end);
//     if (step === 2) return activities.length > 0 && !!budget;
//     return false;
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 0:
//         return <DestinationPicker selected={destination} onSelect={setDestination} />;
//       case 1:
//         return (
//           <TravelDetails
//             dates={dates}
//             travelers={travelers}
//             onDatesChange={setDates}
//             onTravelersChange={setTravelers}
//           />
//         );
//       case 2:
//         return (
//           <PreferencesSelector
//             selectedActivities={activities}
//             budget={budget}
//             onActivitiesChange={setActivities}
//             onBudgetChange={setBudget}
//           />
//         );
//       case 3:
//         return (
//           <TripSummary
//             destination={destination}
//             dates={dates}
//             travelers={travelers}
//             activities={activities}
//             budget={budget}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <HeroSection onStart={startPlanning} />

//       {step >= 0 && (
//         <section ref={builderRef} className="py-16 md:py-24">
//           <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
//             <StepIndicator current={step} />

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={step}
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -30 }}
//                 transition={{ duration: 0.35 }}
//               >
//                 {renderStep()}
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation Buttons */}
//             {step < 3 && (
//               <div className="flex justify-between mt-10">
//                 <button
//                   onClick={() => setStep(Math.max(0, step - 1))}
//                   disabled={step === 0}
//                   className="px-6 py-3 rounded-xl border border-border text-foreground font-body font-medium hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
//                 >
//                   ← Back
//                 </button>
//                 <button
//                   onClick={() => setStep(step + 1)}
//                   disabled={!canProceed()}
//                   className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold hover:brightness-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
//                 >
//                   Continue →
//                 </button>
//               </div>
//             )}

//             {step === 3 && (
//               <div className="mt-6 text-center">
//                 <button
//                   onClick={() => setStep(0)}
//                   className="text-sm font-body text-muted-foreground hover:text-primary underline transition-colors"
//                 >
//                   Start over
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default Index;
