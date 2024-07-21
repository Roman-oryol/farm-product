import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import Tab from "@mui/material/Tab";

export const Wrapper = styled.div`
  .MuiTabs-flexContainer {
    column-gap: 8px;
  }

  button {
    min-height: 0;
    padding: 8px 12px;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.text.small.size};
    line-height: ${({ theme }) => theme.text.small.lineHeight};
    color: ${({ theme }) => theme.colorDefaultText};
    text-transform: none;
    background-color: ${({ theme }) => theme.colorLightGray};
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .MuiTabs-indicator {
    display: none;
  }

  button.Mui-selected {
    color: ${({ theme }) => theme.colorWhite};
    background-color: ${({ theme }) => theme.colorGreen};
  }

  div.MuiBox-root {
    padding: 0;
    font-size: ${({ theme }) => theme.text.small.size};
  }
`;

export const StyledTitle = styled(Title)`
  margin: 0;
  margin-bottom: 16px;
  font-size: ${({ theme, size }) => theme.title[size]};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 148px;
  overfl
`;

export const Description = styled.p`
  margin: 0;
  margin-bottom: 14px;
`;

export const Price = styled.span`
  align-self: flex-start;
  margin-top: auto;
  padding: 4px 8px;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  background-color: ${({ theme }) => theme.colorBlue};
`;
