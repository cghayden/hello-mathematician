import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import MinusCircleSvg from "./MinusCircleSvg";
import AddCircleSvg from "./AddCircleSvg";
import ClockSvg from "./ClockSvg";
import SmallPillButton from "./SmallPillButton";

export default function Timer({
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
    <AnimatePresence exitBeforeEnter>
      {!inProgress && !showTimer && !isStarterActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ToggleTimerButton
            type="button"
            onClick={() => {
              toggleTimer(true);
            }}
          >
            <ClockSvg />
            {inProgress ? "clock is running" : "Timer"}
          </ToggleTimerButton>
        </motion.div>
      )}
      {showTimer && !isStarterActive && (
        <motion.div
          key={2}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          // style={{ overflow: "hidden" }}
        >
          <TimerStyle>
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
            <SmallPillButton
              style={{ color: "var(--blue)" }}
              onClick={() => toggleTimer(false)}
            >
              Cancel
            </SmallPillButton>
          </TimerStyle>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const TimerStyle = styled.div`
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
const ToggleTimerButton = styled.button`
  cursor: pointer;
  font-size: 22px;
  padding: 5px 10px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  /* font-size: ${props => (props.active ? "22px" : "18px")}; */
  padding: 0;
  position: relative;
  border-radius: 5px;
  svg{
    padding-right: 5px;
  }
  :focus {
    outline: white auto 5px;
    box-shadow: 0px 0px 2px 2px lightblue;
  }`;
