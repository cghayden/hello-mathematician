import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const ReadySetStyle = styled.div`
  width: 100%;
  height: 30px;
  background: lightblue;
  text-align: center;
`;

const variants = {
  enter: { x: 100 },
  center: { x: 0 },
  exit: { x: -100 }
};

export default function ReadySetGo({ starterStep }) {
  return (
    <ReadySetStyle>
      <AnimatePresence>
        <p>Placeholder</p>
        {starterStep === 1 && (
          <motion.p
            variants={variants}
            transition={{ duration: 0.4 }}
            initial="enter"
            animate="center"
            key={1}
            exit="exit"
          >
            Ready...
          </motion.p>
        )}
        {starterStep === 2 && (
          <motion.p
            variants={variants}
            transition={{ duration: 0.4 }}
            initial="enter"
            animate="center"
            key={2}
            exit="exit"
          >
            Set...
          </motion.p>
        )}
        {starterStep === 3 && (
          <motion.p
            variants={variants}
            transition={{ duration: 0.4 }}
            initial="enter"
            animate="center"
            key={3}
            exit="exit"
          >
            Go!...
          </motion.p>
        )}
      </AnimatePresence>
    </ReadySetStyle>
  );
}
