import React from 'react';
import { motion } from 'framer-motion';

interface PremiumGlowProps {
  /**
   * Unique identifier for the gradient definition
   */
  id: string;

  /**
   * Primary glow color (with alpha for blending)
   */
  color: string;

  /**
   * Blur radius for soft feathering effect
   */
  blur?: number;

  /**
   * Whether to animate the glow (breathing effect)
   */
  animated?: boolean;

  /**
   * Animation duration in seconds
   */
  animationDuration?: number;

  /**
   * Intensity/opacity of the glow (0-1)
   */
  intensity?: number;

  /**
   * Size of the glow gradient (affects feathering)
   */
  size?: number;
}

/**
 * PremiumGlow
 *
 * Creates a sophisticated, layered glow effect suitable for premium product design.
 * Uses radial gradients with soft feathering to communicate energy, intelligence, or process.
 *
 * The glow is defined as a defs/gradient that can be applied to shapes via fill or filter.
 */
export function PremiumGlow({
  id,
  color,
  blur = 8,
  animated = false,
  animationDuration = 2,
  intensity = 0.3,
  size = 200,
}: PremiumGlowProps) {
  return (
    <>
      {/* Define the radial gradient */}
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor={color}
            stopOpacity={intensity}
          />
          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0"
          />
        </radialGradient>

        {/* Blur filter for soft feathering */}
        <filter id={`${id}-blur`}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={blur} />
        </filter>
      </defs>

      {/* Optional animated glow circle */}
      {animated && (
        <motion.circle
          cx="0"
          cy="0"
          r={size / 2}
          fill={`url(#${id})`}
          filter={`url(#${id}-blur)`}
          animate={{
            opacity: [intensity * 0.5, intensity, intensity * 0.5],
          }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </>
  );
}

/**
 * MultiLayerGlow
 *
 * Creates a more sophisticated glow with multiple color layers for premium feel.
 * Useful for highlighting important components or creating depth.
 */
interface MultiLayerGlowProps {
  id: string;
  primaryColor: string;
  secondaryColor?: string;
  x?: number;
  y?: number;
  size?: number;
  animated?: boolean;
  animationDuration?: number;
}

export function MultiLayerGlow({
  id,
  primaryColor,
  secondaryColor,
  x = 0,
  y = 0,
  size = 150,
  animated = false,
  animationDuration = 2,
}: MultiLayerGlowProps) {
  return (
    <motion.g
      animate={
        animated
          ? {
              opacity: [0.4, 0.7, 0.4],
            }
          : undefined
      }
      transition={
        animated
          ? {
              duration: animationDuration,
              repeat: Infinity,
              ease: 'easeInOut',
            }
          : undefined
      }
    >
      {/* Outer blur layer (softer, larger) */}
      <circle
        cx={x}
        cy={y}
        r={size}
        fill={primaryColor}
        opacity="0.15"
        filter="blur(20px)"
      />

      {/* Middle layer (medium intensity) */}
      <circle
        cx={x}
        cy={y}
        r={size * 0.6}
        fill={primaryColor}
        opacity="0.25"
        filter="blur(10px)"
      />

      {/* Inner core (brighter) */}
      {secondaryColor && (
        <circle
          cx={x}
          cy={y}
          r={size * 0.3}
          fill={secondaryColor}
          opacity="0.35"
          filter="blur(5px)"
        />
      )}
    </motion.g>
  );
}
