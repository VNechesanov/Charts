import styled from "styled-components";

import { px } from "../../utils/common";
import { colors } from "../../utils/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${px(30)};
  background-color: ${colors.blackHaze};
  border-radius: ${px(5)};
  padding: ${px(20)};
`;

export const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.scooter};
  align-items: center;
  margin-top: ${px(15)};
  width: 25%;
`;
