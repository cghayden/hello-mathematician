import React from "react";
import Button from "../styles/Button";

export default function Score({ score, setScore, toggleScore, toggleTimer }) {
  return (
    <div>
      <p>Your Score: {score}</p>
      <Button
        onClick={() => {
          setScore(0);
          toggleScore(false);
          toggleTimer(true);
        }}
      >
        Play again
      </Button>
    </div>
  );
}
