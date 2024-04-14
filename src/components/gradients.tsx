// hues.tsx
// 13 Apr-2024
// realvjy
import * as React from "react";
import styled from "styled-components";
import { getColorData, getHextoRGB, invCol, rand } from "../lib/hues-gradients";

const Gradients = (props) => {
  // Generating 2 Gradient color hex for more randomization fixed first value at 0
  // Second value is from hue_2,3 or 4
  var grad_hue_1 = props.hue_1;
  var grad_hue_2 = props.hue_2;
  var grad_1 = getHextoRGB(grad_hue_1);
  var grad_2 = getHextoRGB(grad_hue_2);

  return (
    <ColorWrap>
      <Colors>
        <GradientBox
          style={{
            background: `linear-gradient(90deg, ${grad_hue_1} 0%, ${grad_hue_2} 100%)`,
          }}
        >
          <Text
            className="hexcode"
            style={{
              color: invCol(grad_hue_1),
            }}
          >
            <div className="box" style={{ background: grad_hue_1 }}></div>
            {grad_hue_1}
          </Text>
          <Text
            className="hexcode"
            style={{
              color: invCol(grad_hue_2),
            }}
          >
            <div className="box" style={{ background: grad_hue_2 }}></div>
            {grad_hue_2}
          </Text>
        </GradientBox>
      </Colors>
    </ColorWrap>
  );
};
export default Gradients;

const ColorWrap = styled.div`
  position: relative;
  display: flex;
`;
const Colors = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  align-items: center;
  margin-bottom: 14px;
  gap: 4px;
  &.name {
    font-size: 10px;
    mix-blend-mode: soft-light;
    filter: contrast(150%);
  }
  &.hexcode {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.7;
  }

  .box {
    height: 14px;
    width: 14px;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  }
`;

const GradientBox = styled.div`
  display: flex;
  height: 100%;
  width: inherit;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  padding: 0 20px;
`;
