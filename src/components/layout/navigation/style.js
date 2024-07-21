import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const ButtonToHome = styled(Button)`
  min-width: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colorDefaultText};
  background-color: transparent;
  box-shadow: none;

  &:hover,
  &:active {
    box-shadow: none;
    background-color: transparent;
    text-decoration: underline;
  }

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
    color: #000000;
  }
`;
