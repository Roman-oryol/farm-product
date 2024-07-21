import styled from "styled-components";
import { default as TitleComponent } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";

export const Title = styled(TitleComponent)`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.text.default.size};
`;

export const AddressInput = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Введите адрес доставки",
}))`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 14px 12px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.text.small.size};
  line-height: 1.5;
  color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colorLightGray};
`;

export const WrapperPrice = styled.p`
  margin: 0;
  margin-bottom: 32px;
`;

export const PriceTitle = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.text.small.size};
`;

export const Price = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.title.small};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  line-height: ${({ theme }) => theme.title.lineHeight};
`;

export const ButtonBuy = styled(Button)`
  width: 100%;

  &:disabled {
    opacity: 0.4;
  }

  &:hover:disabled {
    box-shadow: none;
    background-color: ${({ theme }) => theme.colorOrange};
  }
`;
