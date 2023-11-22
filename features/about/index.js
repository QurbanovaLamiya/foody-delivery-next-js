import {
  AboutStyled,
  AboutContent,
  Title,
  Text,
  AboutImageSection,
  Background,
} from "./about.styled";

import AboutCard from "./aboutCard";
import data from "../../constant/aboutCardData";

const AboutContainer = () => {
  return (
    <AboutStyled>
      <AboutContent>
        <Title>About Us</Title>
        <Text>
          Delivery may be extended during sale periods. Please refer to the
          checkout page for an updated estimate for your location. Kindly note
          that once you have placed an order, it is no longer possible to modify
          your order. Taxes And Duties are included in all product prices.It is
          possible to place an order with shipment to a different address than
          your home or billing address when paying with a credit card. Please
          note that klarna payments require that your order is shipped to your
          registered home address.
        </Text>
      </AboutContent>
      <AboutImageSection>
        <Background></Background>
        {data.map((item) => (
          <AboutCard key={item.id} {...item} />
        ))}
      </AboutImageSection>
    </AboutStyled>
  );
};

export default AboutContainer;
