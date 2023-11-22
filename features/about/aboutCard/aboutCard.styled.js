import styled from "styled-components";
import colors from "../../../styles/color";

export const BoxImage = styled.div`
  transition: all 0.2s;
  position: absolute;
  background: ${colors.white};
  width: 270px;
  height: 170px;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 26px 15px;
  cursor: pointer;

  &:hover {
    transform: scale(0.97) !important;
  }
`;
export const BoxTitle = styled.h5`
  font-family: "Mukta";
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: ${colors.grey_1};
`;
export const Price = styled.span`
  font-family: "Mukta";
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${colors.grey_1};
  margin-top: 15px;
`;
