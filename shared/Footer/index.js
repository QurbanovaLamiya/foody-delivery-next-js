import FooterNavList from "./FooterNavList";
import FooterLeftSide from "./FooterLeftSide";
import FooterTop from "./FooterTop";

import {
  FooterContent,
  FooterNav,
  FooterStyled,
  FooterMain,
  FooterEnd,
} from "./Footer.styled";

import { Container } from "@mui/material";
import { useRouter } from "next/router";

const Footer = () => {
  const { pathname } = useRouter();
  return (
    <FooterStyled>
      <Container>
        {pathname === "/" && <FooterTop />}
        <FooterMain>
          <FooterContent>
            <FooterLeftSide />
          </FooterContent>
          <FooterNav>
            <FooterNavList />
          </FooterNav>
        </FooterMain>
        <FooterEnd>
          All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy
        </FooterEnd>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
