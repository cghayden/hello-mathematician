import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../styles/Button";

const MaxInputFormStyles = styled.form`
  display: flex;
  padding: 0 20px;
  font-size: 22px;
  input {
    font-size: 22px;

    margin: 0 8px;
    border-radius: 5px;
    padding: 0 5px 0 8px;
    width: 3ch;
    background: inherit;
    border: none;
    :focus {
      background: whitesmoke;
      box-shadow: 0px 0px 2px 2px ${props => props.theme.green};
    }
  }
  button {
    margin-right: 5px;
  }
`;

const InputDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

export default function ChangeMaxForm({
  maxValue,
  setMaxValue,
  toggleChangeMax
}) {
  const [inputVal, setInputVal] = useState();
  const maxInputRef = useRef();

  useEffect(() => {
    maxInputRef.current.focus();
  }, []);

  return (
    <MaxInputFormStyles
      onSubmit={e => {
        e.preventDefault();
        setMaxValue(inputVal);
        toggleChangeMax(false);
      }}
    >
      <InputDiv>
        <label htmlFor="maxVal">Maximum Value:</label>
        <input
          ref={maxInputRef}
          name="maxVal"
          type="number"
          defaultValue={maxValue}
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
      </InputDiv>
      <Button disabled={inputVal ? false : true} type="submit">
        OK !
      </Button>
      <Button type="button" onClick={() => toggleChangeMax(false)}>
        Cancel
      </Button>
    </MaxInputFormStyles>
  );
}
