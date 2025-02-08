import createGlobe, { COBEOptions } from "cobe";
import React from "react";

const GLOBE_CONFIG: Omit<COBEOptions, "onRender"> = {
  devicePixelRatio: 1,
  width: 1200,
  height: 1200,
  phi: 0,
  theta: -0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 5000,
  mapBrightness: 13,
  mapBaseBrightness: 0.05,
  baseColor: [0.3, 0.3, 0.3],
  glowColor: [0.15, 0.15, 0.15],
  markerColor: [100, 100, 100],
  markers: [],
};

export const useGlobe = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  React.useEffect(() => {
    let phi = 4.7;

    const globe = createGlobe(canvasRef.current!, {
      ...GLOBE_CONFIG,
      onRender: (state: { phi?: number }) => {
        state.phi = phi;
        phi += 0.0002;
      },
    });

    return () => globe.destroy();
  }, [canvasRef]);
};
