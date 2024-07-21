import styled from "styled-components";
import { default as ElementTitle } from "/src/components/ui/title/title";

export const Inner = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Title = styled(ElementTitle)`
  margin-bottom: 65px;
`;

export const FeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 540px);
  grid-auto-flow: dense;
  gap: 20px;
  margin: 0;
  margin-bottom: 65px;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: grid;
  grid-column: ${({ productType }) => (productType === "farm" ? "1/2" : "2/3")};
`;
