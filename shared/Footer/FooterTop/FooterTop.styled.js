import styled from "styled-components";
import colors from "../../../styles/color";

export const FooterTopStyled = styled.div`
  background: ${colors.black_1};
  border-radius: 50px;
  display: flex;
  align-items: center;
  width: 74%;
  padding: 55px 0;
  top: -70%;
  position: absolute;
`;

export const LeftSideImage = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
export const RightSideImage = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 2;
`;
export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 50px;
  line-height: 70px;
  letter-spacing: 0.03em;
  color: ${colors.white};
  margin-bottom: 43px;
`;
export const Button = styled.button`
  width: 220px;
  height: 60px;
  margin-bottom: 25px;
  background: ${colors.mainOrange};
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.white};
  cursor: pointer;
`;
