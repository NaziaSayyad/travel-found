// import { motion } from "framer-motion";
// import { Check } from "lucide-react";

// import destBali from "@/assets/dest-bali.jpg";
// import destParis from "@/assets/dest-paris.jpg";
// import destTokyo from "@/assets/dest-tokyo.jpg";
// import destSantorini from "@/assets/dest-santorini.jpg";
// import destPeru from "@/assets/dest-peru.jpg";
// import destNyc from "@/assets/dest-nyc.jpg";

// const destinations = [
//   { id: "bali", name: "Bali", country: "Indonesia", image: destBali, tag: "Tropical" },
//   { id: "paris", name: "Paris", country: "France", image: destParis, tag: "Romantic" },
//   { id: "tokyo", name: "Tokyo", country: "Japan", image: destTokyo, tag: "Cultural" },
//   { id: "santorini", name: "Santorini", country: "Greece", image: destSantorini, tag: "Scenic" },
//   { id: "peru", name: "Machu Picchu", country: "Peru", image: destPeru, tag: "Adventure" },
//   { id: "nyc", name: "New York", country: "USA", image: destNyc, tag: "Urban" },
// ];

// interface Props{
//   selected: string | null;
//   onSelect: (id: string) => void;
// }

// const DestinationPicker = ({ selected, onSelect }: Props) => {
//   return (
//     <div>
//       <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
//         Where to?
//       </h2>
//       <p className="text-muted-foreground font-body mb-8">
//         Choose your dream destination
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {destinations.map((dest, i) => (
//           <motion.button
//             key={dest.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.08 }}
//             onClick={() => onSelect(dest.id)}
//             className={`group relative rounded-2xl overflow-hidden aspect-[4/5] transition-all duration-300 ${
//               selected === dest.id
//                 ? "ring-4 ring-primary ring-offset-2 ring-offset-background scale-[1.02]"
//                 : "hover:scale-[1.02]"
//             }`}
//           >
//             <img
//               src={dest.image}
//               alt={`${dest.name}, ${dest.country}`}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

//             {selected === dest.id && (
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
//               >
//                 <Check className="w-5 h-5 text-primary-foreground" />
//               </motion.div>
//             )}

//             <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
//               <span className="inline-block px-2 py-0.5 text-xs font-body font-medium rounded-full bg-primary/80 text-primary-foreground mb-2">
//                 {dest.tag}
//               </span>
//               <h3 className="text-xl font-display font-bold text-primary-foreground">
//                 {dest.name}
//               </h3>
//               <p className="text-sm text-primary-foreground/70 font-body">
//                 {dest.country}
//               </p>
//             </div>
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DestinationPicker;
