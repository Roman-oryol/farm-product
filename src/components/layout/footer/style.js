import styled from "styled-components";
import Container from "/src/components/ui/container/container";

export const StyledFooter = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Inner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
`;
