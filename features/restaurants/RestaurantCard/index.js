import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardTitle,
  CardText,
  CardPrice,
  CardTime,
} from "./restaurantCard.styled";

import Image from "next/image";

const RestaurantCard = ({
  image_url,
  restaurant_name,
  cuisine,
  price,
  minute,
  slug,
}) => {
  const { push } = useRouter();

  return (
    <Card onClick={() => push(`/restaurants/restaurant?name=${slug}`)}>
      <Image
        src={image_url}
        alt={restaurant_name}
        width={174}
        height={161}
        style={{ margin: "18px 0" }}
      />
      <CardContent>
        <CardTitle>{restaurant_name}</CardTitle>
        <CardText>{cuisine}</CardText>
        <CardPrice>${price} Delivery</CardPrice>
        <CardTime>{minute} Min</CardTime>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
