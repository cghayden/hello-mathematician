import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Operand from "./Operand";

export default function Equation() {
  return (
    <EquationMainWrapper>
      <FullEquation
        className="fullEquation"
        id="inputForm"
        action="POST"
        onSubmit={(e) => checkAnswer(e)}
      >
        <label htmlFor="answer">
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
            {isCorrect === false && (
              <span className="revealCorrect">{solution}</span>
            )}
            <Input
              disabled={options === true}
              hide={isCorrect === false}
              id="answer"
              type="number"
              pattern="[0-9]*"
              ref={inputEl}
              value={answer}
              name="answer"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </label>
      </FullEquation>
      {/* <div className="right-wrong">{isCorrect && <p>Right!</p>}</div> */}
      {/* <div className="right-wrong">
          <p>Right!</p>
        </div> */}

      <SubmitPillButton type="submit" form="inputForm">
        Submit
      </SubmitPillButton>
    </EquationMainWrapper>
  );
}
