import { Container } from "@mui/system";

import Image from "next/image";

import {
  HowItWorkStyled,
  Title,
  Text,
  ImageContent,
  ImageBackground,
} from "./howItWork.styled";

const HowItWorkContainer = () => {
  return (
    <HowItWorkStyled>
      <Container>
        <Title>How it works</Title>
        <Text>
          Delivery may be extended during sale periods. Please refer to the
          checkout page for an updated estimate for your location. Kindly note
          that once you have placed an order, it is no longer possible to modify
          your order. Taxes and duties are included in all product prices.It is
          possible to place an order with shipment to a different address than
          your home or billing address when paying with a credit card. Please
          note that Klarna payments require that your order is shipped to your
          registered home address.
        </Text>
        <ImageContent>
          <ImageBackground></ImageBackground>
          <Image
            src="/images/howItWorks/howItwork.svg"
            style={{ position: "absolute" }}
            alt="howItwork image"
            width={628}
            height={683}
          />
        </ImageContent>
      </Container>
    </HowItWorkStyled>
  );
};

export default HowItWorkContainer;
