import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const variants = {
  enter: { y: -30, opacity: 0.6, rotateX: 80, scale: 0.6 },
  center: { y: 0, opacity: 1, rotateX: 0, scale: 1 },
  exit: { y: 20, opacity: 0.6, rotateX: -90, scale: 0.6 },
};
// transform: { delay: 0.2 }
const P = styled.p`
  position: absolute;
  top: 0;
`;

export default function Operand({ digit }) {
  return (
    <P
    // key={digit}
    // variants={variants}
    // transition={{ duration: 0.2 }}
    // initial="enter"
    // animate="center"
    // exit="exit"
    >
      {digit}
    </P>
  );
}
