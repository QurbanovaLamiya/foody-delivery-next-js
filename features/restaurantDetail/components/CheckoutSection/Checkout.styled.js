import styled from "styled-components";
import colors from "../../../../styles/color";

export const ProductCheckout = styled.div`
  position: sticky;
  top: 0;
  width: 27%;
  height: 80%;
  background: ${colors.white_1};
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductSection = styled.div``;

export const ProductItemsCount = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px;
  border-bottom: 1px solid ${colors.white_2};
  color: ${colors.mainRed};
`;

export const ItemCount = styled.span`
  margin-left: 5px;
  font-size: 16px;
  line-height: 70px;
`;

export const ProductInfo = styled.div`
  position: relative;
  margin: 0 16px;
  padding: 20px 0;
  border-bottom: 1px solid ${colors.white_2};
  display: flex;
  align-items: center;
`;
export const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 27px 0 9px;
  width: 224px;
  font-size: 16px;
  color: ${colors.grey_1};
`;

export const ProductName = styled.span`
  margin-bottom: 6px;
`;

export const ProductTotalPrice = styled.span``;

export const ProductCount = styled.div`
  width: 29px;
  height: 70px;
  background: ${colors.white};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Increment = styled.button`
  border: none;
  background-color: transparent;
  color: #323232;
  cursor: pointer;
`;
export const Decrement = styled.button`
  border: none;
  background-color: transparent;
  color: #323232;
  cursor: pointer;
`;
export const Count = styled.span`
  color: #000;
  font-weight: 500;
  font-size: 16px;
`;
export const Checkout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.mainRed};
  margin: 80px 16px 20px;
  height: 47px;
  border-radius: 100px;
`;
export const Text = styled.span`
  color: ${colors.white};
  margin-left: 24px;
`;
export const Total = styled.span`
  width: 135px;
  height: 43px;
  background: ${colors.white};
  border-radius: 100px;
  color: ${colors.mainRed};
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
