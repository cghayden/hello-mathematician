import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import HorizontalEquation from "./HorizontalEquation";
// import VerticalEquation from "./VerticalEquation";
import DeleteSvg from "./DeleteSvg";
import CheckmarkSvg from "./CheckmarkSvg";

const soundEffectSources = [
  `https://res.cloudinary.com/coreytesting/video/upload/v1587575773/sounds/yippee.wav`,
  `https://res.cloudinary.com/coreytesting/video/upload/v1587575766/sounds/jingleWin1.wav`,
  `https://res.cloudinary.com/coreytesting/video/upload/v1587575762/sounds/homerWoohoo1.wav`,
  `https://res.cloudinary.com/coreytesting/video/upload/v1587575747/sounds/coin1.wav`,
  `https://res.cloudinary.com/coreytesting/video/upload/v1584720407/sounds/wooYeah.wav`,
];

function getRandom(maxValue) {
  return Math.floor(Math.random() * maxValue) + 1;
}

export default function EquationDiv({
  view,
  maxValue = 10,
  setScore,
  options,
  wrongOnes,
  setWrongOnes,
  setCount,
  inProgress,
}) {
  const [digits, setDigits] = useState([]);
  const [solution, setSolution] = useState();
  const [reduceEquationSize, setReduceEquationSize] = useState(false);
  const [correctSoundSrc, setCorrectSoundSrc] = useState();

  const inputEl = useRef(null);
  useEffect(setup, [view, maxValue]);

  useEffect(() => {
    const soundIndex = Math.floor(Math.random() * 5);
    setCorrectSoundSrc(soundEffectSources[soundIndex]);
  }, [digits]);

  useEffect(() => {
    if (view === "+") {
      setSolution(digits[0] + digits[1]);
    }
    if (view === "-") {
      setSolution(digits[0] - digits[1]);
    }
    if (view === "x") {
      setSolution(digits[0] * digits[1]);
    }
    if (view === "/") {
      setSolution(digits[0] / digits[1]);
    }
  }, [view, digits]);

  useEffect(() => {
    if (view === "x" || "/") {
      if (maxValue > 31) {
        setReduceEquationSize(true);
      } else {
        setReduceEquationSize(false);
      }
    }
    if (view === "+" || "-") {
      if (maxValue > 499) {
        setReduceEquationSize(true);
      } else {
        setReduceEquationSize(false);
      }
    }
  }, [maxValue, view, setReduceEquationSize]);

  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState();
  const correctAudio = useRef(null);
  const wrongAudio = useRef(null);

  function handleInputChange(e) {
    setAnswer(e.target.value, 10);
  }

  function setup() {
    const n1 = getRandom(maxValue);
    const n2 = getRandom(maxValue);
    const array = [n1, n2];
    if (view === "-") {
      setDigits(array.sort((a, b) => b - a));
    }
    if (view === "/") {
      const dividend = n1 * n2;
      setDigits([dividend, n1]);
    } else {
      setDigits(array);
    }
  }

  function nextProblem() {
    setAnswer("");
    setIsCorrect();
    setup();
  }

  function checkAnswer(e) {
    e.preventDefault();
    if (inProgress) {
      setCount((count) => count + 1);
    }
    if (parseInt(answer, 10) === solution) {
      setIsCorrect(true);
      correctAudio.current.play();
      if (inProgress) {
        setScore((score) => score + 1);
      }
    } else {
      setIsCorrect(false);
      wrongAudio.current.play();
      const equation = `${digits[0]} ${view} ${digits[1]} = ${solution}`;
      if (inProgress) {
        setWrongOnes([...wrongOnes, equation]);
      }
    }
    setTimeout(() => nextProblem(), 750);
  }

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function handleCalcButton(e) {
    const number = e.target.innerHTML;
    setAnswer((answer) => answer + number);
  }
  function deleteOneInput() {
    setAnswer((answer) => answer.slice(0, -1));
  }

  return (
    <>
      <HorizontalEquation
        digits={digits}
        view={view}
        isCorrect={isCorrect}
        options={options}
        solution={solution}
        answer={answer}
        handleInputChange={handleInputChange}
        checkAnswer={checkAnswer}
        inputEl={inputEl}
        reduceEquationSize={reduceEquationSize}
      />
      {/* {maxValue < 49 ? (
        <HorizontalEquation
          digits={digits}
          view={view}
          isCorrect={isCorrect}
          options={options}
          solution={solution}
          answer={answer}
          handleInputChange={handleInputChange}
          checkAnswer={checkAnswer}
          inputEl={inputEl}
        />
      ) : (
        <VerticalEquation
          digits={digits}
          view={view}
          isCorrect={isCorrect}
          options={options}
          solution={solution}
          answer={answer}
          handleInputChange={handleInputChange}
          checkAnswer={checkAnswer}
          inputEl={inputEl}
        />
      )} */}

      {/* <SubmitPillButton type="submit" form="inputForm">
        Submit
      </SubmitPillButton> */}
      <Calculator>
        {buttons.map((number) => (
          <CalcButton key={number} onClick={(e) => handleCalcButton(e)}>
            {number}
          </CalcButton>
        ))}
        <CalcButton className="deleteButton" onClick={() => deleteOneInput()}>
          <DeleteSvg />
        </CalcButton>
        <CalcButton onClick={(e) => handleCalcButton(e)}>0</CalcButton>
        <CalcButton
          className="submitCheckButton"
          type="submit"
          form="inputForm"
        >
          <CheckmarkSvg />
        </CalcButton>
      </Calculator>
      <audio ref={correctAudio} preload="true" src={correctSoundSrc} />
      <audio
        ref={wrongAudio}
        preload="true"
        src="https://res.cloudinary.com/coreytesting/video/upload/v1584721830/sounds/wrongSoft.mp3"
      />
    </>
  );
}

const Calculator = styled.div`
  margin: 0 auto;
  width: 250px;
  display: grid;
  grid-template-columns: 60px 60px 60px;
  grid-template-rows: auto;
  row-gap: 8px;
  column-gap: 26px;
  margin-top: 15px;
  justify-content: center;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const CalcButton = styled.button`
  width: 62px;
  height: 62px;
  padding: 0;
  border-radius: 50%;
  border: none;
  font-size: 32px;
  background: var(--white);
  color: var(--dark);
  display: grid;
  place-items: center;
  &.deleteButton {
    padding-right: 2px;
    svg {
      display: block;
      margin: auto;
    }
  }
  &.submitCheckButton {
    svg {
      display: block;
      margin: auto;
    }
  }
`;
