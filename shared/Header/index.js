import {
  HeaderStyled,
  HeaderLogoNav,
  Navbar,
  NavList,
  NavListItem,
  HeaderButtons,
} from "./Header.styled";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const inlineStyle = {
  width: "115px",
  height: "41px",
  color: "#fff",
  background: "#D63626",
  borderRadius: "30px",
  marginLeft: "27px",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
};

const Header = () => {
  const { push } = useRouter();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderStyled>
      <HeaderLogoNav>
        <Image
          src="/images/foodyLogo.svg"
          alt="Foody Logo"
          width={130}
          height={30}
          onClick={() => push("/")}
          style={{ cursor: "pointer" }}
        />
        <Navbar>
          <NavList>
            <NavListItem
              onClick={() => push("/")}
              style={
                router.pathname === "/"
                  ? { color: "#D63626", fontWeight: 700, fontSize: 18 }
                  : {}
              }
            >
              Home
            </NavListItem>
            <NavListItem
              onClick={() => push("/restaurants")}
              style={
                router.pathname === "/restaurants"
                  ? { color: "#D63626", fontWeight: 700, fontSize: 18 }
                  : {}
              }
            >
              Restaurants
            </NavListItem>
            <NavListItem
              onClick={() => push("/about")}
              style={
                router.pathname === "/about"
                  ? { color: "#D63626", fontWeight: 700, fontSize: 18 }
                  : {}
              }
            >
              About us
            </NavListItem>
            <NavListItem
              onClick={() => push("/how-it-works")}
              style={
                router.pathname === "/how-it-works"
                  ? { color: "#D63626", fontWeight: 700, fontSize: 18 }
                  : {}
              }
            >
              How it works
            </NavListItem>
            <NavListItem
              onClick={() => push("/faqs")}
              style={
                router.pathname === "/faqs"
                  ? { color: "#D63626", fontWeight: 700, fontSize: 18 }
                  : {}
              }
            >
              FAQs
            </NavListItem>
          </NavList>
        </Navbar>
      </HeaderLogoNav>
      <HeaderButtons>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Image
            src="/images/flagIcons/en.svg"
            alt="en"
            width={41}
            height={41}
          />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>
            <Image
              src="/images/flagIcons/en.svg"
              alt="en"
              width={41}
              height={41}
            />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Image
              src="/images/flagIcons/fr.svg"
              alt="fr"
              width={41}
              height={41}
            />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Image
              src="/images/flagIcons/az.svg"
              alt="az"
              width={41}
              height={41}
            />
          </MenuItem>
        </Menu>
        <Button style={inlineStyle}>Sign up</Button>
      </HeaderButtons>
    </HeaderStyled>
  );
};

export default Header;
