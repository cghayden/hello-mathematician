import React from "react";
import Addition from "./AdditionController";

export default function EquationController({
  max = 20,
  setScore,
  playMode,
  inProgress
}) {
  if ((playMode = "practice"))
    return <Addition playMode={playMode} max={maxValue} setScore={setScore} />;
  if ((playMode = "timer" && inProgress)) {
    return <Addition playMode={playMode} max={maxValue} setScore={setScore} />;
  }
}
