import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const NextButton_Styles = styled.button`
  background: var(--white);
  color: var(--dark);
  padding: 0.75rem 1.5rem;
  font-size: 20px;
  border-radius: 10px;
  border: none;
`;

type Props = {
  toggleShowNextButton: React.Dispatch<React.SetStateAction<boolean>>;
  nextProblem: () => void;
};

export default function NextButton({
  toggleShowNextButton,
  nextProblem,
}: Props) {
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    nextButtonRef.current?.focus();
  });

  return (
    <NextButton_Styles
      ref={nextButtonRef}
      role='button'
      onClick={() => {
        toggleShowNextButton(false);
        nextProblem();
      }}
    >
      Next Problem
    </NextButton_Styles>
  );
}
