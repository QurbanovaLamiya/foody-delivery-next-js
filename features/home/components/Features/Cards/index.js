import { Card, CardTitle, CardText } from "./Card.styled";
import Image from "next/image";

const Cards = ({ card_title, card_desc, image_url }) => {
  return (
    <Card>
      <Image src={image_url} alt="Discount Boucher" width={240} height={220} />
      <CardTitle>{card_title}</CardTitle>
      <CardText>{card_desc}</CardText>
    </Card>
  );
};

export default Cards;
