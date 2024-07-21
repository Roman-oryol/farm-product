import styled from "styled-components";

const Panel = styled.div`
  margin-bottom: 18px;
  padding: 24px 20px ${({ $paddingBottom }) => $paddingBottom || "12px"};
  background-color: ${({ theme }) => theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

export default Panel;
