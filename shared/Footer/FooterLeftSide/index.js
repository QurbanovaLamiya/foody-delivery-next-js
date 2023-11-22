import Image from "next/image";

// Material-UI
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Logo, Content, SocialBar } from "./FooterLeftSide.styled";

const inlineStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  cursor: "pointer",
  margin: " 16px 16px 0 0",
};

const FooterLeftSide = () => {
  return (
    <>
      <Logo>
        <Image
          src="/images/food-delivery-logo-white.svg"
          alt="Foody Logo"
          width={92}
          height={32}
        />
      </Logo>
      <Content>
        Lorem ipsum is placeholder text commonly used in the graphic
      </Content>
      <SocialBar>
        <FacebookOutlinedIcon
          sx={{
            color: "#FB9300",
            padding: "3px",
            border: " 1px solid white",
          }}
          style={inlineStyle}
        />
        <InstagramIcon
          sx={{ color: "#fff", background: "#FB9300", padding: "5px" }}
          style={inlineStyle}
        />
        <TwitterIcon
          sx={{
            color: "#FB9300",
            padding: "6px",
            border: " 1px solid white",
          }}
          style={inlineStyle}
        />
      </SocialBar>
    </>
  );
};

export default FooterLeftSide;
