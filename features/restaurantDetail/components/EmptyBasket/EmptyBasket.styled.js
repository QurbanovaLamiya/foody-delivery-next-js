import styled from "styled-components";
import colors from "../../../../styles/color";

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.p`
  text-align: center;
  font-size: 40px;
  line-height: 50px;
  color: ${colors.lightGrey};
`;
