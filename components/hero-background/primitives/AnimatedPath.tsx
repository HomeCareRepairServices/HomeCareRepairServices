'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface AnimatedPathProps {
  d: string;
  stroke: string;
  strokeWidth: number;
  duration: number;
  delay: number;
  easing: string;
  fill?: string;
}

/**
 * AnimatedPath component for SVG stroke drawing animations
 */
export function AnimatedPath({
  d,
  stroke,
  strokeWidth,
  duration,
  delay,
  easing,
  fill = 'none',
}: AnimatedPathProps) {
  const pathLength = 500; // Approximate SVG path length

  return (
    <motion.path
      d={d}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      initial={{ strokeDashoffset: pathLength, strokeDasharray: pathLength }}
      animate={{ strokeDashoffset: 0 }}
      transition={{
        duration,
        delay,
        ease: easing as any,
      }}
    />
  );
}

export interface AnimatedGroupPath {
  d: string;
  stroke: string;
  strokeWidth: number;
  fill?: string;
}

export interface AnimatedGroupProps {
  paths: AnimatedGroupPath[];
  baseDelay: number;
  stagger: number;
  easing: string;
}

/**
 * AnimatedGroup component for multiple animated paths with stagger effect
 */
export function AnimatedGroup({
  paths,
  baseDelay,
  stagger,
  easing,
}: AnimatedGroupProps) {
  const pathLength = 500;

  return (
    <g>
      {paths.map((path, index) => (
        <motion.path
          key={index}
          d={path.d}
          fill={path.fill || 'none'}
          stroke={path.stroke}
          strokeWidth={path.strokeWidth}
          initial={{ strokeDashoffset: pathLength, strokeDasharray: pathLength }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 1.2,
            delay: baseDelay + index * stagger,
            ease: easing as any,
          }}
        />
      ))}
    </g>
  );
}
