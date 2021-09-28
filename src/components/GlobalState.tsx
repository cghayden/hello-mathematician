import React, { createContext, useContext, useState } from 'react';

type View = '+' | '-' | 'x' | '/';
type OptionsView = 'score' | 'timer' | 'starter';

interface GlobalCtxInterface {
  maxValue: number;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
  view: View;
  setView: React.Dispatch<React.SetStateAction<View>>;
  options: boolean;
  toggleOptions: React.Dispatch<React.SetStateAction<boolean>>;
  inProgress: boolean;
  toggleInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  optionsView: OptionsView;
  setOptionsView: React.Dispatch<React.SetStateAction<OptionsView>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const CtxInitialValue: GlobalCtxInterface = {
  maxValue: 10,
  setMaxValue: () => {},
  view: '+',
  setView: () => {},
  optionsView: 'timer',
  setOptionsView: () => {},
  options: false,
  toggleOptions: () => {},
  inProgress: false,
  toggleInProgress: () => {},
  score: 0,
  setScore: () => {},
};

const GlobalCtx = createContext<GlobalCtxInterface>(CtxInitialValue);

const GlobalProvider: React.FC = ({ children }) => {
  const [maxValue, setMaxValue] = useState(10);
  const [view, setView] = useState<View>('+');
  const [options, toggleOptions] = useState(false);
  const [inProgress, toggleInProgress] = useState(false);
  const [optionsView, setOptionsView] = useState<OptionsView>('timer');
  const [score, setScore] = useState(0);

  return (
    <GlobalCtx.Provider
      value={{
        maxValue,
        setMaxValue,
        view,
        setView,
        optionsView,
        setOptionsView,
        options,
        toggleOptions,
        inProgress,
        toggleInProgress,
        score,
        setScore,
      }}
    >
      {children}
    </GlobalCtx.Provider>
  );
};
const useGlobalState = () => {
  const all = useContext(GlobalCtx);
  return all;
};

export { GlobalProvider, useGlobalState };
