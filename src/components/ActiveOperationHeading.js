import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2`
  color: var(--orange);
  @media screen and (max-width: 414px) {
    color: red;
    font-size: 18px;
  }
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
