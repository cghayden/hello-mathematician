import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import DivideSvg from './DivideSvg';
export default function MissedEquations({ wrongOnes, view }) {
  // const [wrongDivisionSets, setWrongDivisionSets]= useState();
  // useEffect(() => {
  //   if (view === "/") {
  //     formatDivisionView(wrongOnes);
  //   }
  // }, [view]);

  // function formatDivisionView(wrongOnes) {
  //   console.log("wrongOnes:", wrongOnes);
  // }
  if (view === "/") {
    return (
      <div>
        <h3>You Missed:</h3>
        <WrongOnesUl>
          {wrongOnes.map((equation, index) => {
            const splitEquation = equation.split("/");
            return (
              <li key={index}>
                {splitEquation[0]} &#247; {splitEquation[1]}
              </li>
            );
          })}
        </WrongOnesUl>
      </div>
    );
  }

  return (
    <div>
      <h3>You Missed:</h3>
      <WrongOnesUl>
        {wrongOnes.map((equation, index) => (
          <li key={index}>{equation}</li>
        ))}
      </WrongOnesUl>
    </div>
  );
}
const WrongOnesUl = styled.ul`
  font-size: 20px;
  display: grid;
  grid-template-columns: 120px 120px;
  justify-items: center;
`;
