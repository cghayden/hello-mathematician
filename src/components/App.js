import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import styled from "styled-components";
import Navigation from "./Navigation";
import GlobalStyles from "./GlobalStyles";
import MaxValue from "./MaxValue";
import Timer from "./Timer";
import Score from "./Score";
import ClockSvg from "./ClockSvg";
import EquationDiv from "./EquationDiv";
import HamburgerSvg from "./HamburgerSvg";
import Starter from "./Starter";
import Options from "./Options";

import { MenuToggle } from "./MenuToggle";
// import { useDimensions } from "./useDimensions";

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.2,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

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
  const [showScore, toggleScore] = useState(false);
  const [inProgress, toggleInProgress] = useState(false);
  const [isStarterActive, setIsStarterActive] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(15);
  const [starterStep, setStarterStep] = useState(0);
  const [view, setView] = useState("+");

  // const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

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
      {/* <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />

        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>  */}
      <AppContainer>
        <Header>
          <h1>Hello Mathematician!</h1>
          <button onClick={() => toggleOptions((options) => !options)}>
            <HamburgerSvg />
          </button>
        </Header>
        <Navigation inProgress={inProgress} view={view} setView={setView} />
        {/* {!showTimer && !showScore && ( */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={equationVariants}
            key={"equation"}
            initial="hidden"
            animate={options ? "hidden" : "active"}
            exit={"hidden"}
            style={{ alignSelf: "start" }}
          >
            <EquationDiv view={view} maxValue={maxValue} setScore={setScore} />
          </motion.div>
        </AnimatePresence>

        <OptionsContainer
          variants={optionsVariants}
          initial="closed"
          animate={options ? "open" : "closed"}
          exit={"close"}
          transition={{ duration: optionsView === "starter" ? 3.5 : 0.5 }}
        >
          <Options
            score={score}
            setScore={setScore}
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
            toggleOptions={toggleOptions}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            inProgress={inProgress}
            optionsView={optionsView}
            setOptionsView={setOptionsView}
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
  grid-template-rows: 70px 60px 1fr;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  margin: 0 auto;
  height: 100vh;
`;
const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px;
  h1 {
    font-size: 30px;
  }
  button {
    border: none;
    padding: 10px;
    margin-left: auto;
    color: var(--dark);
    background: var(--white);
    border-radius: 50px;
    display: grid;
    place-items: center;
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

// const ToggleTimerButton = styled.button`
//   cursor: pointer;
//   font-size: 20px;
//   padding: 5px 10px;
//   background: ${(props) => (props.active ? "var(--white)" : `none`)};
//   color: ${(props) => (props.active ? "var(--dark)" : `var(--orange)`)};
//   border: none;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   position: relative;
//   border-radius: 50px;
//   width: 48px;
//   height: 48px;
//   box-shadow: ${(props) =>
//     props.active ? "0px 0px 2px 2px lightblue" : "none"};
//   :focus {
//     outline: none;
//     box-shadow: 0px 0px 2px 2px lightblue;
//   }
// `;

// {!inProgress && !showScore && (
//   <OptionsContainer
//     animate={{ height: "auto" }}
//     showTimer={showTimer}
//     className="optionsContainer"
//   >
//     {/* {!inProgress && !showScore && !isStarterActive && ( */}
//     <MaxValue
//       maxValue={maxValue}
//       setMaxValue={setMaxValue}
//       inProgress={inProgress}
//     />
//     <ToggleTimerButton
//       title="Set Timer"
//       active={showTimer === true}
//       type="button"
//       onClick={() => toggleTimer(!showTimer)}
//     >
//       <ClockSvg />
//     </ToggleTimerButton>
//   </OptionsContainer>
// )}
