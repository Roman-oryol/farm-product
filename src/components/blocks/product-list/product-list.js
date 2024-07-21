import ProductCard from "/src/components/ui/product-card/product-card";
import { Wrapper } from "./styles";

import { register } from "swiper/element/bundle";
register();

function ProductList({ products }) {
  return (
    <Wrapper>
      {products && products.length ? (
        <swiper-container
          thumbs-swiper=".my-thumbs"
          slides-per-view="auto"
          space-between="12"
          mousewheel="true"
          scrollbar-clickable="true"
          direction="vertical"
        >
          {products.map((product) => (
            <swiper-slide>
              <ProductCard product={product} />
            </swiper-slide>
          ))}
        </swiper-container>
      ) : null}
    </Wrapper>
  );
}

export default ProductList;
