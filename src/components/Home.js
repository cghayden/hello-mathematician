import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <p>Choose your operation...</p>
    </motion.div>
  );
}
