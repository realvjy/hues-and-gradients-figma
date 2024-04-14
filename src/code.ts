import { createGradient, createHue, s4 } from "./lib/helpers";
import { getHextoRGB } from "./lib/hues-gradients";

// Show the plugin UI
figma.showUI(__html__, {
  width: 456,
  height: 120,
  themeColors: true,
});

console.log("Plugin running running...");

//  Message received
figma.ui.onmessage = async (msg) => {
  let node = figma.currentPage.selection[0];
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  const hueFrame = figma.createFrame();

  if (msg.type == "hues") {
    let hues = msg.colors;
    for (let i = 0; i < hues.length; i++) {
      hueFrame.appendChild(createHue(hues[i].color, hues[i].name));
    }
    hueFrame.name = "hues-" + s4();
  } else {
    hueFrame.appendChild(
      createGradient({ hue_1: msg.color_1, hue_2: msg.color_2 })
    );
    hueFrame.name = "gradients-" + s4();
  }

  // Apply Auto Layout to the frame
  hueFrame.layoutMode = "HORIZONTAL";
  hueFrame.primaryAxisAlignItems = "CENTER";
  hueFrame.layoutSizingVertical = "HUG";
  hueFrame.layoutSizingHorizontal = "HUG";

  hueFrame.x = Math.round(figma.viewport.center.x - hueFrame.width / 2);
  hueFrame.y = Math.round(figma.viewport.center.y - hueFrame.height / 2);
  // Select the newly created frame
  figma.currentPage.selection = [hueFrame];

  figma.notify("✅ gradient added");

  return;
};
// figma.closePlugin();
