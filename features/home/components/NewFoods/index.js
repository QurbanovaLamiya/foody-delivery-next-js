import { NewFoodStyled, Title, Text, NewFoodCards } from "./NewFood.styled";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHomeCards } from "../../../../store/slice/homeSlice";

import { homeAPI } from "../../../../api/home";
import Card from "./Card";

const NewFood = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getCard();
  }, []);

  const getCard = () => {
    homeAPI
      .then((res) => {
        dispatch(setHomeCards(res.data.homeCard.newFoods));
        // console.log(res);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  return (
    <NewFoodStyled>
      <Title>Our Popular Update New Foods</Title>
      <Text>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      <NewFoodCards>
        {state.home.homeCards.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </NewFoodCards>
    </NewFoodStyled>
  );
};

export default NewFood;
