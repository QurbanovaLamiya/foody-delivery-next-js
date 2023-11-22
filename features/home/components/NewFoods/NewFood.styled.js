import styled from "styled-components";
import colors from "../../../../styles/color";

export const NewFoodStyled = styled.section`
  padding: 80px 0;
  margin: 80px 0 30%;
`;
export const Title = styled.h2`
  text-align: center;
  font-weight: 900;
  font-size: 40px;
  line-height: 70px;
  color: ${colors.black};
  margin-top: 82px;
`;
export const Text = styled.p`
  width: 55%;
  margin: 0 auto;
  padding-bottom: 20px;
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: ${colors.grey};
`;
export const NewFoodCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
