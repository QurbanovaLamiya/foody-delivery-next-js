import styled from "styled-components";
import colors from "../../styles/color";

export const HowItWorkStyled = styled.main`
  margin: 74px 0;
`;
export const Title = styled.h1`
  text-align: center;
  font-family: "Mukta";
  font-weight: 600;
  font-size: 45px;
  line-height: 30px;
  margin-bottom: 22px;
`;
export const Text = styled.p`
  width: 90%;
  margin: 0 auto;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  color: ${colors.grey};
`;
export const ImageContent = styled.div`
  margin: 13% 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageBackground = styled.div`
  position: relative;
  width: 904px;
  height: 407px;
  background: ${colors.lightOrange};
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  transform: rotate(-170.57deg);
`;
