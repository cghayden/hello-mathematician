import React, { createContext, useContext, useState } from 'react';

type View = '+' | '-' | 'x' | '/';

interface GlobalCtxInterface {
  maxValue: number;
  setMaxValue: (val: number) => void;
  view: View;
  setView: React.Dispatch<React.SetStateAction<View>>;
}

const CtxInitialValue: GlobalCtxInterface = {
  maxValue: 10,
  setMaxValue: () => {},
  view: '+',
  setView: () => {},
};

const GlobalCtx = createContext<GlobalCtxInterface>(CtxInitialValue);

const GlobalProvider: React.FC = ({ children }) => {
  const [maxValue, setMaxValue] = useState(10);
  const [view, setView] = useState<View>('+');

  return (
    <GlobalCtx.Provider
      value={{
        maxValue,
        setMaxValue,
        view,
        setView,
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
