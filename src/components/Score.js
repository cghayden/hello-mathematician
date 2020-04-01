import React from "react";
import Button from "../styles/Button";

export default function Score({ score, toggleScore, toggleTimer }) {
  return (
    <div>
      <p>Your Score: {score}</p>
      <Button
        onClick={() => {
          toggleScore(false);
          toggleTimer(true);
        }}
      >
        Play again
      </Button>
    </div>
  );
}
