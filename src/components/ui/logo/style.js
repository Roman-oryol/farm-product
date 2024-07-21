import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LinkLogoStyles = css`
  display: block;
  width: 398px;
  height: 44px;
`;

export const LinkLogo = styled(Link)`
  ${LinkLogoStyles};
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const LinkLogoHomePage = styled.span`
  ${LinkLogoStyles};
`;
