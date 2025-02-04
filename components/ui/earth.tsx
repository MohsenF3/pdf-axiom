"use client";

import { useGlobe } from "@/hooks/use-globe";
import React from "react";

export default function Earth() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  useGlobe(canvasRef);

  return (
    <canvas
      className="absolute top-[7.1rem] z-20 aspect-square size-full max-w-fit md:top-[12rem]"
      ref={canvasRef}
      style={{ width: 1200, height: 1200 }}
    />
  );
}
