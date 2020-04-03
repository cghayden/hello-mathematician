import React from "react";
import SubtractionEquation from "./SubtractionEquation";

export default function SubtractionController({
  maxValue = 20,
  setScore,
  visible
}) {
  return (
    <SubtractionEquation
      maxValue={maxValue}
      setScore={setScore}
      visible={visible}
    />
  );
}
