import {
  RestaurantDetailStyled,
  RestaurantAddress,
  RestaurantImage,
  RestaurantAddressAbout,
  RestaurantAbout,
  RestaurantName,
  Address,
  CuisineSection,
  Cuisine,
  Text,
  Buttons,
  Button,
  ProductsSection,
  Products,
  Title,
  ProductsAbout,
  ProductsContent,
  ProductsText,
  ProductsName,
  ProductDescription,
  ProductsPrice,
  From,
  Price,
  AddButton,
} from "./restaurantDetail.styled";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { restaurantAPI } from "../../api/restaurant";
// import { setRestaurant } from "../../store/slice/restaurantSlice";

import Image from "next/image";
import CheckoutSection from "./components/CheckoutSection";
import { addBasket } from "../../store/slice/basketSlice";
// import { useState } from "react";
// import { useEffect } from "react";

const RestaurantDetail = ({ data: { restaurant } }) => {
  // console.log(restaurant);

  // const state = useSelector((state) => state.restaurant.restaurant);
  const dispatch = useDispatch();
  const { push } = useRouter();

  // console.log("restaurant",restaurant.products);
  const basketProduct = useSelector((state) => state.basket.basket);

  // console.log("basketProduct",basketProduct);

  // basketProduct.map((item) => console.log(item.stockLimit, item.count));

  // const obj = Object.fromEntries(basketProduct)

  // useEffect(() => {
  //   getRestaurant();
  // }, []);

  // const getRestaurant = () => {
  //   restaurantAPI
  //     .then((res) => {
  //       dispatch(setRestaurant(res.data.restaurant.restaurants));
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  // };

  return (
    <RestaurantDetailStyled>
      <RestaurantAddress>
        <RestaurantImage src={restaurant.image_url} />
        <RestaurantAddressAbout>
          <RestaurantAbout>
            <RestaurantName>
              {restaurant.restaurant_name} Restaurant
            </RestaurantName>
            <Address>{restaurant.address}</Address>
          </RestaurantAbout>
          <CuisineSection>
            <Cuisine>
              <Text>Cuisine</Text>
              <Text style={{ fontSize: "14px" }}>{restaurant.cuisine}</Text>
            </Cuisine>
            <Buttons>
              <Button color="#D63626" bg="#fff">
                ${restaurant.price} Delivery
              </Button>
              <Button onClick={() => push("/restaurants")}>Go Back</Button>
            </Buttons>
          </CuisineSection>
        </RestaurantAddressAbout>
      </RestaurantAddress>

      <ProductsSection>
        <Products>
          <Title>Products</Title>
          {restaurant.products.map((product) => (
            <ProductsAbout key={product.id}>
              <ProductsText>
                <Image
                  src={product.image_url}
                  alt="pizza"
                  width={57}
                  height={53}
                  style={{ margin: "0  36px 0 42px" }}
                />
                <ProductsContent>
                  <ProductsName>{product.product_name}</ProductsName>
                  <ProductDescription>{product.desc}</ProductDescription>
                </ProductsContent>
              </ProductsText>
              <ProductsPrice>
                <From>From</From>
                <Price>${product.price}</Price>
                <AddButton onClick={() => dispatch(addBasket(product))}>
                  +
                </AddButton>
              </ProductsPrice>
            </ProductsAbout>
          ))}
        </Products>
        <CheckoutSection />
      </ProductsSection>
    </RestaurantDetailStyled>
  );
};

export default RestaurantDetail;
