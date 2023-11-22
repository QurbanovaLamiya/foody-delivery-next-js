import styled from "styled-components";
import colors from "../../styles/color";

export const AboutStyled = styled.main`
  padding: 0 5%;
  margin: 18% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AboutContent = styled.section`
  width: 40%;
`;
export const Title = styled.h1`
  font-family: "Mukta";
  font-weight: 600;
  font-size: 45px;
  line-height: 30px;
  margin-bottom: 31px;
`;
export const Text = styled.p`
  font-size: 20px;
  line-height: 35px;
  color: ${colors.grey};
`;
export const AboutImageSection = styled.section`
  position: relative;
`;
export const Background = styled.div`
  width: 687px;
  height: 407px;
  background: ${colors.lightOrange};
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  transform: rotate(-67.93deg);
`;
