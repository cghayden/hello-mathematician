import React from "react";
import AdditionEquation from "./AdditionEquation";

export default function AdditionController({
  maxValue = 20,
  setScore,
  playMode,
  inProgress,
  showTimer,
  visible
}) {
  return (
    <div>
      <AdditionEquation
        playMode={playMode}
        maxValue={maxValue}
        setScore={setScore}
        visible={visible}
      />
    </div>
  );
}
