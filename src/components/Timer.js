import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Starter from "./Starter";

import MinusCircleSvg from "./MinusCircleSvg";
import AddCircleSvg from "./AddCircleSvg";
// import SmallPillButton from "./SmallPillButton";
import LargePillButton from "./LargePillButton";

export default function Timer({
  toggleInProgress,
  toggleTimer,
  isStarterActive,
  setIsStarterActive,
  addTime,
  subtractTime,
  minutes,
  seconds,
  starterStep,
  setStarterStep,
  toggleScore,
}) {
  // function runStarter() {}

  // function reset() {
  //   setIsStarterActive(false);
  //   setStarterStep(1);
  // }

  function go() {
    setIsStarterActive(true);
    const time = minutes * 60000 + seconds * 1000;
    setTimeout(function () {
      console.log("time up");
      toggleScore(true);
      toggleInProgress(false);
    }, time);
  }

  return (
    <>
      {!isStarterActive && (
        <TimerStyle
          key={"time"}
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
              go();
            }}
          >
            START
          </StartPillButton>
        </TimerStyle>
      )}
      {isStarterActive && (
        <Starter
          key={"starter"}
          toggleInProgress={toggleInProgress}
          isStarterActive={isStarterActive}
          setIsStarterActive={setIsStarterActive}
          starterStep={starterStep}
          setStarterStep={setStarterStep}
          toggleTimer={toggleTimer}
        />
      )}
    </>
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

// useEffect(() => {
//   let interval = null;
//   if (isStarterActive && starterStep < 4) {
//     interval = setInterval(() => {
//       setStarterStep((starterStep) => starterStep + 1);
//     }, 600);
//   } else if (starterStep > 3) {
//     clearInterval(interval);
//     setIsStarterActive(false);
//     setStarterStep(1);
//     toggleInProgress(true);
//   }
//   return () => clearInterval(interval);
// }, [isStarterActive, starterStep, setStarterStep, toggleInProgress]);
