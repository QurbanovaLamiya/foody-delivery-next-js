import styled from "styled-components";
import colors from "../../styles/color";

export const FooterStyled = styled.footer`
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 80px;
  position: relative;
`;

export const FooterMain = styled.div`
  margin: 40px 0 30px;
  height: 150px;
  display: flex;
  justify-content: space-between;
`;
export const FooterContent = styled.div`
  width: 30%;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const FooterEnd = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  color: ${colors.white};
  padding: 48px 0 10px;
`;
