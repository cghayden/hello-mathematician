import React from "react";
import AdditionEquation from "./AdditionEquation";

export default function AdditionController({
  maxValue = 20,
  setScore,
  playMode,
  inProgress,
  showTimer
}) {
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
        {/* {!inProgress && showTimer && <p>Press Start to Begin</p>} */}
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
