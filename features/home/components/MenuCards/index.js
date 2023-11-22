import Card from "./Card";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHome } from "../../../../store/slice/homeSlice";

import { homeAPI } from "../../../../api/home";

import styled from "styled-components";

const MenuCardsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 60px;
`;

const MenuCards = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getHome();
  }, []);

  const getHome = () => {
    homeAPI
      .then((res) => {
        dispatch(setHome(res.data.home.menu));
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  return (
    <MenuCardsStyled>
      {state.home.home.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </MenuCardsStyled>
  );
};

export default MenuCards;
