import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer({ isToggled, toggleFooter }) {
  return (
    <AnimatePresence>
      {isToggled && (
        <FooterStyle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; Corey Hayden</p>
          <a href="mailto:cghayden@gmail.com">cghayden@gmail.com</a>
        </FooterStyle>
      )}
    </AnimatePresence>
  );
}
const FooterStyle = styled(motion.footer)`
  background: var(--white);
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  color: var(--dark);
  display: flex;
  flex-direction: column;
  place-content: center;
`;
