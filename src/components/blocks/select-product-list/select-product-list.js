import { useRef, useEffect, useState } from "react";
import { Wrapper, Title } from "./styles";
import CheckBox from "/src/components/ui/checkbox/checkbox";
import Panel from "/src/components/ui/panel/panel";

import { register } from "swiper/element/bundle";
register();

function SelectProductList({ products, totalPrice, setTotalPrice, onSelect }) {
  const [selectedProductsId, setSelectedProductsId] = useState([]);
  const handlerSelect = (id, isChecked) => {
    isChecked
      ? selectedProductsId.push(id)
      : selectedProductsId.splice(selectedProductsId.indexOf(id), 1);
    setSelectedProductsId(selectedProductsId);
  };

  return (
    <Panel>
      <Title>Выберите продукты</Title>
      {products && products.length ? (
        <swiper-container
          class="my-thumbs"
          slides-per-view={products.length}
          direction="vertical"
          no-swiping="true"
        >
          {products.map((product) => {
            return (
              <swiper-slide
                class={
                  selectedProductsId.includes(product.id)
                    ? "swiper-no-swiping"
                    : null
                }
              >
                <CheckBox
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  onSelect={onSelect}
                  product={product}
                  onCheck={handlerSelect}
                />
              </swiper-slide>
            );
          })}
        </swiper-container>
      ) : null}
    </Panel>
  );
}

export default SelectProductList;
