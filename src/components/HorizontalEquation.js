import { useEffect } from 'react';
import styled from 'styled-components';
import Operand from './Operand';
import DivideSvg from './DivideSvg';
import XSvg from './XSvg';
import PlusSvg from './PlusSvg';
import MinusSvg from './MinusSvg';

export default function HorizontalEquation({
  digits,
  view,
  isCorrect,
  options,
  solution,
  answer,
  handleInputChange,
  checkAnswer,
  inputEl,
  reduceEquationSize,
}) {
  useEffect(() => {
    inputEl.current.focus();
  });
  return (
    <Form
      id='inputForm'
      action='POST'
      onSubmit={(e) => checkAnswer(e)}
      className='fullEquation'
      reduceEquationSize={reduceEquationSize}
    >
      <fieldset disabled={options}>
        <Label htmlFor='answer'>
          <OperandContainer className='operandContainer'>
            <GhostOperand>{digits[0]}</GhostOperand>
            <Operand digit={digits[0]} />
          </OperandContainer>
          <OperationContainer>
            {view === '+' && <PlusSvg />}
            {view === '-' && <MinusSvg />}
            {view === '/' && <DivideSvg />}
            {view === 'x' && <XSvg />}
          </OperationContainer>
          <OperandContainer>
            <GhostOperand>{digits[1]}</GhostOperand>
            <Operand digit={digits[1]} />
          </OperandContainer>
          <p className='equals'>=</p>
          <div style={{ position: 'relative' }}>
            {isCorrect === false && <RevealCorrect>{solution}</RevealCorrect>}
            <Input
              disabled={options === true}
              hide={isCorrect === false}
              reduceEquationSize={reduceEquationSize}
              id='answer'
              type='number'
              pattern='[0-9]*'
              ref={inputEl}
              value={answer}
              name='answer'
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </Label>
      </fieldset>
    </Form>
  );
}

const Form = styled.form`
  font-size: 5rem;
  padding-top: 15px;
  font-family: 'Fira Sans';
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.reduceEquationSize ? `50px` : '4rem')};
    padding-top: 0px;
  }
`;
const Label = styled.label`
  padding: 20px 0;
  display: flex;

  .equals {
    margin: -5px 5px 0 5px;
  }
`;

const RevealCorrect = styled.span`
  color: red;
  position: absolute;
  top: 0px;
  left: 10px;
`;

const OperationContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 0 5px 2px 5px;
`;

const GhostOperand = styled.p`
  color: transparent;
`;

const Input = styled.input`
  padding: 0;
  height: 100%;
  font: inherit;
  background: transparent;
  border: none;
  width: 5ch;
  color: ${(props) => (props.hide ? `transparent` : `var(--white)`)};
  caret-color: var(--white);
  margin-left: 5px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    /* reduce width of equation to accomodate larger values */
    width: ${(props) => (props.reduceEquationSize ? `4ch` : `3ch`)};
  }
`;

const OperandContainer = styled.div`
  position: relative;
  padding: 0 5px;
  height: 100%;
  display: flex;
  justify-content: center;
`;
