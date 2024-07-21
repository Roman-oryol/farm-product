import styled from "styled-components";
import { default as TitleComponent } from "/src/components/ui/title/title";

import { register } from "swiper/element/bundle";
register();

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  padding: 24px 20px 12px;
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 12px;
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;
