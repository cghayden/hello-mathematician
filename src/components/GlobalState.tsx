import React, { createContext, useContext, useState } from 'react';

type View = '+' | '-' | 'x' | '/';
type OptionsView = 'score' | 'timer' | 'starter';

interface GlobalCtxInterface {
  maxValue: number;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
  timeoutId: number;
  setTimeoutId: React.Dispatch<React.SetStateAction<number>>;
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
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
  go: () => void;
  addTime: () => void;
  subtractTime: () => void;
}

const CtxInitialValue: GlobalCtxInterface = {
  maxValue: 10,
  setMaxValue: () => {},
  timeoutId: 1,
  setTimeoutId: () => {},
  minutes: 1,
  setMinutes: () => {},
  seconds: 0,
  setSeconds: () => {},
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
  go: () => {},
  addTime: () => {},
  subtractTime: () => {},
};

const GlobalCtx = createContext<GlobalCtxInterface>(CtxInitialValue);

const GlobalProvider: React.FC = ({ children }) => {
  const [maxValue, setMaxValue] = useState(10);
  const [view, setView] = useState<View>('+');
  const [options, toggleOptions] = useState(false);
  const [inProgress, toggleInProgress] = useState(false);
  const [optionsView, setOptionsView] = useState<OptionsView>('timer');
  const [score, setScore] = useState(0);
  const [timeoutId, setTimeoutId] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  function go() {
    setOptionsView('starter');
    const time = minutes * 60000 + seconds * 1000;
    //use window.setTimeout because typescript was confusing it with global(Node) version
    const newTimeoutID = window.setTimeout(() => {
      setOptionsView('score');
      toggleOptions(true);
      toggleInProgress(false);
    }, time);
    setTimeoutId(newTimeoutID);
  }
  function addTime() {
    if (seconds === 45) {
      setMinutes((minutes) => minutes + 1);
      setSeconds(0);
    } else {
      setSeconds((seconds) => seconds + 15);
    }
  }

  function subtractTime() {
    if (seconds === 15 && minutes === 0) {
      return;
    }
    if (seconds === 0) {
      setSeconds(45);
      setMinutes((minutes) => minutes - 1);
    } else {
      setSeconds((seconds) => seconds - 15);
    }
  }

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
        timeoutId,
        setTimeoutId,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        go,
        addTime,
        subtractTime,
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
