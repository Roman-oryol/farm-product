import { useState, useEffect } from "react";
import { OrderWrapper, Inner, LeftColumn } from "./styles";
import SelectProductList from "/src/components/blocks/select-product-list/select-product-list";
import OrderProduct from "/src/components/blocks/order-product/order-product";
import ProductList from "/src/components/blocks/product-list/product-list";

import { register } from "swiper/element/bundle";
register();

function Order({ products }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [address, setAddress] = useState("");

  useEffect(() => {
    totalPrice ? setIsProductSelected(true) : setIsProductSelected(false);
  }, [totalPrice]);

  const handlerSelect = (product, isChecked) => {
    isChecked ? selectedProducts.push(product) : selectedProducts.pop();
    setSelectedProducts(selectedProducts);
  };

  const handlerBuy = (evt) => {
    evt.preventDefault();
    alert(
      `Спасибо за заказ!\nВаш заказ:\n${selectedProducts
        .map((product) => `- ${product.name} стоимостью ${product.price} руб\n`)
        .join("")}
 будет доставлен по адресу: ${address}\nСумма к оплате: ${totalPrice}`
    );
  };

  return (
    <OrderWrapper>
      <Inner>
        <LeftColumn>
          <SelectProductList
            products={products}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            onSelect={handlerSelect}
          />
          <OrderProduct
            products={products}
            totalPrice={totalPrice}
            isProductSelected={isProductSelected}
            onBuy={handlerBuy}
            address={address}
            onChange={(evt) => setAddress(evt.target.value)}
          />
        </LeftColumn>
        <ProductList products={products} />
      </Inner>
    </OrderWrapper>
  );
}

export default Order;
