import { HomeContainerStyled } from "./home.styled";

import LocalFood from "./components/LocalFood";
import Features from "./components/Features";
import MenuCards from "./components/MenuCards";
import NewFoods from "./components/NewFoods";

const HomeContainer = () => {
  return (
    <HomeContainerStyled>
      <LocalFood />
      <Features />
      <MenuCards />
      <NewFoods />
    </HomeContainerStyled>
  );
};

export default HomeContainer;
