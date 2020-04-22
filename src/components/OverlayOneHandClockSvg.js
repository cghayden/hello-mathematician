import React from "react";
import { motion } from "framer-motion";
export default function ClockSvg() {
  return (
    <motion.svg
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 4,
        //     // times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 0,
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overlay"
    >
      <circle cx="12" cy="12" r="10"></circle>
      {/* <polyline points="12 6 12 12 16 14"></polyline> */}
      <polyline points="12 6 12 12"></polyline>
    </motion.svg>
  );
}
