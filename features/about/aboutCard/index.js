import Image from "next/image";
import { useRouter } from "next/router";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import { BoxImage, BoxTitle, Price } from "./aboutCard.styled";

const AboutCard = ({ title, price, top, right, image, bottom }) => {
  const { push } = useRouter();

  return (
    <BoxImage
      style={{ top, right, bottom }}
      onClick={() => push("/restaurants")}
    >
      <Image
        src={image}
        alt="burger"
        width={120}
        height={118}
        cover="true"
        style={{ marginLeft: "50%" }}
      />
      <BoxTitle>{title}</BoxTitle>
      <Stack spacing={1}>
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
          size="small"
        />
      </Stack>
      <Price>{price}</Price>
    </BoxImage>
  );
};

export default AboutCard;
