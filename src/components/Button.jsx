import styled from "@emotion/styled";

const Button = styled("button")`
  padding: 0.7rem 1.5rem;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 0.4rem;
  color: #fff;
  background-color: ${({ theme }) => theme?.colors?.primary};

  &:disabled {
    background-color: lightgrey;
  }
`;

export { Button };
