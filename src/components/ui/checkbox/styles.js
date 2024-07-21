import styled, { css } from "styled-components";
import checkedIcon from "/src/assets/checkbox-checked.svg";

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f6f6f6;
    ${({ isChecked, theme }) => {
      return isChecked
        ? css`
            background-image: url(${checkedIcon});
            background-repeat: no-repeat;
            background-position: center;
            background-color: ${theme.colorOrange};
          `
        : css`
            background-color: ${theme.colorGray};
          `;
    }};
  }
`;
