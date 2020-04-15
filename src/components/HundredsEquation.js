import React from "react";
import styled from "styled-components";
import Operand from "./Operand";
import DivideSvg from "./DivideSvg";
import XSvg from "./XSvg";
export default function HundredsEquation({
  digits,
  view,
  isCorrect,
  options,
  solution,
  answer,
  handleInputChange,
}) {
  return (
    <Label htmlFor="answer">
      <FirstOperandContainer className="operandContainer">
        <GhostOperand>{digits[0]}</GhostOperand>
        <Operand digit={digits[0]} />
      </FirstOperandContainer>
      <OperatorContainer>
        {view === "/" && <DivideSvg />}
        {view === "x" && <XSvg />}
        {view === "+" && <p>+</p>}
        {view === "-" && <p>-</p>}
      </OperatorContainer>
      <SecondOperandContainer>
        <GhostOperand>{digits[1]}</GhostOperand>
        <Operand digit={digits[1]} />
      </SecondOperandContainer>
      {/* <p className="equals">=</p> */}

      <InputDiv>
        {isCorrect === false && <RevealCorrect>{solution}</RevealCorrect>}
        <Input
          disabled={options === true}
          hide={isCorrect === false}
          id="answer"
          type="number"
          pattern="[0-9]*"
          // ref={inputEl}
          value={answer}
          name="answer"
          onChange={(e) => handleInputChange(e)}
        />
      </InputDiv>
    </Label>
  );
}

const Label = styled.label`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 145px 145px;
  grid-template-rows: 80px 80px 80px;
  grid-template-areas:
    "empty digit0"
    "operator digit1"
    "blank answer";
`;

const RevealCorrect = styled.span`
  color: red;
  position: absolute;
  top: 0px;
  /* left: 10px; */
`;

const OperatorContainer = styled.div`
  justify-self: end;
  grid-area: operator;
`;

const GhostOperand = styled.p`
  color: transparent;
`;

const InputDiv = styled.div`
  position: relative;
  grid-area: answer;
  border-top: 2px solid var(--white);
  direction: rtl;
`;

const Input = styled.input`
  /* grid-area: answer; */
  /* justify-self: end; */
  padding: 0;
  /* height: 100%; */
  font: inherit;
  background: transparent;
  border: none;
  /* width: 3ch; */
  color: ${(props) => (props.hide ? `transparent` : "white")};
  caret-color: white;
  /* margin-left: 16px; */
  &:focus {
    outline: none;
  }
`;

const FirstOperandContainer = styled.div`
  grid-area: digit0;
  position: relative;
  padding: 0 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-self: end;
`;
const SecondOperandContainer = styled.div`
  grid-area: digit1;
  position: relative;
  padding: 0 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-self: end;
`;
//  <div className="right-wrong">{isCorrect && <p>Right!</p>}</div>
//       <div className="right-wrong">
//           <p>Right!</p>
//         </div>
