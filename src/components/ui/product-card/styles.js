import styled from "styled-components";

export const Article = styled.article`
  display: grid;
  grid-template-columns: 248px 1fr;
  column-gap: 20px;
  height: 288px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colorWhite};
`;

export const ProductImage = styled.img`
  width: 248px;
  height: 248px;
  object-fit: cover;
`;
