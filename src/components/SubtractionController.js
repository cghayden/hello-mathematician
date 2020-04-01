import React from "react";
import SubtractionEquation from "./SubtractionEquation";

export default function SubtractionController({
  maxValue = 20,
  setScore,
  playMode,
  inProgress,
  showTimer
}) {
  if (playMode === "practice")
    return (
      <SubtractionEquation
        playMode={playMode}
        maxValue={maxValue}
        setScore={setScore}
      />
    );
  if (playMode === "timed") {
    return (
      <>
        {!inProgress && showTimer && <p>Press Start to Begin</p>}
        {!showTimer && inProgress && (
          <SubtractionEquation
            playMode={playMode}
            maxValue={maxValue}
            setScore={setScore}
          />
        )}
      </>
    );
  }
}
