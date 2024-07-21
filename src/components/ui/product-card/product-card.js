import { Article, ProductImage } from "./styles";
import ProductInfo from "/src/components/ui/product-info/product-info";

function ProductCard({ product }) {
  return (
    <Article>
      <ProductImage src={product.image} />
      <ProductInfo product={product} />
    </Article>
  );
}

export default ProductCard;
