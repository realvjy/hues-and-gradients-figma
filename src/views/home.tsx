// home.tsx
// 15-Nov-2022

import * as React from "react";
import styled from "styled-components";
import { getColorData, invCol } from "../lib/hues-gradients";

const rgbToRgba = (rgb, a = 1) =>
  rgb.replace("rgb(", "rgba(").replace(")", `, ${a})`);

const Home = (props) => {
  const canvasRef = React.useRef(null);
  const [hues, setHues] = React.useState(getColorData());
  var hue_1 = hues.uihues[0].color;
  var hue_2 = hues.uihues[1].color;
  var hue_3 = hues.uihues[2].color;
  var hue_4 = hues.uihues[3].color;

  function getNewData() {
    setHues(getColorData());
  }

  return (
    <Wrapper>
      <ColorWrap>
        <Colors>
          <ColorBox style={{ background: hue_1 }}>
            <Text className="hexcode" style={{ color: invCol(hue_1) }}>
              {hue_1}
            </Text>
            <Text className="name">{hues.uihues[0].name}</Text>
          </ColorBox>
          <ColorBox style={{ background: hue_2 }}>
            <Text className="hexcode" style={{ color: invCol(hue_2) }}>
              {hue_2}
            </Text>
            <Text className="name">{hues.uihues[1].name}</Text>
          </ColorBox>
          <ColorBox style={{ background: hue_3 }}>
            <Text className="hexcode" style={{ color: invCol(hue_3) }}>
              {hue_3}
            </Text>
            <Text className="name">{hues.uihues[2].name}</Text>
          </ColorBox>
          <ColorBox style={{ background: hue_4 }}>
            <Text className="hexcode" style={{ color: invCol(hue_4) }}>
              {hue_4}
            </Text>
            <Text
              className="name"
              style={{
                color: invCol(hue_4),
              }}
            >
              {hues.uihues[3].name}
            </Text>
          </ColorBox>
        </Colors>
      </ColorWrap>

      <Actions>
        <ToggleWrap></ToggleWrap>
        <GenerateWrap>
          <Generate onClick={getNewData}>Generate</Generate>
        </GenerateWrap>
      </Actions>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const ColorWrap = styled.div`
  position: relative;
  display: flex;
`;
const Colors = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
`;

const Text = styled.div`
  &.name {
    font-size: 10px;
    mix-blend-mode: overlay;
    opacity: 0.9;
  }
  &.hexcode {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.7;
  }
`;

const ColorBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;

const Actions = styled.div``;

const ToggleWrap = styled.div``;

const GenerateWrap = styled.div``;

const Generate = styled.button``;
