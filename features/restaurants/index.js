import { useRouter } from "next/router";
import { useState } from "react";
import RestaurantCard from "./restaurantCard";
import SideMenuList from "./SideMenuList";
import Image from "next/image";
import {
  RestaurantStyled,
  MenuSection,
  MenuList,
  MenuCardsSection,
  MenuListItem,
  CategoryName,
} from "./restaurants.styled";

const RestaurantContainer = (props) => {
  const serverData = props.data.restaurant;

  const route = useRouter();

  const [filterCategory, setFilterCategory] = useState(serverData);

  let newCategory = [...new Set(filterCategory.map((item) => item.category))];

  const newArr = serverData.filter((item) =>
    item.category === route.query.category ? item === filterCategory : item
  );

  return (
    <RestaurantStyled>
      <MenuSection>
        <MenuList>
          <MenuListItem
            style={
              route.asPath === "/restaurants" ? { background: "#f0e1e1" } : {}
            }
          >
            <Image src="/images/pizza.svg" alt="pizza" width={25} height={28} />
            <CategoryName
              onClick={() => route.push("/restaurants")}
              style={
                route.asPath === "/restaurants" ? { color: "#D63626" } : {}
              }
            >
              All
            </CategoryName>
          </MenuListItem>
          {newCategory.map((item, index) => (
            <SideMenuList key={index} item={item} />
          ))}
        </MenuList>
      </MenuSection>
      <MenuCardsSection>
        {newArr.map((item) => (
          <RestaurantCard key={item.id} {...item} />
        ))}
      </MenuCardsSection>
    </RestaurantStyled>
  );
};

export default RestaurantContainer;
