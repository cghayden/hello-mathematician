import React from "react";
import AdditionEquation from "./AdditionEquation";

export default function AdditionController({
  maxValue = 20,
  setScore,
  playMode,
  inProgress,
  showTimer
}) {
  console.log("inProgress:", inProgress);
  if (playMode === "practice")
    return (
      <AdditionEquation
        playMode={playMode}
        maxValue={maxValue}
        setScore={setScore}
      />
    );
  if (playMode === "timed") {
    return (
      <>
        {!inProgress && showTimer && <p>press start when you're ready</p>}
        {!showTimer && inProgress && (
          <AdditionEquation
            playMode={playMode}
            maxValue={maxValue}
            setScore={setScore}
          />
        )}
      </>
    );
  }
}
