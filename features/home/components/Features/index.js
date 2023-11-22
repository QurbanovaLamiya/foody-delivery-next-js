import { FeaturesCards, FeaturesStyled, Title, Text } from "./Features.styled";
import cardData from "../../../../constant/featuresData";
import Cards from "./Cards";

const Features = () => {
  return (
    <FeaturesStyled>
      <Title>Features</Title>
      <Text>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      <FeaturesCards>
        {cardData.map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </FeaturesCards>
    </FeaturesStyled>
  );
};

export default Features;
