import { useEffect } from 'react';
import styled from 'styled-components';
import Operand from './Operand';
import DivideSvg from './DivideSvg';
import XSvg from './XSvg';
export default function VerticalEquation({
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
          <OperandContainer>
            <OperatorContainer>
              {view === '/' && <DivideSvg />}
              {view === 'x' && <XSvg />}
              {view === '+' && <p>+</p>}
              {view === '-' && <p>-</p>}
            </OperatorContainer>
            <GhostOperand>{digits[1]}</GhostOperand>
            <Operand digit={digits[1]} />
          </OperandContainer>
          {/* <p className="equals">=</p> */}
          <VerticalInputDiv>
            {isCorrect === false && <RevealCorrect>{solution}</RevealCorrect>}
            <VerticalInput
              disabled={options === true}
              hide={isCorrect === false}
              id='answer'
              type='number'
              pattern='[0-9]*'
              ref={inputEl}
              value={answer}
              name='answer'
              onChange={(e) => handleInputChange(e)}
            />
          </VerticalInputDiv>
        </Label>
      </fieldset>
    </Form>
  );
}

const Form = styled.form`
  font-size: 5rem;
  font-family: 'Fira Sans';
  position: relative;
  height: 3.5em;
  display: flex;
  justify-content: center;
  align-items: start;
  color: var(--white);
  /* background: red; */
  .right-wrong {
    height: 28px;
    font-size: 20px;
    grid-column: 1/-1;
    color: var(--green);
  }
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;
const Label = styled.label`
  position: relative;
  padding: 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const GhostOperand = styled.p`
  color: transparent;
`;
const VerticalInputDiv = styled.div`
  align-self: flex-end;
  width: 7ch;
  position: absolute;

  bottom: -1.1em;
  border-top: 2px solid var(--white);
`;
const VerticalInput = styled.input`
  direction: rtl;
  border: none;
  padding: 0;
  height: 100%;
  font: inherit;
  background: transparent;
  width: 7ch;
  color: ${(props) => (props.hide ? `transparent` : 'var(--white)')};
  caret-color: var(--white);
  &:focus {
    outline: none;
  }
`;

const RevealCorrect = styled.span`
  color: red;
  position: absolute;
  right: 0;
`;

const OperandContainer = styled.div`
  position: relative;
  align-self: flex-end;
  padding: 0 5px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const OperatorContainer = styled.div`
  position: absolute;
  left: -1.5ch;
`;

//  <div className="right-wrong">{isCorrect && <p>Right!</p>}</div>
//       <div className="right-wrong">
//           <p>Right!</p>
//         </div>
// const FirstOperandContainer = styled.div`
//   position: relative;
//   padding: 0 5px;
//   height: 100%;
//   display: flex;
//   justify-content: center;
// `;
// const OperationContainer = styled.div`
//   display: grid;
//   place-items: center;
//   padding-bottom: 5px;
// `;
