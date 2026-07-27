"use client"

import { motion } from "framer-motion"
import {
  BlueprintContainer,
  BlueprintGlow,
  BlueprintLabel,
} from "../primitives"

export default function Electrical() {
  const breakerX = 640
  const breakerY = 340
  const load1X = 1140
  const load1Y = 340
  const load2X = 640
  const load2Y = 620
  const groundEndX = 280
  const groundEndY = 820

  return (
    <BlueprintContainer isRoot={false}>
      <g stroke="#80FFDB" strokeWidth="0.3" strokeDasharray="8 6" opacity={0.04}>
        <line x1={breakerX} y1={280} x2={breakerX} y2={800} />
        <line x1={200} y1={breakerY} x2={1200} y2={breakerY} />
        <line x1={200} y1={load2Y} x2={800} y2={load2Y} />
        <line x1={200} y1={groundEndY} x2={800} y2={groundEndY} />
      </g>

      <g stroke="#80FFDB" strokeWidth="0.6" fill="none" opacity={0.12}>
        <line x1={160} y1={breakerY} x2={breakerX - 30} y2={breakerY} />
        <path d={`M ${breakerX + 30} ${breakerY} L ${load1X - 30} ${load1Y}`} />
        <path d={`M ${breakerX} ${breakerY + 30} L ${load2X} ${load2Y - 20}`} />
        <path d={`M ${breakerX} ${breakerY + 30} L ${breakerX} ${groundEndY - 40}`} />
        <path d={`M ${breakerX} ${groundEndY} L ${groundEndX} ${groundEndY}`} />
      </g>

      <g transform={`translate(${breakerX}, ${breakerY})`}>
        <rect x="-40" y="-50" width="80" height="100" rx="4" fill="none" stroke="#80FFDB" strokeWidth="0.8" opacity={0.15} />
        <rect x="-34" y="-44" width="68" height="88" rx="2" fill="none" stroke="#EAF8FF" strokeWidth="0.3" opacity={0.06} />
        <line x1="-50" y1="0" x2="50" y2="0" stroke="#EAF8FF" strokeWidth="0.2" opacity={0.06} />
        <line x1="0" y1="-60" x2="0" y2="60" stroke="#EAF8FF" strokeWidth="0.2" opacity={0.06} />
        <g stroke="#FFD166" strokeWidth="0.8" opacity={0.25}>
          <path d="M -15,-10 L 0,0 L 15,10" />
          <path d="M 15,-10 L 0,0 L -15,10" />
        </g>
        <motion.g
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 12, times: [0.1, 0.14, 0.18, 0.22], repeat: Infinity }}
        >
          <circle r="25" fill="#FFD166" filter="url(#blueprint-glow)" opacity={0.6} />
          <g stroke="#FFFFFF" strokeWidth="1" fill="none" opacity={0.8}>
            <path d="M -15,-10 L 0,0 L 15,10" />
            <path d="M 15,-10 L 0,0 L -15,10" />
          </g>
        </motion.g>
      </g>

      <motion.circle
        r="4"
        fill="#9FFFCB"
        filter="url(#blueprint-glow)"
        animate={{
          cx: [160, breakerX, breakerX, breakerX],
          opacity: [0, 0.8, 0, 0],
        }}
        transition={{ duration: 12, times: [0, 0.02, 0.08, 0.12], repeat: Infinity, ease: "linear" }}
      />

      <motion.circle
        r="3.5"
        fill="#06D6A0"
        filter="url(#blueprint-glow)"
        animate={{
          cx: [breakerX, load1X, load1X, load1X],
          cy: [breakerY, load1Y, load1Y, load1Y],
          opacity: [0, 0.2, 0.2, 0],
        }}
        transition={{ duration: 12, times: [0.3, 0.5, 0.6, 0.65], repeat: Infinity, ease: "linear" }}
      />

      <motion.circle
        r="3.5"
        fill="#06D6A0"
        filter="url(#blueprint-glow)"
        animate={{
          cx: [breakerX, load2X, load2X, load2X],
          cy: [breakerY, load2Y, load2Y, load2Y],
          opacity: [0, 0.2, 0.2, 0],
        }}
        transition={{ duration: 12, times: [0.5, 0.7, 0.8, 0.85], repeat: Infinity, ease: "linear" }}
      />

      <motion.circle
        r="3.5"
        fill="#80FFDB"
        filter="url(#blueprint-glow)"
        animate={{
          cx: [breakerX, breakerX, groundEndX, groundEndX],
          cy: [breakerY, breakerY, groundEndY, groundEndY],
          opacity: [0, 0.6, 0.6, 0],
        }}
        transition={{ duration: 12, times: [0.6, 0.8, 0.85, 0.9], repeat: Infinity, ease: "linear" }}
      />

      <BlueprintLabel x={300} y={breakerY - 10} text="MAIN LINE" lineColor="#9FFFCB" textColor="#9FFFCB" />
      <BlueprintLabel x={breakerX} y={breakerY - 70} text="BREAKER" lineColor="#FFD166" textColor="#FFD166" />
      <BlueprintLabel x={load1X + 50} y={load1Y - 10} text="LOAD 1" lineColor="#06D6A0" textColor="#06D6A0" />
      <BlueprintLabel x={load2X + 50} y={load2Y - 10} text="LOAD 2" lineColor="#06D6A0" textColor="#06D6A0" />
      <BlueprintLabel x={groundEndX + 50} y={groundEndY - 10} text="GROUND" lineColor="#80FFDB" textColor="#80FFDB" />
    </BlueprintContainer>
  )
}
