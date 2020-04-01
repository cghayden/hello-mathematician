import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ChangeMaxForm from "./ChangeMaxForm";
import Button from "../styles/Button";
const MaxValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
`;

const CurrentMaxStyle = styled.div`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  span {
    margin: 0 5px;
    font-size: 24px;
  }
  button {
    margin-top: 5px;
    align-self: center;
    width: 50%;
  }
`;

export default function MaxValue({ maxValue, setMaxValue, inProgress }) {
  const [changeMax, toggleChangeMax] = useState(false);

  return (
    <MaxValueContainer>
      <CurrentMaxStyle>
        <p>
          Max Value: <span>{maxValue}</span>
        </p>
        {!changeMax && !inProgress && (
          <AnimatePresence>
            <Button
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
            </Button>
          </AnimatePresence>
        )}
      </CurrentMaxStyle>
      <AnimatePresence>
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
      </AnimatePresence>
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
