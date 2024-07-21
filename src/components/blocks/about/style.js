import styled from "styled-components";
import Container from "../../ui/container/container";
import image from "/src/assets/bg-about.png";
import { default as ElementTitle } from "/src/components/ui/title/title";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colorBlue};
`;

export const AboutContainer = styled(Container)`
  background-image: url(${image});
  background-position: bottom 0 right 70px;
  background-size: 446px 563px;
  background-repeat: no-repeat;
`;

export const Inner = styled.div`
  padding: 180px 570px 162px 0;
`;

export const Title = styled(ElementTitle)`
  margin-bottom: 24px;
`;
