import { Container } from "@mui/system";
import Image from "next/image";
import {
  FooterTopStyled,
  LeftSideImage,
  RightSideImage,
  Content,
  Text,
  Button,
} from "./FooterTop.styled";

const FooterTop = () => {
  return (
    <Container>
      <FooterTopStyled>
        <LeftSideImage>
          <Image src="/images/pizza.svg" alt="Pizza" width={200} height={200} />
        </LeftSideImage>
        <Content>
          <Text>Discover Restaurants Near From you</Text>
          <Button>Explore now</Button>
        </Content>
        <RightSideImage>
          <Image
            src="/images/hamburger.svg"
            alt="Hamburger"
            width={200}
            height={200}
          />
        </RightSideImage>
      </FooterTopStyled>
    </Container>
  );
};

export default FooterTop;
