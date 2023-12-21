import styled from "styled-components";
import colors from "../../../styles/color";

export const Card = styled.div`
  /* width: 235px; */
  height: 345px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 53px; */
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(0.95);
  }
`;

export const CardContent = styled.div`
  padding: 0 17px;
`;
export const CardTitle = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: ${colors.grey_1};
`;
export const CardText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.grey};
  /* margin-right: 50px; */
`;
export const CardPrice = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 70px;
  color: ${colors.grey_1};
  margin-right: 55px;
`;
export const CardTime = styled.button`
  width: 78px;
  height: 31px;
  background: ${colors.mainRed};
  border-radius: 30px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.white};
`;
