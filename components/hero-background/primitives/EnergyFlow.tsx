'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface GlowBreathingProps {
  cx: number;
  cy: number;
  color: string;
  duration?: number;
  delay?: number;
}

/**
 * GlowBreathing component for subtle breathing glow animations
 */
export function GlowBreathing({
  cx,
  cy,
  color,
  duration = 2.5,
  delay = 0,
}: GlowBreathingProps) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="8"
      fill={color}
      animate={{ opacity: [0.2, 0.6, 0.2] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export interface ThermalCycleProps {
  waypoints: Array<{ x: number; y: number }>;
  color: string;
  duration?: number;
}

/**
 * ThermalCycle component for cycling particle animations through waypoints
 */
export function ThermalCycle({
  waypoints,
  color,
  duration = 4,
}: ThermalCycleProps) {
  const positions = waypoints.map((p) => [p.x, p.y]).flat();

  return (
    <motion.circle
      r="3"
      fill={color}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

export interface RotatingGlowProps {
  cx: number;
  cy: number;
  color: string;
  duration?: number;
  radius?: number;
}

/**
 * RotatingGlow component for rotating/spinning glow effects
 */
export function RotatingGlow({
  cx,
  cy,
  color,
  duration = 4,
  radius = 8,
}: RotatingGlowProps) {
  return (
    <motion.g
      style={{ transformOrigin: `${cx}px ${cy}px` }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <circle cx={cx} cy={cy - radius} r="3" fill={color} opacity="0.6" />
    </motion.g>
  );
}
