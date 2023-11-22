import styled from "styled-components";
import colors from "../../../styles/color";

export const FooterList = styled.ul``;

export const FooterListItem = styled.li`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 13px;
  line-height: 26px;
  color: ${colors.white};
  &:first-child {
    font-weight: 900;
    font-size: 18px;
    line-height: 35px;
    text-decoration: none !important;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
