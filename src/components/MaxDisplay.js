import React from "react";
import styled from "styled-components";

const MaxDisplayStyle = styled.div`
  padding: 10px 0 0 0;
  font-size: 20px;
`;

export default function MaxDisplay({ maxValue, changeMax, toggleChangeMax }) {
  return (
    <MaxDisplayStyle>
      <p>Max Value: {maxValue}</p>
    </MaxDisplayStyle>
  );
}
