import styled from "styled-components";
import colors from "../../../../../styles/color";

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  margin: 80px 0;
  flex-direction: ${({ layout }) => layout || "row"};
`;

export const CardContent = styled.div`
  width: 38%;
`;
export const Title = styled.h3`
  font-weight: 900;
  font-size: 50px;
  line-height: 70px;
  color: ${colors.black};
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: ${colors.grey};
  margin: 30px 0;
  padding-right: 60px;
`;

export const CardImageSection = styled.div`
  position: relative;
  width: 60%;
  height: 600px;
`;

export const CardImage = styled.div`
  position: absolute;
  top: 18%;
  right: ${({ right }) => right || "11%"};
  width: 55%;
  height: 560px;
  background: ${colors.mainRed};
  border-radius: 50px;
  transform: ${({ rotate }) => rotate || `rotate(23deg)`};
`;

export const Image = styled.img`
  position: absolute;
  top: 25%;
  left: ${({ left }) => left || "20%"};
`;
