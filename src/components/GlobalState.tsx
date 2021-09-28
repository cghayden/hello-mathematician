import React, { createContext, useContext, useState } from 'react';

type View = '+' | '-' | 'x' | '/';

interface GlobalCtxInterface {
  maxValue: number;
  setMaxValue: (val: number) => void;
  view: View;
  setView: React.Dispatch<React.SetStateAction<View>>;
  options: boolean;
  toggleOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const CtxInitialValue: GlobalCtxInterface = {
  maxValue: 10,
  setMaxValue: () => {},
  view: '+',
  setView: () => {},
  options: false,
  toggleOptions: () => {},
};

const GlobalCtx = createContext<GlobalCtxInterface>(CtxInitialValue);

const GlobalProvider: React.FC = ({ children }) => {
  const [maxValue, setMaxValue] = useState(10);
  const [view, setView] = useState<View>('+');
  const [options, toggleOptions] = useState(false);

  return (
    <GlobalCtx.Provider
      value={{
        maxValue,
        setMaxValue,
        view,
        setView,
        options,
        toggleOptions,
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
