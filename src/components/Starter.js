import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
const starterVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function Starter({
  showTimer,
  toggleTimer,
  toggleInProgress,
  isStarterActive,
  toggleScore,
  inProgress,

  reset,
  starterStep,
  setStarterStep
}) {
  useEffect(() => {
    let interval = null;
    if (isStarterActive && starterStep < 4) {
      interval = setInterval(() => {
        setStarterStep(starterStep => starterStep + 1);
      }, 600);
    } else if (starterStep > 3) {
      toggleInProgress(true);
      reset();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStarterActive, starterStep, setStarterStep, toggleInProgress, reset]);

  return (
    <ReadySetStyle>
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
    </ReadySetStyle>
  );
}

const ReadySetStyle = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  grid-column: 1/-1;
  padding-top: 30px;
`;
const StarterMessage = styled(motion.p)`
  font-size: 22px;
  display: inline-block;
`;

// setIsStarterActive,
//   addTime,
//   subtractTime,
//   minutes,
//   setMinutes,
//   seconds,
//   setSeconds,
