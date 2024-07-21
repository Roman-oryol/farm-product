import FeatureCard from "../../ui/feature-card/feature-card";
import Container from "../../ui/container/container";
import Button from "../../ui/button/button";
import { AppRoute } from "/src/const";
import { Inner, Title, FeaturesList, ListItem } from "./style";

function Features({ features }) {
  return features && features.length ? (
    <section className="features">
      <Container>
        <Inner>
          <Title size="large" level={2}>
            Почему фермерские продукты лучше?
          </Title>
          <FeaturesList>
            {features.map((feature) => {
              return (
                <ListItem productType={feature.productType} key={feature.id}>
                  <FeatureCard {...feature} />
                </ListItem>
              );
            })}
          </FeaturesList>
          <Button to={AppRoute.BUY}>Купить</Button>
        </Inner>
      </Container>
    </section>
  ) : null;
}

export default Features;
