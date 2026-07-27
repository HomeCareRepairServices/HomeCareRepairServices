'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface Particle {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  duration: number;
  radius: number;
  color: string;
  opacity: number;
}

export interface ParticleFlowProps {
  particles: Particle[];
  loop?: boolean;
  easing?: string;
}

/**
 * ParticleFlow component for animated particle trails through paths
 */
export function ParticleFlow({ particles, loop = true, easing = 'easeInOut' }: ParticleFlowProps) {
  return (
    <g>
      {particles.map((particle) => (
        <motion.circle
          key={particle.id}
          r={particle.radius}
          fill={particle.color}
          initial={{ cx: particle.startX, cy: particle.startY, opacity: 0 }}
          animate={{
            cx: particle.endX,
            cy: particle.endY,
            opacity: [0, particle.opacity, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: loop ? Infinity : 0,
            ease: easing as any,
          }}
        />
      ))}
    </g>
  );
}

export interface PulseParticleProps {
  cx: number;
  cy: number;
  color: string;
  maxRadius?: number;
  duration?: number;
  delay?: number;
}

/**
 * PulseParticle component for pulsing circle animations
 */
export function PulseParticle({
  cx,
  cy,
  color,
  maxRadius = 20,
  duration = 2,
  delay = 0,
}: PulseParticleProps) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="2"
      fill={color}
      animate={{
        r: [2, maxRadius],
        opacity: [1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
      }}
    />
  );
}
