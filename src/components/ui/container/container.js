import styled from "styled-components";

const Container = styled.div.attrs(({ children, className }) => ({
  children: children,
  class: className,
}))`
  width: ${({ theme }) => theme.widthPage};
  margin: 0 auto;
  padding-right: ${({ theme }) => theme.indent};
  padding-left: 70px;
`;

export default Container;
