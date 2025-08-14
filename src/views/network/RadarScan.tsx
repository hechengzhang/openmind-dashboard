import { motion } from "framer-motion";
import LocationImage from "@/assets/images/network/location.png"
import MarkerImage from "@/assets/images/network/marker.png"

export default function RadarScan() {
  return (
    <div className="relative w-[120px] h-[120px] z-[2]">
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
        className="relative w-[120px] h-[120px] rounded-full border-[#B8D6FEB3] border-[0.5px]"
        style={{
          background: `conic-gradient(
            from 0deg,
            rgba(227, 251, 255, 1) 0%,
            rgba(227, 251, 255, 0.05) 100%
          )`,
        }}
      >
        <div className="absolute bg-[#D4E7FE] w-[0.5px] h-[60px] top-0 left-1/2 transform -translate-x-1/2"></div>
      </motion.div>
      <div className="absolute w-[100px] h-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={LocationImage} alt="" />
      </div>
      <div className="absolute w-[60px] h-[60px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={MarkerImage} alt="" />
      </div>
    </div>
  );
}



