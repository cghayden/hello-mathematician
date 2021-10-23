import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import ActiveOperationHeading from './ActiveOperationHeading';
import EquationDiv from './EquationDiv';
import Footer from './Footer';
import { useGlobalState } from './GlobalState';
import Navigation from './Navigation';
import Options from './Options';

const equationVariants = {
  active: { opacity: 1 },
  hidden: { opacity: 0 },
};

const optionsVariants = {
  closed: { height: `0px` },
  open: { height: `400px` },
};

export default function Ui() {
  const [count, setCount] = useState(0);

  const [starterStep, setStarterStep] = useState(1);
  const [wrongOnes, setWrongOnes] = useState([]);

  const [footer, toggleFooter] = useState(false);
  const { options, toggleOptions, toggleInProgress, setOptionsView, setScore } =
    useGlobalState();

  function reset() {
    setScore(0);
    setCount(0);
    setOptionsView('timer');
    setWrongOnes([]);
    setStarterStep(1);
  }

  return (
    <>
      <HeaderStyles>
        <h1>Hello Mathematician!</h1>
      </HeaderStyles>
      <Navigation />
      <ActiveOperationHeading reset={reset} />
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
            wrongOnes={wrongOnes}
            setWrongOnes={setWrongOnes}
            setCount={setCount}
          />
        </motion.div>
      </AnimatePresence>
      <OptionsContainerStyles
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
          toggleInProgress={toggleInProgress}
          starterStep={starterStep}
          setStarterStep={setStarterStep}
          wrongOnes={wrongOnes}
          count={count}
        />
      </OptionsContainerStyles>
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
    </>
  );
}

const HeaderStyles = styled.header`
  h1 {
    font-size: 30px;
  }
`;

const OptionsContainerStyles = styled(motion.div)`
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
