import { Section, AboutContainer, Inner, Title } from "./style";
import { TitleLevel } from "/src/components/ui/title/title";

function About() {
  return (
    <Section>
      <AboutContainer>
        <Inner>
          <Title level={TitleLevel.H1} size="biggest">
            Магазин фермерских продуктов с доставкой
          </Title>
          <p className="about__text">
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </p>
        </Inner>
      </AboutContainer>
    </Section>
  );
}

export default About;
