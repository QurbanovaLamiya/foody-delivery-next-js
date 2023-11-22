import styled, { keyframes } from "styled-components";
import colors from "../../../../styles/color";

export const LocalFoodStyled = styled.section`
  background: ${colors.white_1};
  display: flex;
  align-items: center;
  position: relative;
  padding: 60px;
`;
export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
  font-weight: 900;
  font-size: 60px;
  line-height: 70px;
  color: ${colors.black};
`;
export const Text = styled.p`
  width: 75%;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: ${colors.grey};
  margin: 10px 0 42px;
`;
export const Buttons = styled.div``;
export const Button = styled.button`
  width: 220px;
  height: 70px;
  font-size: 25px;
  line-height: 24px;
  border-radius: 30px;
  border: 2px solid ${colors.grey};
  background-color: ${({ bg }) => bg ?? `${colors.white_1}`};
  color: ${({ color }) => color ?? `${colors.grey}`};
  margin-right: 39px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
export const ContentImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const ContentBackground = styled.div`
  background: ${colors.black};
  display: flex;
  width: 95%;
  height: 490px;
  border-radius: 70px;
  padding-bottom: 20px;
`;

const scale = keyframes`
  from {
    transform: scale(.95);
  }
  to {
    transform: scale(1.1);
  }
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: absolute;
  width: 270px;
  height: 90px;
  background: ${colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  animation: ${scale} 2.5s linear infinite alternate;
`;

export const ImageBoxText = styled.p`
  width: 90px;
  margin-left: 25px;
  font-family: "Mukta";
  font-size: 16px;
  line-height: 24px;
  color: ${colors.grey_1};
`;
