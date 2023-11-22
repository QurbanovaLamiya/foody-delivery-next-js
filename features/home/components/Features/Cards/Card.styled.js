import styled from "styled-components";
import colors from "../../../../../styles/color";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 38px;
  margin-bottom: 50px;
  width: 23%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
  line-height: 70px;
  color: ${colors.grey_1};
`;
export const CardText = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: ${colors.grey};
  width: 80%;
  margin-bottom: 40px;
`;
