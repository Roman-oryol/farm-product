import { StyledText } from "./style";

function FeatureType({ productType }) {
  const text =
    productType === "farm" ? "Фермерские продукты" : "Магазинные продукты";
  return <StyledText productType={productType}>{text}</StyledText>;
}

export default FeatureType;
