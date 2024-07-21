import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0;
  line-height: ${({ theme }) => theme.title.lineHeight};
  font-size: ${({ theme, size }) => theme.title[size]};
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;
