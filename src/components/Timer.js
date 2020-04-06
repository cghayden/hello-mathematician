import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import MinusCircleSvg from "./MinusCircleSvg";
import AddCircleSvg from "./AddCircleSvg";
import SmallPillButton from "./SmallPillButton";
import LargePillButton from "./LargePillButton";
import { pageVariants } from "../utils/pageTransitions";

export default function Timer({
  view,
  toggleInProgress,
  showTimer,
  toggleTimer,
  inProgress,
  isStarterActive,
  setIsStarterActive,
  addTime,
  subtractTime,
  minutes,
  seconds,
  reset,
  starterStep,
  setStarterStep,
  go,
}) {
  useEffect(() => {
    let interval = null;
    if (isStarterActive && starterStep < 4) {
      interval = setInterval(() => {
        setStarterStep((starterStep) => starterStep + 1);
      }, 600);
    } else if (starterStep > 3) {
      toggleInProgress(true);
      reset();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStarterActive, starterStep, setStarterStep, toggleInProgress, reset]);

  return (
    <TimerStyle
      key={view}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Time>
        <h3>Timer:</h3>
        <p>
          {minutes}:{seconds === 0 ? "00" : seconds}
        </p>
        <TimeButtons>
          <AlterTimeButton onClick={() => addTime()}>
            <AddCircleSvg />
          </AlterTimeButton>
          <AlterTimeButton
            disabled={minutes === 0 && seconds === 15}
            onClick={() => subtractTime()}
          >
            <MinusCircleSvg />
          </AlterTimeButton>
        </TimeButtons>
      </Time>
      <StartPillButton
        onClick={() => {
          // go();
        }}
      >
        START
      </StartPillButton>
    </TimerStyle>
  );
}

const TimerStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
`;

const Time = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 2fr 1fr 1fr;
  place-items: center;
`;
const TimeButtons = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 10px;
  color: darkred;
`;

const AlterTimeButton = styled.button`
  color: white;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  :focus {
    color: blue;
  }
`;

const StartPillButton = styled(LargePillButton)`
  grid-row: 1;
  grid-column: 1/-1;
  width: 200px;
  margin-bottom: 20px;
  margin-top: 30px;
`;
