import { CardStyle, CardTitle, CardText } from "./Card.styled";
import Image from "next/image";

const Card = ({ title, desc, image_url }) => {
  return (
    <CardStyle>
      <Image
        src={image_url}
        alt={title}
        width={239}
        height={223}
        style={{ objectFit: "cover" }}
      />
      <CardTitle>{title}</CardTitle>
      <CardText>{desc}</CardText>
    </CardStyle>
  );
};

export default Card;
