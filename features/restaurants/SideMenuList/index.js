import { useRouter } from "next/router";
import { MenuListItem, CategoryName } from "../restaurants.styled";

import Image from "next/image";

const SideMenuList = ({ item }) => {
  const route = useRouter();

  return (
    <MenuListItem
      onClick={() => route.push(`/restaurants/?category=${item}`)}
      style={route.query.category === item ? { background: "#f0e1e1" } : {}}
    >
      <Image src="/images/pizza.svg" alt={item} width={23} height={28} />
      <CategoryName
        style={route.query.category === item ? { color: "#D63626" } : {}}
      >
        {item}
      </CategoryName>
    </MenuListItem>
  );
};

export default SideMenuList;
