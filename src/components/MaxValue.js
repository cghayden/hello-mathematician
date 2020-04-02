import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ChangeMaxForm from "./ChangeMaxForm";
import ChevronUpSvg from "./ChevronUpSvg";
import ChevronDownSvg from "./ChevronDownSvg";
import Button from "../styles/Button";

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
// const CurrentMaxStyle = styled.div`
//   font-size: 22px;
//   display: flex;
//   flex-direction: column;
//   padding: 5px 0;
//   span {
//     margin: 0 5px;
//     font-size: 24px;
//   }
//   button {
//     margin-top: 5px;
//     align-self: center;
//     width: 50%;
//   }
// `;

const MaxDigit = styled.p`
  font-size: 25px;
  padding-left: 7px;
`;

export default function MaxValue({ maxValue, setMaxValue, inProgress }) {
  const [changeMax, toggleChangeMax] = useState(false);

  return (
    <MaxValueContainer>
      {/* <CurrentMaxStyle> */}
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

      {!changeMax && !inProgress && (
        <AnimatePresence>
          <ChangeButtons>
            <AlterTimeButton
              onClick={() => setMaxValue(maxValue => maxValue + 1)}
            >
              <ChevronUpSvg />
            </AlterTimeButton>
            <AlterTimeButton
              // disabled={minutes === 0 && seconds === 15}
              onClick={() => setMaxValue(maxValue => maxValue - 1)}
            >
              <ChevronDownSvg />
            </AlterTimeButton>
          </ChangeButtons>
          {/* <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            type="button"
            onClick={() => {
              toggleChangeMax(!changeMax);
            }}
          >
            Change
          </Button> */}
        </AnimatePresence>
      )}
      {/* </CurrentMaxStyle> */}
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
