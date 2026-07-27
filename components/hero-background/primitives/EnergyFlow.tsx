import React from 'react';
import { motion } from 'framer-motion';

/**
 * EnergyPulse
 *
 * Animates a glow pulse that travels along a path.
 * Used for refrigerant cycles, electrical energy flow, or process sequences.
 */
interface EnergyPulseProps {
  /**
   * SVG path for the energy to follow
   */
  pathId: string;

  /**
   * Color of the energy pulse
   */
  color: string;

  /**
   * Width of the glow
   */
  glowWidth?: number;

  /**
   * Duration of one complete cycle
   */
  duration?: number;

  /**
   * Delay before animation starts
   */
  delay?: number;

  /**
   * Number of pulses traveling simultaneously
   */
  pulseCount?: number;
}

export function EnergyPulse({
  pathId,
  color,
  glowWidth = 8,
  duration = 8,
  delay = 0,
  pulseCount = 1,
}: EnergyPulseProps) {
  const pulses = Array.from({ length: pulseCount }, (_, i) => ({
    id: `pulse-${i}`,
    offset: (i / pulseCount) * duration,
  }));

  return (
    <g>
      {pulses.map((pulse) => (
        <motion.circle
          key={pulse.id}
          r={glowWidth / 2}
          fill={color}
          opacity="0.7"
          filter="url(#energy-blur)"
          animate={{
            offsetDistance: '100%',
          }}
          transition={{
            duration,
            delay: delay + pulse.offset,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            offsetPath: `url(#${pathId})`,
            offsetDistance: '0%',
          } as React.CSSProperties & { offsetDistance: string; offsetPath: string }}
        />
      ))}
    </g>
  );
}

/**
 * ThermalCycle
 *
 * Animates a color-changing pulse through a refrigeration cycle.
 * Shows transformation from warm (compressor side) to cool (evaporator side).
 */
interface ThermalCycleProps {
  /**
   * Starting X position
   */
  startX: number;

  /**
   * Starting Y position
   */
  startY: number;

  /**
   * Waypoints through the cycle (x, y coordinates)
   */
  waypoints: Array<{ x: number; y: number }>;

  /**
   * Color progression (warm to cool)
   */
  colors: string[];

  /**
   * Radius of the cycle indicator
   */
  radius?: number;

  /**
   * Duration of one complete cycle
   */
  duration?: number;
}

export function ThermalCycle({
  startX,
  startY,
  waypoints,
  colors,
  radius = 6,
  duration = 8,
}: ThermalCycleProps) {
  const allPoints = [{ x: startX, y: startY }, ...waypoints];

  return (
    <motion.g>
      {allPoints.map((point, i) => {
        const nextPoint = allPoints[(i + 1) % allPoints.length];
        const colorIndex = i % colors.length;
        const nextColorIndex = (i + 1) % colors.length;

        return (
          <motion.g key={`thermal-${i}`}>
            {/* Animated circle moving between waypoints */}
            <motion.circle
              cx={point.x}
              cy={point.y}
              r={radius}
              fill={colors[colorIndex]}
              animate={{
                cx: nextPoint.x,
                cy: nextPoint.y,
              }}
              transition={{
                duration: duration / allPoints.length,
                delay: (i * duration) / allPoints.length,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.g>
        );
      })}
    </motion.g>
  );
}

/**
 * GlowBreathing
 *
 * A pulsing glow that breathes in and out, suggesting activity or intelligence.
 * Used for indicator lights, compressor activity, or system status.
 */
interface GlowBreathingProps {
  x: number;
  y: number;
  color: string;
  minRadius?: number;
  maxRadius?: number;
  duration?: number;
  delay?: number;
  intensity?: number;
}

export function GlowBreathing({
  x,
  y,
  color,
  minRadius = 4,
  maxRadius = 12,
  duration = 2,
  delay = 0,
  intensity = 0.6,
}: GlowBreathingProps) {
  return (
    <motion.g>
      {/* Outer glow layer */}
      <motion.circle
        cx={x}
        cy={y}
        r={minRadius}
        fill={color}
        animate={{
          r: [minRadius, maxRadius],
          opacity: [intensity, intensity * 0.2],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Core indicator */}
      <circle cx={x} cy={y} r={minRadius * 0.5} fill={color} opacity={intensity} />
    </motion.g>
  );
}

/**
 * ElectricalArc
 *
 * Animated arc showing electrical connection or energy flow between two points.
 * Creates a more organic, less technical aesthetic than straight lines.
 */
interface ElectricalArcProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  strokeWidth?: number;
  duration?: number;
  arcOffset?: number; // How much the arc curves
}

export function ElectricalArc({
  x1,
  y1,
  x2,
  y2,
  color,
  strokeWidth = 2,
  duration = 3,
  arcOffset = 30,
}: ElectricalArcProps) {
  const midX = (x1 + x2) / 2 + arcOffset;
  const midY = (y1 + y2) / 2;

  const pathData = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;

  return (
    <motion.path
      d={pathData}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeDasharray="20 10"
      animate={{
        strokeDashoffset: [-30, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

/**
 * LiquidFlow
 *
 * Animates liquid flowing through a path, with particles and color changes.
 * More sophisticated than simple path animation.
 */
interface LiquidFlowProps {
  pathId: string;
  color: string;
  glowColor?: string;
  strokeWidth?: number;
  duration?: number;
  particleCount?: number;
}

export function LiquidFlow({
  pathId,
  color,
  glowColor = color,
  strokeWidth = 3,
  duration = 4,
  particleCount = 3,
}: LiquidFlowProps) {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: `liquid-${i}`,
    offset: (i / particleCount) * duration,
  }));

  return (
    <g>
      {/* Flow glow */}
      <motion.path
        stroke={glowColor}
        strokeWidth={strokeWidth * 3}
        fill="none"
        strokeLinecap="round"
        opacity="0.2"
        animate={{
          pathLength: [0, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          pathLength: 0,
        } as React.CSSProperties}
      />

      {/* Main flow */}
      <motion.path
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        animate={{
          pathLength: [0, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          pathLength: 0,
        } as React.CSSProperties}
      />
    </g>
  );
}

/**
 * RotatingGlow
 *
 * A rotating ring of glow, useful for indicating active processes or rotation.
 */
interface RotatingGlowProps {
  x: number;
  y: number;
  innerRadius?: number;
  outerRadius?: number;
  color?: string;
  duration?: number;
  direction?: 'cw' | 'ccw';
}

export function RotatingGlow({
  x,
  y,
  innerRadius = 20,
  outerRadius = 35,
  color = '#06B6D4',
  duration = 3,
  direction = 'cw',
}: RotatingGlowProps) {
  return (
    <motion.g
      animate={{
        rotate: direction === 'cw' ? 360 : -360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      <circle
        cx={x}
        cy={y}
        r={outerRadius}
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.5"
        strokeDasharray="10 5"
      />
      <circle
        cx={x}
        cy={y}
        r={innerRadius}
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.3"
        strokeDasharray="8 4"
      />
    </motion.g>
  );
}
