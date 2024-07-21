import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
}

body {
  min-width: 1240px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.text.default.size};
  line-height: ${({ theme }) => theme.text.default.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeightDefault};
  color: ${({ theme }) => theme.colorDefaultText};
}
`;
