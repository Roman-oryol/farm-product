import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  display: block;
  padding: 0;
  border: none;
  background-color: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;

  &:activ,
  &:hover {
    background: none;
    box-shadow: none;
  }
`;

export default Button;
