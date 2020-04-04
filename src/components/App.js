import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation, Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Navigation from "./Navigation";
import AdditionEquation from "./AdditionEquation";
import SubtractionEquation from "./SubtractionEquation";
import MultiplicationEquation from "./MultiplicationEquation";
// import DivisionEquation from "./DivisionEquation";
import GlobalStyles from "./GlobalStyles";
import MaxValue from "./MaxValue";
import Timer from "./Timer";
import Score from "./Score";
import LargePillButton from "./LargePillButton";
import Starter from "./Starter";

const Container = styled.div`
  text-align: center;
  margin: 0;
  height: 100vh;
  h1 {
    padding: 10px 0;
  }
`;
const Header = styled.header`
  padding: 30px 30px 10px 30px;
  font-size: 20px;
  @media screen and (max-width: 370px) {
    font-size: 16px;
  }
`;

export default function App() {
  const [maxValue, setMaxValue] = useState(20);
  const [score, setScore] = useState(0);
  const [showTimer, toggleTimer] = useState(false);
  const [showScore, toggleScore] = useState(false);
  const [inProgress, toggleInProgress] = useState(false);
  const [isStarterActive, setIsStarterActive] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const location = useLocation();
  const [starterStep, setStarterStep] = useState(0);

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

  function runStarter() {
    setIsStarterActive(true);
  }
  function go() {
    const time = minutes * 60000 + seconds * 1000;
    runStarter();
    toggleTimer(false);
    setTimeout(function() {
      toggleScore(true);
      toggleInProgress(false);
    }, time);
  }
  function reset() {
    setIsStarterActive(false);
    setStarterStep(1);
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Header>
          <h1>
            <Link to="/">Hello Mathematician!</Link>
          </h1>
        </Header>
        <Navigation toggleTimer={toggleTimer} />
        <AnimatePresence exitBeforeEnter>
          {!showTimer && !isStarterActive && !showScore && (
            <motion.div
              exit={{ height: 0, overflow: "hidden", opacity: 0 }}
              // transition={{
              //   opacity: { duration: 0 }
              // }}
            >
              <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                  <Redirect to="/addition" />
                  {/* <AdditionEquation
                    visible={!showTimer}
                    maxValue={maxValue}
                    setScore={setScore}
                    showScore={showScore}
                    isStarterActive={isStarterActive}
                    inProgress={inProgress}
                  /> */}
                </Route>
                <Route exact path="/addition">
                  <AdditionEquation
                    visible={!showTimer}
                    maxValue={maxValue}
                    setScore={setScore}
                    showScore={showScore}
                    isStarterActive={isStarterActive}
                    inProgress={inProgress}
                  />
                </Route>
                <Route exact path="/subtraction">
                  <SubtractionEquation
                    visible={!showTimer}
                    maxValue={maxValue}
                    setScore={setScore}
                  />
                </Route>
                <Route exact path="/multiplication">
                  <MultiplicationEquation
                    visible={!showTimer}
                    maxValue={maxValue}
                    setScore={setScore}
                  />
                </Route>
                {/* <Route exact path="/division">
                <DivisionEquation
                  visible={!showTimer}
                  maxValue={maxValue}
                  setScore={setScore}
                />
              </Route> */}
              </Switch>
            </motion.div>
          )}
        </AnimatePresence>
        {showTimer && (
          <StartPillButton
            onClick={() => {
              go();
            }}
          >
            START
          </StartPillButton>
        )}
        {!inProgress && !showScore && !isStarterActive && (
          <OptionsContainer
            animate={{ height: "auto" }}
            showTimer={showTimer}
            className="optionsContainer"
          >
            <MaxValue
              maxValue={maxValue}
              setMaxValue={setMaxValue}
              inProgress={inProgress}
            />

            {!showScore && (
              <Timer
                score={score}
                showTimer={showTimer}
                toggleTimer={toggleTimer}
                toggleInProgress={toggleInProgress}
                toggleScore={toggleScore}
                inProgress={inProgress}
                isStarterActive={isStarterActive}
                setIsStarterActive={setIsStarterActive}
                addTime={addTime}
                subtractTime={subtractTime}
                minutes={minutes}
                setMinutes={setMinutes}
                seconds={seconds}
                setSeconds={setSeconds}
                reset={reset}
                starterStep={starterStep}
                setStarterStep={setStarterStep}
              />
            )}
          </OptionsContainer>
        )}
        {showScore && (
          <Score
            score={score}
            setScore={setScore}
            toggleScore={toggleScore}
            toggleTimer={toggleTimer}
          />
        )}
        {isStarterActive && (
          <Starter
            score={score}
            showTimer={showTimer}
            toggleTimer={toggleTimer}
            toggleInProgress={toggleInProgress}
            toggleScore={toggleScore}
            inProgress={inProgress}
            isStarterActive={isStarterActive}
            setIsStarterActive={setIsStarterActive}
            addTime={addTime}
            subtractTime={subtractTime}
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
            reset={reset}
            starterStep={starterStep}
            setStarterStep={setStarterStep}
          />
        )}
      </Container>
    </React.Fragment>
  );
}

const OptionsContainer = styled(motion.div)`
  grid-column-gap: 50px;
  place-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 230px));
  grid-template-rows: auto auto;
  place-items: center;
`;
const StartPillButton = styled(LargePillButton)`
  grid-row: 1;
  grid-column: 1/-1;
  width: 200px;
  margin-bottom: 20px;
  margin-top: 30px;
`;
