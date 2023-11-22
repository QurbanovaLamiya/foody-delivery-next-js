import styled from "styled-components";
import colors from "../../styles/color";

export const RestaurantDetailStyled = styled.main``;
export const RestaurantAddress = styled.section`
  margin: 20px 0;
  border-bottom: 2px solid ${colors.white_2};
`;

export const RestaurantImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 448px;
`;

export const RestaurantAddressAbout = styled.div`
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RestaurantAbout = styled.div`
  margin-left: 57px;
`;
export const RestaurantName = styled.h3`
  font-weight: 700;
  font-size: 22px;
  color: ${colors.grey_1};
`;
export const Address = styled.p`
  font-size: 14px;
  color: ${colors.grey};
`;

export const CuisineSection = styled.div`
  display: flex;
`;
export const Cuisine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Text = styled.span`
  font-size: 18px;
  color: ${colors.grey};
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  width: 72px;
  height: 52px;
  background: ${({ bg }) => (bg ? `${colors.white}` : ` ${colors.mainRed}`)};
  border: 1px solid ${colors.mainRed};
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-left: 28px;
  color: ${({ color }) => color ?? `${colors.white}`};
  cursor: pointer;
`;

export const ProductsSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 38px;
  margin-bottom: 10%;
  height: 100vh;
`;
export const Products = styled.div`
  background: ${colors.white_1};
  border-radius: 4px;
  width: 60%;
`;
export const Title = styled.h4`
  font-weight: 700;
  font-size: 25px;
  line-height: 70px;
  color: ${colors.grey_1};
  text-align: center;
  padding: 20px 0;
`;
export const ProductsAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 99px;
  border-top: 1px solid ${colors.white_2};
`;

export const ProductsText = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductsContent = styled.div`
  margin-right: 70px;
`;
export const ProductsName = styled.h5`
  font-size: 18px;
  color: ${colors.grey_1};
  margin-bottom: 10px;
`;
export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${colors.grey};
`;
export const ProductsPrice = styled.div`
  margin-right: 25px;
`;
export const From = styled.span`
  font-size: 12px;
  line-height: 70px;
  color: ${colors.grey};
`;
export const Price = styled.span`
  font-size: 16px;
  line-height: 70px;
  font-weight: 700;
  color: ${colors.grey};
`;
export const AddButton = styled.button`
  width: 40px;
  height: 40px;
  background: ${colors.white_1};
  border: 2px solid ${colors.lightGrey};
  border-radius: 100px;
  color: ${colors.lightGrey};
  cursor: pointer;
  margin-left: 35px;

  &:hover {
    background: ${colors.green};
    border: 2px solid ${colors.green};
    color: ${colors.white};
  }
`;
