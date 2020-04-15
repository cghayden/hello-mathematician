import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2`
  color: var(--orange);
`;

export default function ActiveOperationHeading({ view, maxValue }) {
  const [viewString, setViewString] = useState("Addition");
  useEffect(() => {
    if (view === "+") {
      setViewString("Addition");
    }
    if (view === "-") {
      setViewString("Subtraction");
    }
    if (view === "x") {
      setViewString("Multiplication");
    }
    if (view === "/") {
      setViewString("Division");
    }
  }, [view]);

  return (
    <HeadingStyles>
      {viewString} to {maxValue}
    </HeadingStyles>
  );
}
