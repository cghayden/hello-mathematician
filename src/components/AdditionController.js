import React from "react";
import AdditionEquation from "./AdditionEquation";

export default function AdditionController({
  maxValue = 20,
  setScore,
  visible
}) {
  return (
    <AdditionEquation
      maxValue={maxValue}
      setScore={setScore}
      visible={visible}
    />
  );
}
