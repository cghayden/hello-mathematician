import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import MinusCircleSvg from "./MinusCircleSvg";
import AddCircleSvg from "./AddCircleSvg";
import ClockSvg from "./ClockSvg";

const variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function Timer({
  toggleInProgress,
  toggleScore,
  showTimer,
  toggleTimer,
  inProgress
}) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [starterStep, setStarterStep] = useState(0);
  const [isStarterActive, setIsStarterActive] = useState(false);

  function runStarter() {
    setIsStarterActive(true);
  }

  function reset() {
    setIsStarterActive(false);
    setStarterStep(1);
  }

  useEffect(() => {
    let interval = null;
    if (isStarterActive && starterStep < 4) {
      interval = setInterval(() => {
        setStarterStep(starterStep => starterStep + 1);
      }, 700);
    } else if (starterStep > 3) {
      toggleInProgress(true);
      reset();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStarterActive, starterStep, toggleInProgress]);

  function addTime() {
    if (seconds === 45) {
      setMinutes(minutes => minutes + 1);
      setSeconds(0);
    } else {
      setSeconds(seconds => seconds + 15);
    }
  }

  function subtractTime() {
    if (seconds === 15 && minutes === 0) {
      return;
    }
    if (seconds === 0) {
      setSeconds(45);
      setMinutes(minutes => minutes - 1);
    } else {
      setSeconds(seconds => seconds - 15);
    }
  }

  function go() {
    runStarter();
    toggleTimer(false);
    const time = minutes * 60000 + seconds * 1000;
    setTimeout(function() {
      toggleScore(true);
      toggleInProgress(false);
    }, time);
  }

  return (
    <div>
      {!inProgress && !showTimer && !isStarterActive && (
        <TimerButton
          // className={playMode === "timed" ? "underline" : null}
          type="button"
          // active={playMode === "timed"}
          onClick={() => {
            toggleTimer(true);
          }}
        >
          <ClockSvg />
          {inProgress ? "clock is running" : "Timer"}
        </TimerButton>
      )}
      <AnimatePresence>
        {showTimer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            style={{ overflow: "hidden" }}
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
              <StartButton
                onClick={() => {
                  go();
                  // runStarter();
                }}
              >
                START
              </StartButton>
            </TimerStyle>
          </motion.div>
        )}
      </AnimatePresence>
      <ReadySetStyle>
        <AnimatePresence exitBeforeEnter>
          {starterStep === 1 && isStarterActive && (
            <StarterMessage
              key={1}
              variants={variants}
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
              variants={variants}
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
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              Go!...
            </StarterMessage>
          )}
        </AnimatePresence>
      </ReadySetStyle>
    </div>
  );
}

const ReadySetStyle = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
`;
const StarterMessage = styled(motion.p)`
  font-size: 22px;
  display: inline-block;
`;
const TimerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 22px;
`;

const Time = styled.div`
  display: grid;
  grid-gap: 15px;
  font-size: 26px;
  grid-template-columns: 2fr 1fr 1fr;
  place-items: center;
`;
const TimeButtons = styled.div`
  display: grid;
  grid-template-rows: 22px 22px;
  grid-gap: 10px;
  color: darkred;
`;

const StartButton = styled.button`
  height: 40px;
  width: 80px;
  font-size: 22px;
  border: none;
  border-radius: 5px;
  color: white;
  margin-top: 5px;
  padding-bottom: 4px;
  background-color: transparent;
  :focus {
    border: 1px solid blue;
  }
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
const TimerButton = styled.button`
cursor: pointer;
display: grid;
grid-template-columns: 1fr 2fr;
grid-gap: 10px;
font-size: 22px;
  padding: 5px 10px;
  background: none;
  border: none;
  display: flex;
  justify-content: space-around;
  color: white;
  /* font-size: ${props => (props.active ? "22px" : "18px")}; */
  padding: 0;
  position: relative;
  border-radius: 5px;
  :focus {
    outline: white auto 5px;
    box-shadow: 0px 0px 2px 2px lightblue;
  }`;
