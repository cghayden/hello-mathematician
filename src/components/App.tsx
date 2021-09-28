import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navigation from './Navigation';
import GlobalStyles from './GlobalStyles';
import EquationDiv from './EquationDiv';
import Options from './Options';
import ActiveOperationHeading from './ActiveOperationHeading';
import Footer from './Footer';
import { GlobalProvider } from './GlobalState';
import Ui from './Ui';

export default function App() {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <AppContainerStyles>
        <Ui />
      </AppContainerStyles>
    </GlobalProvider>
  );
}

const AppContainerStyles = styled.div`
  max-width: 600px;
  place-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px auto 80px 1fr;
  align-items: center;
  text-align: center;
  margin: 15px auto 0;
  @media screen and (max-width: 768px) {
    margin: 0 auto 0;
    font-size: 16px;
    grid-template-rows: 70px auto 52px 1fr;
  }
`;
