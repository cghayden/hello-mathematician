import React from "react";
import styled from "styled-components";
import ChevronUpSvg from "./ChevronUpSvg";
import ChevronDownSvg from "./ChevronDownSvg";
import Button from "../styles/Button";
const MaxValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  align-items: center;
`;

const ChangeButtons = styled.div`
  display: flex;
  flex-direction: column;
`;
const AlterMaxButton = styled.button`
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background: none;
  border: none;

  &:focus,
  &:active {
    outline: none;
    border: 1px solid white;
    box-shadow: 0 0 1px 1px white;
  }
`;

const MaxDigit = styled.p`
  margin: 0 8px;
`;

const SetMaxButtonsRow = styled.div`
  display: flex;
  /* justify-content: space-around; */
`;

const SetMaxButton = styled(Button)`
  width: 80px;
`;
const MaxValueDisplay = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

export default function MaxValue({ maxValue, setMaxValue }) {
  return (
    <MaxValueContainer className="maxValueContainer">
      <SetMaxButtonsRow>
        <SetMaxButton onClick={() => setMaxValue(10)}>To 10</SetMaxButton>
        <SetMaxButton onClick={() => setMaxValue(20)}>To 20</SetMaxButton>
        <SetMaxButton onClick={() => setMaxValue(100)}>To 100</SetMaxButton>
        <SetMaxButton onClick={() => setMaxValue(1000)}>To 1,000</SetMaxButton>
      </SetMaxButtonsRow>
      <MaxValueDisplay>
        <p>Max Value:</p>
        <MaxDigit>{maxValue}</MaxDigit>
        <ChangeButtons>
          <AlterMaxButton
            onClick={() => setMaxValue((maxValue) => maxValue + 1)}
          >
            <ChevronUpSvg />
          </AlterMaxButton>
          <AlterMaxButton
            onClick={() => setMaxValue((maxValue) => maxValue - 1)}
          >
            <ChevronDownSvg />
          </AlterMaxButton>
        </ChangeButtons>
      </MaxValueDisplay>
    </MaxValueContainer>
  );
}
