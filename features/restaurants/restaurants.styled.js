import styled from "styled-components";
import colors from "../../styles/color";

export const RestaurantStyled = styled.main`
  margin: 16px 0 66px;
  display: flex;
  justify-content: space-between !important;
`;
export const MenuSection = styled.nav`
  background: ${colors.white_1};
  width: 251px;
  height: 80vh;
`;
export const MenuList = styled.ul`
  padding: 51px 0 40px 28px;
`;

export const MenuListItem = styled.li`
  width: 206px;
  display: flex;
  align-items: center;
  margin-bottom: 34px;
  padding: 6px 10px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background: #f0e1e1;
  }
`;
export const CategoryName = styled.span`
  width: 206px;
  margin-left: 17px;
  font-family: "Mukta";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.grey_2};
  &:hover {
    color: ${colors.mainRed};
  }
`;

export const MenuCardsSection = styled.div`
  margin-top: 8px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
