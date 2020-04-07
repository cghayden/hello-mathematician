import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ChangeMaxForm from "./ChangeMaxForm";
import ChevronUpSvg from "./ChevronUpSvg";
import ChevronDownSvg from "./ChevronDownSvg";

const MaxValueContainer = styled.div`
  display: flex;
  font-size: 22px;
  align-items: center;
`;

const ChangeButtons = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
const AlterTimeButton = styled.button`
  border-radius: 50%;
  color: white;
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
  font-size: 25px;
  margin: 0 20px;
`;

export default function MaxValue({ maxValue, setMaxValue, inProgress }) {
  const [changeMax, toggleChangeMax] = useState(false);

  return (
    <MaxValueContainer className="maxValueContainer">
      <p>Max Value:</p>
      {!changeMax ? (
        <MaxDigit>{maxValue}</MaxDigit>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          <ChangeMaxForm
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            toggleChangeMax={toggleChangeMax}
          />
        </motion.div>
      )}

      <ChangeButtons>
        <AlterTimeButton
          disabled={inProgress}
          onClick={() => setMaxValue((maxValue) => maxValue + 1)}
        >
          <ChevronUpSvg />
        </AlterTimeButton>
        <AlterTimeButton
          disabled={inProgress}
          // disabled={minutes === 0 && seconds === 15}
          onClick={() => setMaxValue((maxValue) => maxValue - 1)}
        >
          <ChevronDownSvg />
        </AlterTimeButton>
      </ChangeButtons>
      {/* <AnimatePresence>
        {changeMax && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            style={{ overflow: "hidden" }}
          >
            <ChangeMaxForm
              maxValue={maxValue}
              setMaxValue={setMaxValue}
              toggleChangeMax={toggleChangeMax}
            />
          </motion.div>
        )}
      </AnimatePresence> */}
    </MaxValueContainer>
  );
}
