import FeatureType from "../feature-type/feature-type";
import { Article, TitleWrapper, Title, Text } from "./style";

function FeatureCard({ productType, title, text, icon }) {
  return (
    <Article $productType={productType} $icon={icon}>
      <TitleWrapper>
        <FeatureType productType={productType} />
        <Title>{title}</Title>
      </TitleWrapper>
      <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
    </Article>
  );
}

export default FeatureCard;
