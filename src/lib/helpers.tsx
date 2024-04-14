// 18 Nov, 2022

import { getHextoRGB, invCol } from "./hues-gradients";

export const handleDownloadPNG = (imgRef, canvasRef) => {
  const canvasS = canvasRef.current;
};

// Get image and return image data to add on figma

export const getImageData = (image, canvasRef) => {
  const canvas = canvasRef.current;

  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  return {
    imageData: context.getImageData(0, 0, image.width, image.height),
    canvas,
    context,
  };
};

// Load image from the view
export const loadImage = async (src, imgRef) =>
  new Promise((resolve, reject) => {
    const img = imgRef.current;

    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src;
  });

// Encode image to object to upload on figma
export async function encodeFigma(canvas, ctx, imageData) {
  ctx.putImageData(imageData, 0, 0);

  return await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      const reader = new FileReader();
      //@ts-ignore
      reader.onload = () => resolve(new Uint8Array(reader.result));
      reader.onerror = () => reject(new Error("Could not read from blob"));
      reader.readAsArrayBuffer(blob);
    });
  });
}

// Set Image on Figma convas
export const setBg = async (imageData) => {
  parent.postMessage(
    {
      pluginMessage: {
        type: "set-bg",
        data: { imageData },
      },
    },
    "*"
  );
};

export const svgBase64 = (svg) => {
  var base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
};

// Fix Node Type Issue
// Group Node and Section not work properly with fill
export const checkNode = (node) => {
  const type = node.type;

  if (type === "TEXT") {
    return false;
  }
  return true;
};

export function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomFloat(min, max) {
  return Math.random() * (min - max) + max;
}

export function rescaleFactor(dimension) {
  switch (dimension) {
    case 800:
      return 0.5;
      break;

    default:
      return 1;
      break;
  }
}

export function getRandomXYPoint() {
  return {
    x: getRandomNumberBetween(0, 1600 / 2),
    y: getRandomNumberBetween(0, 1600 / 2),
  };
}

export function getRandomShapeDimension(
  MIN_SHAPE_SIZE = 0.5,
  MAX_SHAPE_SIZE = 0.8
) {
  return getRandomNumberBetween(1600 * MIN_SHAPE_SIZE, 1600 * MAX_SHAPE_SIZE);
}

// adjust noise
export function adjustNoiseParameters(value) {
  const baseFrequencyRange = [0.1, 0.8]; // Range of baseFrequency values
  const numOctavesRange = [6, 18]; // Range of numOctaves values

  // Reverse the scaling logic for baseFrequency
  const baseFrequency =
    (baseFrequencyRange[1] - baseFrequencyRange[0]) * ((16 - value) / 16) +
    baseFrequencyRange[0];

  // Reverse the scaling logic for numOctaves
  const numOctaves = Math.floor(
    (numOctavesRange[1] - numOctavesRange[0]) * ((16 - value) / 16) +
      numOctavesRange[0]
  );

  // Generate a random seed value
  const seed = Math.floor(Math.random() * 1000);

  return { baseFrequency, numOctaves, seed };
}

//
export const calculateAspectRatioFit = (
  srcWidth,
  srcHeight,
  maxWidth,
  maxHeight
) => {
  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio, ratio: ratio };
};

export const createHue = (hexCode, colorName) => {
  const frame = figma.createFrame();
  const figmaFill = updateSolidFill(hexCode);
  const figmaInvFill = updateSolidFill(invCol(hexCode));
  frame.fills = [figmaFill];

  frame.name = hexCode;

  // Create text elements
  const textNode1 = figma.createText();
  textNode1.characters = hexCode;
  textNode1.fontSize = 12;
  textNode1.fills = [figmaInvFill];
  textNode1.opacity = 0.8;

  const textNode2 = figma.createText();
  textNode2.characters = colorName;
  textNode2.fontSize = 10;
  textNode2.fills = [figmaInvFill];
  textNode2.opacity = 0.8;
  textNode2.blendMode = "OVERLAY";

  // Add text elements to the frame
  frame.appendChild(textNode1);
  frame.appendChild(textNode2);

  // Apply Auto Layout to the frame
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisAlignItems = "CENTER";
  frame.layoutSizingVertical = "FIXED";
  frame.resize(115, 80);

  // Add some spacing between text elements (optional)
  frame.paddingTop = 4;
  frame.paddingBottom = 4;
  frame.paddingLeft = 8;

  return frame;
};

export const createGradient = (hexCodes) => {
  const frame = figma.createFrame();
  frame.name = "gradient";
  frame.fills = [
    {
      type: "GRADIENT_LINEAR",
      gradientTransform: [
        [1, 0, 0],
        [0, 1, 0.5],
      ],
      gradientStops: [
        { position: 0, color: getHextoRGB(hexCodes.hue_1) },
        { position: 1, color: getHextoRGB(hexCodes.hue_2) },
      ],
    },
  ];

  // Create text elements
  const textNode1 = figma.createText();
  textNode1.characters = hexCodes.hue_1;
  textNode1.fontSize = 12;
  textNode1.fills = [updateSolidFill(invCol(hexCodes.hue_1))];
  textNode1.opacity = 0.8;

  // Create text elements
  const textNode2 = figma.createText();
  textNode2.characters = hexCodes.hue_2;
  textNode2.fontSize = 12;
  textNode2.fills = [updateSolidFill(invCol(hexCodes.hue_2))];
  textNode2.opacity = 0.8;

  // Add text elements to the frame
  frame.appendChild(textNode1);
  frame.appendChild(textNode2);

  // Apply Auto Layout to the frame
  frame.layoutMode = "HORIZONTAL";
  frame.primaryAxisAlignItems = "CENTER";
  frame.layoutSizingVertical = "FIXED";
  frame.primaryAxisAlignItems = "SPACE_BETWEEN";
  frame.counterAxisAlignItems = "MAX";
  frame.resize(460, 80);

  // Add some spacing between text elements (optional)
  frame.paddingBottom = 16;
  frame.paddingLeft = 16;
  frame.paddingRight = 16;

  return frame;
};

// random no generator
export const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

export const updateSolidFill = (hexCode) => {
  const newColor = figma.util.rgba(getHextoRGB(hexCode)); // RGBA values: R=255, G=0, B=255, A=0.5
  const updatedFill = figma.util.solidPaint(newColor);
  return updatedFill;
};
