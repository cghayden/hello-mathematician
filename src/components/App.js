import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Navigation from "./Navigation";
import GlobalStyles from "./GlobalStyles";
import MaxValue from "./MaxValue";
import Timer from "./Timer";
import Score from "./Score";
import ClockSvg from "./ClockSvg";
import Equation from "./Equation";

export default function App() {
  const [maxValue, setMaxValue] = useState(10);
  const [score, setScore] = useState(0);
  const [showTimer, toggleTimer] = useState(false);
  const [showScore, toggleScore] = useState(false);
  const [inProgress, toggleInProgress] = useState(false);
  const [isStarterActive, setIsStarterActive] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(15);
  const [starterStep, setStarterStep] = useState(0);
  const [view, setView] = useState("+");
  function addTime() {
    if (seconds === 45) {
      setMinutes((minutes) => minutes + 1);
      setSeconds(0);
    } else {
      setSeconds((seconds) => seconds + 15);
    }
  }

  function subtractTime() {
    if (seconds === 15 && minutes === 0) {
      return;
    }
    if (seconds === 0) {
      setSeconds(45);
      setMinutes((minutes) => minutes - 1);
    } else {
      setSeconds((seconds) => seconds - 15);
    }
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <h1>Hello Mathematician!</h1>
        </Header>
        <Navigation inProgress={inProgress} view={view} setView={setView} />
        <AnimatePresence>
          {/* {!showTimer && !isStarterActive && !showScore && ( */}
          {!showTimer && !showScore && (
            <Equation
              view={view}
              maxValue={maxValue}
              setScore={setScore}
              // isStarterActive={isStarterActive}
              //         inProgress={inProgress}
            />
          )}

          {showTimer && (
            <Timer
              score={score}
              toggleTimer={toggleTimer}
              toggleInProgress={toggleInProgress}
              toggleScore={toggleScore}
              isStarterActive={isStarterActive}
              setIsStarterActive={setIsStarterActive}
              addTime={addTime}
              subtractTime={subtractTime}
              minutes={minutes}
              setMinutes={setMinutes}
              seconds={seconds}
              setSeconds={setSeconds}
              starterStep={starterStep}
              setStarterStep={setStarterStep}
            />
          )}
          {showScore && (
            <Score
              score={score}
              setScore={setScore}
              toggleScore={toggleScore}
              toggleTimer={toggleTimer}
            />
          )}
        </AnimatePresence>

        {!inProgress && !showScore && (
          <OptionsContainer
            animate={{ height: "auto" }}
            showTimer={showTimer}
            className="optionsContainer"
          >
            {/* {!inProgress && !showScore && !isStarterActive && ( */}
            <MaxValue
              maxValue={maxValue}
              setMaxValue={setMaxValue}
              inProgress={inProgress}
            />
            <ToggleTimerButton
              active={showTimer === true}
              type="button"
              onClick={() => toggleTimer(!showTimer)}
            >
              <ClockSvg />
              Timer
            </ToggleTimerButton>
          </OptionsContainer>
        )}
      </AppContainer>
      <div
        style={{
          height: "200px",
          background: "aqua",
        }}
      >
        <input style={{ fontSize: "40px" }} type="text"></input>
      </div>
    </React.Fragment>
  );
}

const AppContainer = styled.div`
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 60px 240px 150px;
  /* grid-template-areas: "header" "nav" "main" "options"; */
  align-items: center;
  text-align: center;
  margin: 0 auto;
  height: 100vh;
  h1 {
    padding: 10px 0;
  }
`;
const Header = styled.header`
  @media screen and (max-width: 370px) {
    font-size: 16px;
  }
`;

const OptionsContainer = styled(motion.div)`
  padding-top: 10px;
  grid-column-gap: 50px;
  place-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 230px));
  grid-template-rows: auto auto;
  place-items: center;
  align-self: start;
`;

const ToggleTimerButton = styled.button`
  cursor: pointer;
  font-size: 22px;
  padding: 5px 10px;
  background: ${(props) => (props.active ? "white" : `none`)};
  color: ${(props) => (props.active ? "var(--blue)" : `none`)};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  border-radius: 50px;
  box-shadow: ${(props) =>
    props.active ? "0px 0px 2px 2px lightblue" : "none"};
  svg {
    padding-right: 5px;
  }
  :focus {
    outline: none;
    box-shadow: 0px 0px 2px 2px lightblue;
  }
`;
