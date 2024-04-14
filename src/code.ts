import { createHue } from "./lib/helpers";
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
  let hues = msg.colors;
  console.log(hues[0], "some node here");

  if (!node) {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    // createHue(hues[0].color, hues[0].name);
    // for (let i = 0; i < hues.length; i++) {
    //   createHue(hues[i].color, hues[i].name);
    // }

    const hueFrame = figma.createFrame();

    for (let i = 0; i < hues.length; i++) {
      hueFrame.appendChild(createHue(hues[i].color, hues[i].name));
    }

    // Apply Auto Layout to the frame
    hueFrame.layoutMode = "HORIZONTAL";
    hueFrame.primaryAxisAlignItems = "CENTER";
    // Select the newly created frame
    // figma.currentPage.selection = [frame];
  }

  figma.notify("✅ gradient added");

  return;
};
// figma.closePlugin();
