import styled from "styled-components";

import { px } from "../../../utils/common";

export const Wrapper = styled.div<{ isYAxisVisible: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${px(20)};

  .recharts-cartesian-axis-line {
    display: none;
  }

  .yAxis {
    display: ${(props) => (props.isYAxisVisible ? "visible" : "none")};
  }
`;
