import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MoreVerticalSvg from "./MoreVerticalSvg";
import ChevronsDown from "./ChevronsDown";

const HeadingStyles = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  color: var(--yellow);
  align-items: center;
  h2 {
    font-size: 26px;
    @media screen and (max-width: 414px) {
      font-size: 24px;
    }
  }
`;
const MenuButton = styled.button`
  border: none;
  padding: 10px;
  margin-left: 8px;
  color: var(--yellow);
  /* color: var(--white); */
  background: transparent;
  border-radius: 50px;
  display: grid;
  place-items: center;
`;

export default function ActiveOperationHeading({
  view,
  maxValue,
  toggleOptions,
  setOptionsView,
}) {
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

  const handleClick = () => {
    toggleOptions((options) => !options);
    setOptionsView("timer");
  };

  return (
    <HeadingStyles>
      <h2 role="button" onClick={handleClick}>
        {viewString} to {maxValue}
      </h2>
      <MenuButton onClick={handleClick}>
        <ChevronsDown />
        {/* <MoreVerticalSvg /> */}
      </MenuButton>
    </HeadingStyles>
  );
}
