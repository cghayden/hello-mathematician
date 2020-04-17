import React from "react";
import Starter from "./Starter";
import Timer from "./Timer";
import MaxValue from "./MaxValue";
import Score from "./Score";
export default function Options({
  score,
  setScore,
  toggleInProgress,
  isStarterActive,
  setIsStarterActive,
  addTime,
  subtractTime,
  minutes,
  seconds,
  starterStep,
  setStarterStep,
  toggleOptions,
  maxValue,
  setMaxValue,
  optionsView,
  setOptionsView,
  wrongOnes,
  setWrongOnes,
  reset,
  view,
  count,
}) {
  if (optionsView === "timer")
    return (
      <>
        <Timer
          toggleInProgress={toggleInProgress}
          addTime={addTime}
          subtractTime={subtractTime}
          minutes={minutes}
          seconds={seconds}
          toggleOptions={toggleOptions}
          setOptionsView={setOptionsView}
        />
        <MaxValue maxValue={maxValue} setMaxValue={setMaxValue} view={view} />
      </>
    );

  if (optionsView === "starter")
    return (
      <Starter
        key={"starter"}
        toggleInProgress={toggleInProgress}
        isStarterActive={isStarterActive}
        setIsStarterActive={setIsStarterActive}
        starterStep={starterStep}
        setStarterStep={setStarterStep}
        setOptionsView={setOptionsView}
      />
    );

  if (optionsView === "score")
    return (
      <Score
        reset={reset}
        score={score}
        count={count}
        toggleOptions={toggleOptions}
        wrongOnes={wrongOnes}
      />
    );
}
