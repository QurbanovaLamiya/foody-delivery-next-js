import Image from "next/image";

import {
  LocalFoodStyled,
  Content,
  Title,
  Text,
  Buttons,
  Button,
  ImageBox,
  ImageBoxText,
  ContentImage,
  ContentBackground,
} from "./LocalFood.styled";

const LocalFood = () => {
  return (
    <LocalFoodStyled>
      <Content>
        <Title>Our Food site makes it easy to find local food</Title>
        <Text>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
        <Buttons>
          <Button bg="#D63626" color="#fff" style={{ border: "none" }}>
            Register
          </Button>
          <Button>Order now</Button>
        </Buttons>
      </Content>
      <ContentImage>
        <ContentBackground />
        <Image
          src="/images/sendvic.png"
          alt="Hamburger"
          width={750}
          height={550}
          style={{ position: "absolute", top: "20px", right: "-15px" }}
        />
        <ImageBox style={{ right: "30px", top: "50px" }}>
          <Image
            src="/images/localFood/pizzaHut.svg"
            alt="Pizza Hut Yummy ..."
            width={70}
            height={50}
          />
          <ImageBoxText>Pizza Hut Yummy ...</ImageBoxText>
        </ImageBox>
        <ImageBox style={{ right: "37%", bottom: "25%" }}>
          <Image
            src="/images/localFood/frenchFries.svg"
            alt="French Fries Yummy ..."
            width={70}
            height={50}
          />
          <ImageBoxText>French Fries Yummy ...</ImageBoxText>
        </ImageBox>
        <ImageBox style={{ right: "30px", bottom: "40px" }}>
          <Image
            src="/images/localFood/cheesburger.svg"
            alt="Cheesburger Yummy ..."
            width={70}
            height={50}
          />
          <ImageBoxText>Cheesburger Yummy ...</ImageBoxText>
        </ImageBox>
      </ContentImage>
    </LocalFoodStyled>
  );
};

export default LocalFood;
