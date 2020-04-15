import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Navigation from "./Navigation";
import GlobalStyles from "./GlobalStyles";
import EquationDiv from "./EquationDiv";
import HamburgerSvg from "./HamburgerSvg";
import Options from "./Options";
import ActiveOperationHeading from "./ActiveOperationHeading";
const equationVariants = {
  active: { opacity: 1 },
  hidden: { opacity: 0 },
};

const optionsVariants = {
  closed: { height: `0px` },
  open: { height: `70vh` },
};

export default function App() {
  const [options, toggleOptions] = useState(false);
  const [optionsView, setOptionsView] = useState("timer");
  const [maxValue, setMaxValue] = useState(10);
  const [score, setScore] = useState(0);
  const [inProgress, toggleInProgress] = useState(false);
  const [isStarterActive, setIsStarterActive] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(15);
  const [starterStep, setStarterStep] = useState(1);
  const [view, setView] = useState("+");
  const [wrongOnes, setWrongOnes] = useState([]);

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
          {/* <button onClick={() => toggleOptions((options) => !options)}>
            <HamburgerSvg />
          </button> */}
        </Header>
        <Navigation
          inProgress={inProgress}
          view={view}
          setView={setView}
          toggleOptions={toggleOptions}
          options={options}
        />
        <ActiveOperationHeading view={view} maxValue={maxValue} />

        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={equationVariants}
            key={"equation"}
            initial="hidden"
            animate={options ? "hidden" : "active"}
            exit={"hidden"}
            style={{ alignSelf: "start" }}
          >
            <EquationDiv
              view={view}
              options={options}
              maxValue={maxValue}
              setScore={setScore}
              wrongOnes={wrongOnes}
              setWrongOnes={setWrongOnes}
            />
          </motion.div>
        </AnimatePresence>

        <OptionsContainer
          variants={optionsVariants}
          initial="closed"
          animate={options ? "open" : "closed"}
          exit={"close"}
          transition={{ duration: optionsView === "starter" ? 3 : 0.5 }}
        >
          <Options
            score={score}
            setScore={setScore}
            toggleInProgress={toggleInProgress}
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
            toggleOptions={toggleOptions}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            inProgress={inProgress}
            optionsView={optionsView}
            setOptionsView={setOptionsView}
            wrongOnes={wrongOnes}
            setWrongOnes={setWrongOnes}
          />
        </OptionsContainer>
      </AppContainer>
    </React.Fragment>
  );
}

const AppContainer = styled.div`
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px auto 60px 1fr;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  height: 100vh;
`;
const Header = styled.header`
  h1 {
    font-size: 30px;
  }

  @media screen and (max-width: 370px) {
    font-size: 16px;
  }
`;

const OptionsContainer = styled(motion.div)`
  max-width: 600px;
  position: fixed;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  overflow: hidden;
  border-radius: 10px;
  width: 90vw;
  top: 150px;
  color: var(--dark);
  background: var(--light);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;
