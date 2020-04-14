import React from "react";
import Starter from "./Starter";
import Timer from "./Timer";
import MaxValue from "./MaxValue";
import Score from "./Score";
export default function Options({
  score,
  setScore,
  toggleInProgress,
  toggleScore,
  isStarterActive,
  setIsStarterActive,
  addTime,
  subtractTime,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
  starterStep,
  setStarterStep,
  toggleOptions,
  maxValue,
  setMaxValue,
  inProgress,
  optionsView,
  setOptionsView,
}) {
  if (optionsView === "timer")
    return (
      <>
        <Timer
          score={score}
          toggleInProgress={toggleInProgress}
          toggleScore={toggleScore}
          isStarterActive={isStarterActive}
          setIsStarterActive={setIsStarterActive}
          addTime={addTime}
          subtractTime={subtractTime}
          minutes={minutes}
          setMinutes={setMinutes}
          seconds={seconds}
          setSeconds={setSeconds}
          starterStep={starterStep}
          setStarterStep={setStarterStep}
          toggleOptions={toggleOptions}
          setOptionsView={setOptionsView}
        />
        <MaxValue
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          inProgress={inProgress}
        />
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
        score={score}
        setScore={setScore}
        setOptionsView={setOptionsView}
        toggleOptions={toggleOptions}
      />
    );
}
