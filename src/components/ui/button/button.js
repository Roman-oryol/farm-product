// import "./style.css";
import styled from "styled-components";
import { default as ElementButton } from "/src/components/elements/button/button";

const Button = styled(ElementButton)`
  display: grid;
  justify-content: center;
  align-items: center;
  min-width: ${({ $minWidth }) => ($minWidth ? `${$minWidth}px` : "260px")};
  min-height: 60px;
  font: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.text.default.size};
  color: ${({ theme }) => theme.colorWhite};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colorOrange};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colorButtonHover};
    box-shadow: inset 0 4px 0 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

export default Button;
