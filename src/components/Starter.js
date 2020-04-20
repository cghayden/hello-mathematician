import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
const starterVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Starter({
  toggleInProgress,
  setIsStarterActive,
  starterStep,
  setStarterStep,
  setOptionsView,
  toggleOptions,
}) {
  useEffect(() => {
    let interval = null;
    if (starterStep < 4) {
      interval = setInterval(() => {
        setStarterStep((starterStep) => starterStep + 1);
      }, 600);
    } else if (starterStep > 3) {
      clearInterval(interval);
      setStarterStep(1);
      toggleInProgress(true);
      toggleOptions(false);
      setOptionsView("score");
    }
    return () => clearInterval(interval);
  }, [
    starterStep,
    setStarterStep,
    toggleInProgress,
    setOptionsView,
    toggleOptions,
  ]);

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {starterStep === 1 && (
          <StarterMessage
            key={1}
            variants={starterVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            Ready...
          </StarterMessage>
        )}
        {starterStep === 2 && (
          <StarterMessage
            key={2}
            variants={starterVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            Set...
          </StarterMessage>
        )}
        {starterStep === 3 && (
          <StarterMessage
            key={3}
            variants={starterVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            Go!...
          </StarterMessage>
        )}
      </AnimatePresence>
    </div>
  );
}

const StarterMessage = styled(motion.p)`
  font-size: 44px;
  display: inline-block;
`;
