import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import HorizontalEquation from './HorizontalEquation';
import VerticalEquation from './VerticalEquation';
import DeleteSvg from './DeleteSvg';
import CheckmarkSvg from './CheckmarkSvg';
import { useGlobalState } from './GlobalState';

const correctSoundSources = [
  `https://res.cloudinary.com/haydentech/video/upload/v1584720407/sounds/wooYeah.wav`,
  `https://res.cloudinary.com/haydentech/video/upload/v1587575773/sounds/yippee.wav`,
  `https://res.cloudinary.com/haydentech/video/upload/v1587575766/sounds/jingleWin1.wav`,
  `https://res.cloudinary.com/haydentech/video/upload/v1587575762/sounds/homerWoohoo1.wav`,
  `https://res.cloudinary.com/haydentech/video/upload/v1587575747/sounds/coin1.wav`,
];
const wrongSoundSources = [
  `https://res.cloudinary.com/haydentech/video/upload/v1584721830/sounds/wrongSoft.mp3`,
  `https://res.cloudinary.com/haydentech/video/upload/v1587575755/sounds/Doh.wav`,
  `https://res.cloudinary.com/haydentech/video/upload/v1587576928/sounds/wrong2.mp3`,
  `https://res.cloudinary.com/haydentech/video/upload/v1587577359/sounds/negativeBeep.wav`,
  `https://res.cloudinary.com/haydentech/video/upload/v1587577571/sounds/cartoonBingLow.wav`,
];

function getRandom(maxValue: number) {
  return Math.floor(Math.random() * maxValue) + 1;
}

type IisCorrect = {};

export default function EquationDiv({ wrongOnes, setWrongOnes, setCount }) {
  const { maxValue, view, options, inProgress, setScore } = useGlobalState();
  const [digits, setDigits] = useState<number[]>([]);
  const [solution, setSolution] = useState(0);
  const [reduceEquationSize, setReduceEquationSize] = useState(false);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<IisCorrect | null>(null);
  const [showNextButton, toggleShowNextButton] = useState(false);

  const correctAudio = useRef<HTMLAudioElement>(null);
  const wrongAudio = useRef<HTMLAudioElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(setup, [view, maxValue]);

  useEffect(() => {
    if (view === '+') {
      setSolution(digits[0] + digits[1]);
    }
    if (view === '-') {
      setSolution(digits[0] - digits[1]);
    }
    if (view === 'x') {
      setSolution(digits[0] * digits[1]);
    }
    if (view === '/') {
      setSolution(digits[0] / digits[1]);
    }
  }, [view, digits]);

  useEffect(() => {
    if (view === 'x' || '/') {
      if (maxValue > 31) {
        setReduceEquationSize(true);
      } else {
        setReduceEquationSize(false);
      }
    }
    if (view === '+' || '-') {
      if (maxValue > 499) {
        setReduceEquationSize(true);
      } else {
        setReduceEquationSize(false);
      }
    }
  }, [maxValue, view, setReduceEquationSize]);

  function handleInputChange(e) {
    setAnswer(e.target.value);
  }

  function setup() {
    const n1 = getRandom(maxValue);
    const n2 = getRandom(maxValue);
    const array = [n1, n2];
    if (view === '-') {
      setDigits(array.sort((a, b) => b - a));
    }
    if (view === '/') {
      const dividend = n1 * n2;
      setDigits([dividend, n1]);
    } else {
      setDigits(array);
    }
  }

  function nextProblem() {
    setAnswer('');
    setIsCorrect(null);
    setup();
  }

  function checkAnswer(e) {
    e.preventDefault();
    if (inProgress) {
      setCount((count) => count + 1);
    }
    if (parseInt(answer, 10) === solution) {
      setIsCorrect(true);
      correctAudio.current?.play();
      if (inProgress) {
        setScore((score: number) => score + 1);
      }
    } else {
      setIsCorrect(false);
      wrongAudio.current?.play();
      const equation = `${digits[0]} ${view} ${digits[1]} = ${solution}`;
      if (inProgress) {
        setWrongOnes([...wrongOnes, equation]);
        setTimeout(() => nextProblem(), 400);
      }
      if (!inProgress) {
        toggleShowNextButton(true);
        // set ui to show a next button
        // press button = reset next button ui and call nextProblem()
      }
    }
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
      {maxValue > 99 ? (
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
          reduceEquationSize={true}
        />
      ) : (
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
      )}
      <div>
        {showNextButton && (
          <NextButton
            role='button'
            onClick={() => {
              toggleShowNextButton(false);
              nextProblem();
            }}
          >
            Next Problem
          </NextButton>
        )}
      </div>
      <Calculator>
        {buttons.map((number) => (
          <CalcButton key={number} onClick={(e) => handleCalcButton(e)}>
            {number}
          </CalcButton>
        ))}
        <CalcButton className='deleteButton' onClick={() => deleteOneInput()}>
          <DeleteSvg />
        </CalcButton>
        <CalcButton onClick={(e) => handleCalcButton(e)}>0</CalcButton>
        <CalcButton
          className='submitCheckButton'
          type='submit'
          form='inputForm'
        >
          <CheckmarkSvg />
        </CalcButton>
      </Calculator>
      <audio ref={correctAudio} preload='true' src={correctSoundSources[0]} />
      <audio ref={wrongAudio} preload='true' src={wrongSoundSources[0]} />
    </>
  );
}

const NextButton = styled.button`
  background: var(--white);
  color: var(--dark);
  padding: 0.75rem 1.5rem;
  font-size: 20px;
  border-radius: 10px;
  border: none;
`;

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
//edit to repush failed merge to netlify
