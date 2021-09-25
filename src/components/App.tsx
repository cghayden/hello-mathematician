import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navigation from './Navigation';
import GlobalStyles from './GlobalStyles';
import EquationDiv from './EquationDiv';
import Options from './Options';
import ActiveOperationHeading from './ActiveOperationHeading';
import Footer from './Footer';

const equationVariants = {
  active: { opacity: 1 },
  hidden: { opacity: 0 },
};

const optionsVariants = {
  closed: { height: `0px` },
  open: { height: `400px` },
};

export default function App() {
  const [options, toggleOptions] = useState(false);
  const [optionsView, setOptionsView] = useState('timer');
  const [maxValue, setMaxValue] = useState(10);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [inProgress, toggleInProgress] = useState(false);
  const [isStarterActive, setIsStarterActive] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [starterStep, setStarterStep] = useState(1);
  const [view, setView] = useState<View>('+');
  const [wrongOnes, setWrongOnes] = useState([]);
  const [timeoutId, setTimeoutId] = useState(1);
  const [footer, toggleFooter] = useState(false);

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

  function reset() {
    setScore(0);
    setCount(0);
    setOptionsView('timer');
    setWrongOnes([]);
    setStarterStep(1);
  }

  function cancelTimer(timeoutId: number) {
    console.log('cancel timer');
    clearTimeout(timeoutId);
    toggleInProgress(false);
    reset();
  }

  function go() {
    setOptionsView('starter');
    // toggleOptions(false);
    const time = minutes * 60000 + seconds * 1000;
    //use window.setTimeout because typescript was confusing it with global(Node) version
    const newTimeoutID = window.setTimeout(() => {
      setOptionsView('score');
      toggleOptions(true);
      toggleInProgress(false);
    }, time);

    setTimeoutId(newTimeoutID);
  }

  return (
    <>
      <GlobalStyles />
      <AppContainerStyles>
        <HeaderStyles>
          <h1>Hello Mathematician!</h1>
        </HeaderStyles>
        <Navigation
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          view={view}
          setView={setView}
          cancelTimer={cancelTimer}
          timeoutId={timeoutId}
        />
        <ActiveOperationHeading
          view={view}
          maxValue={maxValue}
          toggleOptions={toggleOptions}
          options={options}
          inProgress={inProgress}
          reset={reset}
        />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={equationVariants}
            key={'equation'}
            initial='hidden'
            animate={options ? 'hidden' : 'active'}
            exit={'hidden'}
            style={{ alignSelf: 'start' }}
          >
            <EquationDiv
              view={view}
              options={options}
              maxValue={maxValue}
              setScore={setScore}
              wrongOnes={wrongOnes}
              setWrongOnes={setWrongOnes}
              setCount={setCount}
              inProgress={inProgress}
            />
          </motion.div>
        </AnimatePresence>
        <OptionsContainer
          variants={optionsVariants}
          initial='closed'
          animate={options ? 'open' : 'closed'}
          exit={'close'}
          transition={{
            duration: 0.4,
          }}
        >
          <CloseOptionsSvg>
            <button
              onClick={() => {
                toggleOptions(false);
                setTimeout(() => {
                  reset();
                }, 1000);
              }}
            >
              X
            </button>
          </CloseOptionsSvg>
          <Options
            reset={reset}
            score={score}
            inProgress={inProgress}
            toggleInProgress={toggleInProgress}
            isStarterActive={isStarterActive}
            setIsStarterActive={setIsStarterActive}
            addTime={addTime}
            subtractTime={subtractTime}
            minutes={minutes}
            seconds={seconds}
            starterStep={starterStep}
            setStarterStep={setStarterStep}
            toggleOptions={toggleOptions}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            optionsView={optionsView}
            setOptionsView={setOptionsView}
            wrongOnes={wrongOnes}
            view={view}
            count={count}
            go={go}
          />
        </OptionsContainer>
        <ShowFooterButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => toggleFooter((footer) => !footer)}
        >
          ?
        </ShowFooterButton>
        <Footer isToggled={footer} toggleFooter={toggleFooter} />
      </AppContainerStyles>
    </>
  );
}

const AppContainerStyles = styled.div`
  max-width: 600px;
  place-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px auto 80px 1fr;
  align-items: center;
  text-align: center;
  margin: 15px auto 0;
  @media screen and (max-width: 768px) {
    margin: 0 auto 0;
    font-size: 16px;
    grid-template-rows: 70px auto 52px 1fr;
  }
`;
const HeaderStyles = styled.header`
  h1 {
    font-size: 30px;
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
  top: 230px;
  color: var(--dark);
  background: var(--light);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  @media screen and (max-width: 768px) {
    top: 180px;
  }
`;

const CloseOptionsSvg = styled.div`
  position: fixed;
  right: 8px;
  top: 8px;
  button {
    padding: 3px 14px;
    border-radius: 36px;
    font-size: 20px;
    border: none;
  }
`;
const ShowFooterButton = styled(motion.button)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  position: fixed;
  bottom: 3%;
  right: 3%;
  background: none;
  padding: 10px;
  outline: none;
  border: none;
  color: var(--white);
  :focus {
    box-shadow: 0px 0px 2px 2px var(--white);
  }
  @media screen and (max-width: 768px) {
    bottom: 1%;
  }
`;
