import Starter from './Starter';
import Timer from './Timer';
import MaxValue from './MaxValue';
import Score from './Score';
import { useGlobalState } from './GlobalState';
import { useState } from 'react';
export default function Options({
  toggleInProgress,
  starterStep,
  setStarterStep,
  wrongOnes,
  reset,
  count,
}) {
  const [isStarterActive, setIsStarterActive] = useState(false);

  const {
    maxValue,
    setMaxValue,
    view,
    inProgress,
    optionsView,
    setOptionsView,
    score,
    toggleOptions,
  } = useGlobalState();
  if (optionsView === 'timer')
    return (
      <>
        <Timer
          toggleInProgress={toggleInProgress}
          toggleOptions={toggleOptions}
          setOptionsView={setOptionsView}
        />
        <MaxValue maxValue={maxValue} setMaxValue={setMaxValue} view={view} />
      </>
    );

  if (optionsView === 'starter' && !inProgress)
    return (
      <Starter
        key={'starter'}
        toggleInProgress={toggleInProgress}
        isStarterActive={isStarterActive}
        setIsStarterActive={setIsStarterActive}
        starterStep={starterStep}
        setStarterStep={setStarterStep}
        setOptionsView={setOptionsView}
        toggleOptions={toggleOptions}
      />
    );

  if (optionsView === 'score')
    return (
      <Score
        reset={reset}
        score={score}
        count={count}
        toggleOptions={toggleOptions}
        wrongOnes={wrongOnes}
        view={view}
      />
    );
  return null;
}
