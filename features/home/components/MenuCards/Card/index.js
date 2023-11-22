import {
  CardContent,
  CardImageSection,
  CardImage,
  CardStyled,
  Image,
  Text,
  Title,
} from "./Card.styled";

const Card = ({ id, title, body, image }) => {
  return (
    <CardStyled layout={id % 2 === 0 && "row-reverse"}>
      <CardContent>
        <Title>{title}</Title>
        <Text>{body}</Text>
      </CardContent>
      <CardImageSection>
        <CardImage
          rotate={id % 2 === 0 && `rotate(-23deg)`}
          right={id % 2 === 0 && "37%"}
        />
        <Image
          src={image}
          alt={title}
          width={650}
          height={440}
          left={id % 2 === 0 && "-5%"}
        />
      </CardImageSection>
    </CardStyled>
  );
};

export default Card;
