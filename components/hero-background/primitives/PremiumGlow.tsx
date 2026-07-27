'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface MultiLayerGlowProps {
  x: number;
  y: number;
  colors: string[];
  radii: number[];
  opacities: number[];
}

/**
 * MultiLayerGlow component for sophisticated multi-layer glow effects
 */
export function MultiLayerGlow({
  x,
  y,
  colors,
  radii,
  opacities,
}: MultiLayerGlowProps) {
  return (
    <g>
      {colors.map((color, index) => (
        <motion.circle
          key={index}
          cx={x}
          cy={y}
          r={radii[index]}
          fill={color}
          opacity={opacities[index]}
          animate={{
            r: [radii[index] * 0.8, radii[index], radii[index] * 0.8],
            opacity: [opacities[index] * 0.5, opacities[index], opacities[index] * 0.5],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </g>
  );
}
