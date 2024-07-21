import styled from "styled-components";

export const Article = styled.article`
  background-color: ${({ $productType, theme }) =>
    $productType === "farm" ? theme.colorLightGreen : theme.colorLightRed};
  background-image: url(${({ $icon }) => $icon});
  position: relative;
  background-position: 20px 22px;
  background-repeat: no-repeat;
  background-size: 52px 52px;
  width: 540px;
  padding: 20px;
`;

export const TitleWrapper = styled.div`
  margin: 0;
  margin-bottom: 20px;
  padding-left: 72px;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

export const Text = styled.p`
  margin: 0;
`;
