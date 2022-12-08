import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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
          <a href='mailto:cghayden@gmail.com'>cghayden@gmail.com</a>
          <ShoutOutStyles>shout out to Kadin!</ShoutOutStyles>
          <CloseFooterButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => toggleFooter(false)}
          >
            X
          </CloseFooterButton>
        </FooterStyle>
      )}
    </AnimatePresence>
  );
}
const FooterStyle = styled(motion.footer)`
  position: relative;
  background: var(--dark);
  color: var(--white);
  height: 90px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  place-content: center;
  @media screen and (max-width: 768px) {
    height: 90px;
  }
`;

const CloseFooterButton = styled(motion.button)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  position: fixed;
  bottom: 3%;
  right: 3%;
  background: none;
  padding: 10px 11px 13px 10px;
  outline: none;
  border: none;
  color: var(--white);
  :focus {
    box-shadow: 0px 0px 2px 2px var(--white);
  }
  @media screen and (max-width: 768px) {
    bottom: 1%;
  }
`;

const ShoutOutStyles = styled.p`
  color: var(--yellow);
  font-size: 14px;
`;
