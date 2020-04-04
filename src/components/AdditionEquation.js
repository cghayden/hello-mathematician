import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/pageTransitions";
import Equation from "../styles/Equation";
import GhostOperand from "../styles/GhostOperand";
import NumberInput from "../styles/NumberInput";
import OperandContainer from "../styles/OperandContainer";
import Operand from "./Operand";
import Operator from "../styles/Operator";
import SubmitPillButton from "./SubmitPillButton";

const initialInput = "";

function getRandom(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

export default function AdditionEquation({
  maxValue = 20,
  setScore,
  inProgress
}) {
  const [answer, setAnswer] = useState(initialInput);
  const [digit1, setDigit1] = useState();
  const [digit2, setDigit2] = useState();
  const [isCorrect, setIsCorrect] = useState();
  const inputEl = useRef(null);
  const correctAudio = useRef(null);
  const wrongAudio = useRef(null);

  useEffect(() => {
    setDigit1(getRandom(maxValue));
    setDigit2(getRandom(maxValue));
  }, [maxValue]);
  useEffect(() => {
    inputEl.current.focus();
  });

  function nextProblem() {
    setAnswer(initialInput);
    setDigit1(getRandom(maxValue));
    setDigit2(getRandom(maxValue));
    setIsCorrect();
    inputEl.current.focus();
  }

  function checkAnswer(e, answer, digit1, digit2) {
    e.preventDefault();
    const correctAnswer = digit1 + digit2;
    if (parseInt(answer, 10) === correctAnswer) {
      correctAudio.current.play();
      setScore(score => score + 1);
    } else {
      wrongAudio.current.play();
    }
    setIsCorrect(parseInt(answer, 10) === correctAnswer);
    setTimeout(() => nextProblem(), 300);
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Equation>
        <div className="right-wrong">{isCorrect && <p>Right!</p>}</div>
        <div className="fullEquation">
          <OperandContainer>
            <GhostOperand>{digit1}</GhostOperand>
            <Operand digit={digit1} />
          </OperandContainer>
          <Operator>+</Operator>
          <OperandContainer>
            <GhostOperand>{digit2}</GhostOperand>
            <Operand digit={digit2} />
          </OperandContainer>
          <p className="equals">
            =
            {isCorrect === false && (
              <span className="revealCorrect">{digit1 + digit2}</span>
            )}
          </p>
          <NumberInput
            id="numberInput"
            method="POST"
            onSubmit={e => checkAnswer(e, answer, digit1, digit2)}
          >
            <input
              type="number"
              pattern="[0-9]*"
              ref={inputEl}
              value={answer}
              name="answer"
              onChange={e => setAnswer(e.target.value, 10)}
            />
          </NumberInput>
        </div>
        <SubmitPillButton form="numberInput" type="submit">
          <p>Submit</p>
        </SubmitPillButton>
      </Equation>
      <audio
        ref={correctAudio}
        preload="true"
        src="https://res.cloudinary.com/coreytesting/video/upload/v1584720407/sounds/wooYeah.wav"
      />
      <audio
        ref={wrongAudio}
        src="https://res.cloudinary.com/coreytesting/video/upload/v1584721830/sounds/wrongSoft.mp3"
      />
    </motion.div>
  );
}
