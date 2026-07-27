import React from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  duration: number;
  radius?: number;
  color?: string;
  opacity?: number;
}

interface ParticleFlowProps {
  /**
   * Array of particles to animate
   */
  particles: Particle[];

  /**
   * Loop the animation indefinitely
   */
  loop?: boolean;

  /**
   * Animation easing function
   */
  easing?: string | number[];
}

/**
 * ParticleFlow
 *
 * Animates particles flowing along a path from start to end position.
 * Used for water flowing through purification stages, air through AC ducts,
 * or sediment particles being removed from water.
 *
 * Supports staggered animations and individual particle customization.
 */
export function ParticleFlow({
  particles,
  loop = true,
  easing = 'linear',
}: ParticleFlowProps) {
  return (
    <g>
      {particles.map((particle) => (
        <motion.circle
          key={particle.id}
          cx={particle.startX}
          cy={particle.startY}
          r={particle.radius ?? 3}
          fill={particle.color ?? '#06B6D4'}
          opacity={particle.opacity ?? 0.7}
          animate={{
            x: particle.endX - particle.startX,
            y: particle.endY - particle.startY,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: loop ? Infinity : 0,
            ease: easing,
          }}
        />
      ))}
    </g>
  );
}

/**
 * PulseParticle
 *
 * Single particle that pulses in and out, useful for indicating
 * sediment removal or particle disappearance.
 */
interface PulseParticleProps {
  x: number;
  y: number;
  radius?: number;
  color?: string;
  duration?: number;
  delay?: number;
  fadeOut?: boolean;
}

export function PulseParticle({
  x,
  y,
  radius = 3,
  color = '#06B6D4',
  duration = 2,
  delay = 0,
  fadeOut = true,
}: PulseParticleProps) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={radius}
      fill={color}
      animate={
        fadeOut
          ? {
              r: [radius, radius * 1.2, 0],
              opacity: [0.8, 1, 0],
            }
          : {
              r: [radius * 0.8, radius, radius * 0.8],
              opacity: [0.5, 1, 0.5],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
}

/**
 * TrailParticles
 *
 * Creates a trail of particles that fade over time, suggesting motion direction.
 * Useful for showing water flow, air currents, or energy movement.
 */
interface TrailParticle {
  id: string;
  offset: number; // How far back in the trail (0 = newest)
}

interface TrailParticlesProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  trailLength?: number;
  particleRadius?: number;
  color?: string;
  duration?: number;
}

export function TrailParticles({
  startX,
  startY,
  endX,
  endY,
  trailLength = 8,
  particleRadius = 2.5,
  color = '#38BDF8',
  duration = 3,
}: TrailParticlesProps) {
  const particles: TrailParticle[] = Array.from(
    { length: trailLength },
    (_, i) => ({
      id: `trail-${i}`,
      offset: i,
    })
  );

  return (
    <g>
      {particles.map((particle) => {
        // Position along the path based on offset
        const progress = particle.offset / trailLength;
        const trailX = startX + (endX - startX) * progress;
        const trailY = startY + (endY - startY) * progress;

        return (
          <motion.circle
            key={particle.id}
            cx={trailX}
            cy={trailY}
            r={particleRadius}
            fill={color}
            opacity={1 - progress * 0.7} // Fade older particles
            animate={{
              x: endX - trailX,
              y: endY - trailY,
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}
    </g>
  );
}

/**
 * ParticleBurst
 *
 * Particles burst outward from a center point, useful for
 * showing energy release or activation.
 */
interface ParticleBurstProps {
  x: number;
  y: number;
  count?: number;
  radius?: number;
  distance?: number;
  color?: string;
  duration?: number;
  delay?: number;
}

export function ParticleBurst({
  x,
  y,
  count = 6,
  radius = 2,
  distance = 40,
  color = '#F59E0B',
  duration = 1,
  delay = 0,
}: ParticleBurstProps) {
  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return {
      id: `burst-${i}`,
      angle,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
    };
  });

  return (
    <g>
      {particles.map((particle) => (
        <motion.circle
          key={particle.id}
          cx={x}
          cy={y}
          r={radius}
          fill={color}
          animate={{
            x: particle.dx,
            y: particle.dy,
            opacity: [1, 0],
          }}
          transition={{
            duration,
            delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </g>
  );
}
