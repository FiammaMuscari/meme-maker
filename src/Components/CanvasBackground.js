import React from "react";
import { Rect } from "react-konva";
import useImage from "use-image";

// Konva way of adding background image to canvas
// creating Rect Konva component
// placing it at the bottom of all elements
// changing its z-index to lowest value

function CanvasBackground({ backgroundUrl, width, height }) {
  const [background] = useImage(backgroundUrl);

  // Calcula los factores de escala para que el fondo se ajuste al canvas
  let widthRatio = 1;
  let heightRatio = 1;
  if (background) {
    // Calcula los factores de escala basados en la dimensión que requiere más escala
    widthRatio = width / background.width;
    heightRatio = height / background.height;

    // Escoge el factor de escala más pequeño para que el fondo quepa completamente en el canvas
    const minRatio = Math.min(widthRatio, heightRatio);
    widthRatio = minRatio;
    heightRatio = minRatio;
  }

  return (
    <Rect
      x={0}
      y={0}
      zIndex={-100}
      width={width}
      height={height}
      fillPatternImage={background}
      fillPatternRepeat={"no-repeat"}
      fillPatternScaleX={widthRatio}
      fillPatternScaleY={heightRatio}
      id="canvasBackground"
    ></Rect>
  );
}

export default CanvasBackground;
