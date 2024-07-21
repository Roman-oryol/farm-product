import styled from "styled-components";
import Container from "/src/components/ui/container/container";

export const StyledHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colorWhite};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

export const Inner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
