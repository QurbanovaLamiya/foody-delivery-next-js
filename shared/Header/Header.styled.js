import styled from "styled-components";
import colors from "../../styles/color";

export const HeaderStyled = styled.header`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.white_1};
  height: 120px;
  border-radius: 4px 4px 0 0;
`;
export const HeaderLogoNav = styled.div`
  display: flex;
  flex: 6;
  align-items: center;
  justify-content: space-between;
  margin-left: 55px;
`;
export const Navbar = styled.nav`
  margin: 0 20px;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavListItem = styled.li`
  width: 115px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.grey};

  &:hover {
    cursor: pointer;
    color: ${colors.mainRed};
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: flex-end;
  margin-right: 80px;
  padding-left: 10px;
`;
