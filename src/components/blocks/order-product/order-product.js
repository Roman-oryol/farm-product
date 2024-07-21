import Panel from "/src/components/ui/panel/panel";
import {
  Title,
  AddressInput,
  WrapperPrice,
  PriceTitle,
  Price,
  ButtonBuy,
} from "./styles";

function OrderProduct({
  products,
  totalPrice,
  isProductSelected,
  onBuy,
  address,
  onChange,
}) {
  const isButtonEnable = address && isProductSelected;
  return (
    <Panel $paddingBottom="20px">
      <Title level={3}>Сделать заказ</Title>
      {products && products.length ? (
        <form onSubmit={onBuy}>
          <AddressInput value={address} onChange={onChange} />
          <WrapperPrice>
            <PriceTitle>Цена</PriceTitle>
            <Price>{totalPrice} руб.</Price>
          </WrapperPrice>
          <ButtonBuy as="button" type="submit" disabled={!isButtonEnable}>
            Купить
          </ButtonBuy>
        </form>
      ) : (
        <p>Продукты были слишком вкусные и их разобрали.</p>
      )}
    </Panel>
  );
}

export default OrderProduct;
