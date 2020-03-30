import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/pageTransitions";

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      Welcome to Flashcards
    </motion.div>
  );
}
