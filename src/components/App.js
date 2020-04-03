import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themeVariables";
import Home from "./Home";
import Navigation from "./Navigation";
import AdditionEquation from "./AdditionEquation";
import SubtractionEquation from "./SubtractionEquation";
import MultiplicationEquation from "./MultiplicationEquation";
import DivisionEquation from "./DivisionEquation";
import GlobalStyles from "./GlobalStyles";
import MaxValue from "./MaxValue";
import Timer from "./Timer";
import Score from "./Score";
import LargePillButton from "./LargePillButton";

const Container = styled.div`
  text-align: center;
  margin: 0;
  height: 100vh;
  h1 {
    padding: 10px 0;
  }
`;
const Header = styled.header`
  padding-top: 20px;
`;

export default function App() {
  const [maxValue, setMaxValue] = useState(20);
  const [score, setScore] = useState(0);
  const [showTimer, toggleTimer] = useState(false);
  const [showScore, toggleScore] = useState(false);
  const [inProgress, toggleInProgress] = useState(false);
  const [isStarterActive, setIsStarterActive] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const location = useLocation();

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
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header>
            <h1>
              <Link to="/">Hello Mathematician!</Link>
            </h1>
          </Header>
          <Navigation toggleTimer={toggleTimer} />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <Home />
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
          </AnimatePresence>
          <OptionsContainer showTimer={showTimer} className="optionsContainer">
            {!inProgress && !showScore && !isStarterActive && (
              <MaxValue
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                inProgress={inProgress}
              />
            )}
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
              />
            )}
            {showTimer && (
              <StartPillButton
                onClick={() => {
                  go();
                }}
              >
                START
              </StartPillButton>
            )}
          </OptionsContainer>
          {showScore && (
            <Score
              score={score}
              setScore={setScore}
              toggleScore={toggleScore}
              toggleTimer={toggleTimer}
            />
          )}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

const OptionsContainer = styled.div`
  margin-top: ${props => (props.showTimer ? `-150px` : "0")};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 80px;
  place-items: center;
`;
const StartPillButton = styled(LargePillButton)`
  grid-row: 2;
  grid-column: 1/-1;
  width: 200px;
`;
