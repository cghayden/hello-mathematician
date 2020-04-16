import React from "react";
import styled from "styled-components";
import Operand from "./Operand";
import DivideSvg from "./DivideSvg";
import XSvg from "./XSvg";
export default function Equation({
  digits,
  view,
  isCorrect,
  options,
  solution,
  answer,
  handleInputChange,
  checkAnswer,
}) {
  return (
    <Form
      id="inputForm"
      action="POST"
      onSubmit={(e) => checkAnswer(e)}
      className="fullEquation"
    >
      <fieldset disabled={options}>
        <Label htmlFor="answer">
          <OperandContainer className="operandContainer">
            <GhostOperand>{digits[0]}</GhostOperand>
            <Operand digit={digits[0]} />
          </OperandContainer>
          <OperationContainer>
            {view === "/" && <DivideSvg />}
            {view === "x" && <XSvg />}
            {view === "+" && <p>+</p>}
            {view === "-" && <p>-</p>}
          </OperationContainer>
          <OperandContainer>
            <GhostOperand>{digits[1]}</GhostOperand>
            <Operand digit={digits[1]} />
          </OperandContainer>
          <p className="equals">=</p>

          <div style={{ position: "relative" }}>
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
          </div>
        </Label>
      </fieldset>
    </Form>
  );
}

const Form = styled.form`
  font-size: 4rem;
  font-family: "Fira Sans";
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  .right-wrong {
    height: 28px;
    font-size: 20px;
    grid-column: 1/-1;
    color: var(--green);
  }
  @media screen and (max-width: 414px) {
    font-size: 4rem;
  }
`;
const Label = styled.label`
  padding: 20px 0;
  display: flex;
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
  padding-bottom: 5px;
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
  width: 2ch;
  color: ${(props) => (props.hide ? `transparent` : "white")};
  caret-color: white;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
`;

const OperandContainer = styled.div`
  position: relative;
  padding: 0 5px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

//  <div className="right-wrong">{isCorrect && <p>Right!</p>}</div>
//       <div className="right-wrong">
//           <p>Right!</p>
//         </div>
