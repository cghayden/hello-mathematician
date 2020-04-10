import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// import Operand from "./Operand";

export default function Input({
  digits,
  answer,
  setAnswer,
  checkAnswer,
  view,
  isCorrect,
  solution,
}) {
  const inputEl = useRef(null);
  // const labelRef = useRef(null);
  // const callbackRef = useCallback((inputElement) => {
  //   if (inputElement) {
  //     inputElement.focus();
  //   }
  // }, []);
  useEffect(() => {
    inputEl.current.focus();
    // labelRef.current.click();
  }, [digits]);

  function handleInputChange(e) {
    setAnswer(e.target.value, 10);
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={`${digits[0]},${digits[1]},${solution}}`}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <FullEquation
          className="fullEquation"
          id="inputForm"
          action="POST"
          onSubmit={(e) => checkAnswer(e)}
        >
          <label htmlFor="answer">
            <OperandContainer className="operandContainer">
              {/* <GhostOperand>{digits[0]}</GhostOperand> */}
              <p>{digits[0]}</p>
            </OperandContainer>
            <p>{view}</p>
            <OperandContainer>
              {/* <GhostOperand>{digits[1]}</GhostOperand> */}
              <p>{digits[1]}</p>
            </OperandContainer>
            <p className="equals">=</p>
            {isCorrect === false && (
              <span className="revealCorrect">{solution}</span>
            )}
            <input
              autoFocus
              id="answer"
              type="number"
              pattern="[0-9]*"
              ref={inputEl}
              value={answer}
              name="answer"
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </FullEquation>
      </motion.div>
    </AnimatePresence>
  );
}

const FullEquation = styled.form`
  font-family: "Fira Sans";
  position: relative;
  background: transparent;
  display: flex;
  /* grid-template-columns: 2ch 1ch 2ch 1ch 2ch; */
  align-items: center;
  label {
    display: flex;
    padding-right: 10px;
  }
  input {
    padding: 0;
    height: 100%;
    font: inherit;
    background: transparent;
    border: none;
    margin: 0 0;
    width: 90px;
    color: white;
    caret-color: white;
    &:focus {
      outline: none;
    }
  }
  .revealCorrect {
    color: red;
    position: absolute;
    right: 50px;
    top: -50px;
  }
`;

const OperandContainer = styled.div`
  position: relative;
  padding: 0 5px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const GhostOperand = styled.p`
  color: transparent;
`;
