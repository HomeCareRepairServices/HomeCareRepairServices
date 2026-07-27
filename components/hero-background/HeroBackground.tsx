"use client"

import { WaterPurifier } from "./services"
import { ACAirflow } from "./services"
import { Refrigerator } from "./services"
import { WashingMachine } from "./services"
import { Electrical } from "./services"

export function HeroBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "hidden" }}
    >
      <g style={{ stroke: "rgba(56, 189, 248, 1)" }}>
        {/* Layer 1: Top Heavyweight Blueprints */}
        <g transform="translate(346, 22) scale(0.5)">
          <WaterPurifier />
        </g>
        <g transform="translate(960, 11) scale(0.38)">
          <Refrigerator />
        </g>

        {/* Layer 2: Secondary Schematics */}
        <g transform="translate(1114, 238) scale(0.34)">
          <g transform="translate(100, 300) scale(0.55)"><ACAirflow /></g>
          <g transform="translate(450, 400) scale(0.45)"><WashingMachine /></g>
          <g><Electrical /></g>
        </g>
      </g>
    </svg>
  )
}
