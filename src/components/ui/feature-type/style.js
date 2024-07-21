import styled from "styled-components";

export const StyledText = styled.p`
  background-color: ${({ productType, theme }) =>
    productType === "farm" ? theme.colorGreen : theme.colorRed};
  width: fit-content;
  margin: 0;
  margin-bottom: 4px;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 1.3;
  color: #ffffff;
`;
