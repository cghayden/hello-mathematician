import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ChangeMaxForm from "./ChangeMaxForm";
import ChevronUpSvg from "./ChevronUpSvg";
import ChevronDownSvg from "./ChevronDownSvg";

const MaxValueContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  font-size: 22px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  margin: 0 auto;
  width: 60%;
`;

const ChangeButtons = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-self: start;
  padding-left: 8px;
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
  padding-left: 7px;
`;

export default function MaxValue({ maxValue, setMaxValue, inProgress }) {
  const [changeMax, toggleChangeMax] = useState(false);

  return (
    <MaxValueContainer className="maxValueContainer">
      <p style={{ justifySelf: "end" }}>Max Value:</p>
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
          onClick={() => setMaxValue(maxValue => maxValue + 1)}
        >
          <ChevronUpSvg />
        </AlterTimeButton>
        <AlterTimeButton
          disabled={inProgress}
          // disabled={minutes === 0 && seconds === 15}
          onClick={() => setMaxValue(maxValue => maxValue - 1)}
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

// const TriangleUp = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 12px solid transparent;
//   border-right: 12px solid transparent;
//   border-bottom: 20px solid ${props => props.theme.green};
//   margin-bottom: 5px;
// `;
// const TriangleDown = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 12px solid transparent;
//   border-right: 12px solid transparent;
//   border-top: 20px solid ${props => props.theme.green};
// `;
// const MaxControls = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 20px;
//   height: 40px;
// `;

// const ControlButton = styled.button`
//   font-size: 12px;
//   color: red;
//   background: transparent;
//   border: none;
// `;

// <MaxControls>
//         <TriangleUp
//           role="button"
//           onClick={() => setMaxValue(maxValue => maxValue + 1)}
//         />
//         <TriangleDown
//           role="button"
//           onClick={() => setMaxValue(maxValue => maxValue - 1)}
//         />
//       </MaxControls>
