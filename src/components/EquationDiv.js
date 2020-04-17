import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import HorizontalEquation from "./HorizontalEquation";
import VerticalEquation from "./VerticalEquation";
import DeleteSvg from "./DeleteSvg";
import CheckmarkSvg from "./CheckmarkSvg";
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
}) {
  const [digits, setDigits] = useState([]);
  const [solution, setSolution] = useState();
  // const inputEl = useRef(null);
  useEffect(setup, [view, maxValue]);

  // useEffect(() => {
  //   inputEl.current.focus();
  // });

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
    // inputEl.current.focus();
  }

  function nextProblem() {
    setAnswer("");
    setIsCorrect();
    setup();
  }

  function checkAnswer(e) {
    e.preventDefault();
    if (parseInt(answer, 10) === solution) {
      setIsCorrect(true);
      correctAudio.current.play();
      setScore((score) => score + 1);
    } else {
      setIsCorrect(false);
      wrongAudio.current.play();
      const equation = `${digits[0]} ${view} ${digits[1]} = ${solution}`;
      setWrongOnes([...wrongOnes, equation]);
    }
    setTimeout(() => nextProblem(), 400);
  }

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function handleCalcButton(e) {
    const number = e.target.innerHTML;
    setAnswer((answer) => answer + number);
  }
  function deleteOneInput() {
    setAnswer((answer) => answer.slice(0, -1));
    // inputEl.current.focus();
  }
  // if(maxValue > 99) return(
  //   <LargeEquation/>
  // )
  return (
    <>
      {maxValue < 49 ? (
        <HorizontalEquation
          digits={digits}
          view={view}
          isCorrect={isCorrect}
          options={options}
          solution={solution}
          answer={answer}
          handleInputChange={handleInputChange}
          checkAnswer={checkAnswer}
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
        />
      )}

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
      <audio
        ref={correctAudio}
        preload="true"
        src="https://res.cloudinary.com/coreytesting/video/upload/v1584720407/sounds/wooYeah.wav"
      />
      <audio
        ref={wrongAudio}
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
  row-gap: 10px;
  column-gap: 26px;
  /* padding: 20px 10px; */
  margin-top: 15px;
  justify-content: center;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const CalcButton = styled.button`
  width: 64px;
  height: 64px;
  padding: 0;
  border-radius: 50%;
  border: none;
  font-size: 32px;
  background: white;
  color: var(--dark);
  display: grid;
  place-items: center;
  &.deleteButton {
    padding-right: 2px;
    svg {
      display: block;
      margin: auto;
      /* color: var(--red); */
    }
  }
  &.submitCheckButton {
    svg {
      display: block;
      margin: auto;
      /* color: var(--light); */
    }
  }
`;
