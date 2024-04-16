// home.tsx
// 13 Apr-2024
// realvjy

import * as React from "react";
import styled from "styled-components";
import Hues from "../components/hues";
import Gradients from "../components/gradients";
import { getColorData, getHextoRGB, invCol, rand } from "../lib/hues-gradients";
import { CrossIcon, DotIcon, ShuffleIcon } from "../components/icons";

const rgbToRgba = (rgb, a = 1) =>
  rgb.replace("rgb(", "rgba(").replace(")", `, ${a})`);

const Home = (props) => {
  const tglRef = React.useRef(null);
  const [isAbout, setIsAbout] = React.useState(false);
  const [hues, setHues] = React.useState(getColorData());
  const [selectedType, setSelectedType] = React.useState<"hues" | "gradients">(
    "hues"
  );
  var grad_hue_1 = hues.uihues[0].color;
  var grad_hue_2 = hues.uihues[rand(3) + 1].color;
  const [labelWidth, setLabelWidth] = React.useState<number>(0);

  function toggleAbout() {
    setIsAbout(!isAbout);
  }

  function generateNewColor() {
    setHues(getColorData);
  }

  const handleTypeChange = (type: "hues" | "gradients") => {
    setSelectedType(type);
  };

  const addToFigma = () => {
    if (selectedType == "gradients") {
      parent.postMessage(
        {
          pluginMessage: {
            type: "gradients",
            color_1: grad_hue_1,
            color_2: grad_hue_2,
          },
        },
        "*"
      );
    } else {
      parent.postMessage(
        {
          pluginMessage: {
            type: "hues",
            colors: hues.uihues,
          },
        },
        "*"
      );
    }
  };

  React.useEffect(() => {}, [hues]);

  React.useEffect(() => {
    const element = tglRef.current;
    const activeEl = element.querySelector(`.${selectedType}`);
    const actWidth = activeEl.offsetWidth + "px";
    const actPos = activeEl.offsetLeft + "px";
    const slider = element.querySelector(`.radio-focus`);
    slider.style.width = actWidth;
    slider.style.left = actPos;
  }, [selectedType]);

  return (
    <Main>
      {isAbout && (
        <AboutWrap>
          <About>
            <div className="about">
              <h3>About</h3>
              <p>
                Lil plugin generate hues and gradients using Color-scheme.js &
                Ntc package. Made by{" "}
                <a href="https://vjy.me" target="_blank">
                  @realvjy
                </a>
              </p>
            </div>
            <div className="support">
              <h3>Support & Help</h3>
              <a href="https://www.buymeacoffee.com/realvjy" target="_blank">
                Buy me a coffee
              </a>
              <a href="https://x.com/realvjy" target="_blank">
                Follow on twitter/x
              </a>
            </div>
            <Close>
              <CrossIcon onClick={toggleAbout} />
            </Close>
          </About>
        </AboutWrap>
      )}
      <Wrapper>
        {selectedType == "gradients" ? (
          <Gradients hue_1={grad_hue_1} hue_2={grad_hue_2} />
        ) : (
          <Hues hues={hues} />
        )}
        <Actions>
          <LeftMenu>
            <ToggleWrap ref={tglRef}>
              <input
                id="hue"
                type="radio"
                name="hues"
                checked={selectedType === "hues"}
                onChange={() => handleTypeChange("hues")}
              />
              <label
                className={`hues ${selectedType === "hues" ? "active" : ""}`}
                htmlFor="hue"
                onClick={() => handleTypeChange("hues")}
              >
                Hues
              </label>
              <input
                id="gradient"
                type="radio"
                name="shader-editor-type"
                checked={selectedType === "gradients"}
                onChange={() => handleTypeChange("gradients")}
              />
              <label
                className={`gradients ${
                  selectedType === "gradients" ? "active" : ""
                }`}
                htmlFor="gradient"
                onClick={() => handleTypeChange("gradients")}
              >
                Gradients
              </label>
              <div className="radio-focus"></div>
            </ToggleWrap>
            <Menu>
              <DotIcon onClick={toggleAbout} />
            </Menu>
          </LeftMenu>
          <GenerateWrap>
            <Insert onClick={addToFigma}>Insert </Insert>
            <Generate onClick={generateNewColor}>
              Generate <ShuffleIcon />
            </Generate>
          </GenerateWrap>
        </Actions>
      </Wrapper>
    </Main>
  );
};
export default Home;

const Main = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 4px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleWrap = styled.div`
  position: relative;
  background: var(--toggle-bg);
  box-shadow: var(--toggle-bg-in);
  border-radius: 6px;
  [type="radio"] {
    display: none;
    position: relative;
  }

  label {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 4px 10px;
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
    &:hover {
      opacity: 0.8;
    }
    &.active {
      font-weight: 600;
      opacity: 1;
    }
  }

  .radio-focus {
    position: absolute;
    border-radius: 6px;
    left: 0;
    top: 0;
    bottom: 0;
    font-size: 11px;
    width: var(--radio-focus-width);
    transition: all ease 300ms;
    background: var(--toggle-btn-bg);
    box-shadow: var(--toggle-btn-shadow);
    border-radius: 6px;
  }
`;

const LeftMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const GenerateWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ButtonBase = styled.button`
  appearance: none;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 11px;
  padding: 4px 8px;
  line-height: 16px;
  display: flex;
  white-space: nowrap;
  text-align: center;
  user-select: none;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  min-height: 28px;
  border-radius: 6px;
`;
const Generate = styled(ButtonBase)`
  color: var(--figma-color-text-onbrand);
  background-color: var(--figma-color-bg-brand);
  box-shadow: var(--btn-shadow);
  &:hover {
    opacity: 0.8;
  }
  &:active,
  &:focus {
    box-shadow: var(--btn-shadow);
  }
`;

const Insert = styled(ButtonBase)`
  color: var(--figma-color-text);
  background: var(--toggle-btn-bg);
  box-shadow: var(--toggle-btn-shadow);
  &:hover {
    opacity: 0.7;
  }
  &:active,
  &:focus {
    box-shadow: var(--toggle-btn-shadow);
  }
`;

const Toggle = styled.button``;

const Menu = styled.div`
  border-radius: 6px;
  &:hover {
    background-color: var(--figma-color-bg);
    box-shadow: var(--toggle-btn-shadow);
  }
`;

const AboutWrap = styled.div`
  position: absolute;
  z-index: 999;
  background: var(--about-bg);
  backdrop-filter: blur(12px);
  width: 100%;
  height: 100%;
`;

const About = styled.div`
  background: var(--figma-color-bg);
  display: flex;
  width: calc(100% - 24px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  margin: 12px;
  height: calc(100% - 24px);
  position: absolute;
  border-radius: 6px;
  .about {
    width: 55%;
    padding: 8px 12px;
  }
  .support {
    padding: 8px 12px;
    a {
      color: var(--figma-color-text-brand);
      display: block;
      font-size: 12px;
      margin-bottom: 4px;
    }
  }
  h3 {
    font-size: 13px;
    margin: 4px 0;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin: 4px 0;
    opacity: 0.8;
    color: var(--figma-color-text);
    a {
      color: var(--figma-color-text-brand);
    }
  }
`;

const Close = styled.div`
  padding: 6px !important;
  position: absolute;
  z-index: 1;
  right: 2px;
  top: 2px;
  opacity: 0.7;
  color: var(--figma-color-text);
  border-radius: 6px;
  &:hover {
    background-color: var(--figma-color-bg);
    box-shadow: var(--toggle-btn-shadow);
  }
`;
