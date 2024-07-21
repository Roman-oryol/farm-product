import styled from "styled-components";
import Container from "/src/components/ui/container/container";

export const OrderWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  bottom: 80px;
  left: 0;
  min-width: 1240px;
  background-color: ${({ theme }) => theme.colorLightGray};
  overflow: hidden;
`;

export const Inner = styled(Container)`
  display: grid;
  grid-template-columns: 353px 727px;
  grid-template-rows: 100%;
  column-gap: 20px;
  height: 100%;
  align-items: start;
  padding-top: 40px;
`;

export const LeftColumn = styled.div`
  height: 100%;
  overflow-y: auto;
  width: 100%;
`;
