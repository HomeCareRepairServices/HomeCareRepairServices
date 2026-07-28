'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useConstructionPhase } from '../hooks/useIllustrationAnimation';
import { WATER_PURIFIER_COLORS, ANIMATION_TIMINGS, ANIMATION_EASING } from '../constants/colors';
import { AnimatedPath, AnimatedGroup } from '../primitives/AnimatedPath';
import { ParticleFlow, PulseParticle } from '../primitives/ParticleFlow';
import { MultiLayerGlow } from '../primitives/PremiumGlow';

/**
 * WaterPurifier
 *
 * Premium product illustration celebrating the journey of water becoming pure.
 *
 * Narrative: Water enters cloudy/sediment-laden from the left, flows through elegant
 * purification chambers that progressively clarify it (visible through color progression),
 * and exits crystal-clear on the right—demonstrating the transformative power of the system.
 *
 * Visual Language:
 * - Isometric 3D cutaway view showing the purification journey
 * - Color gradient from gray (untreated) → aqua/turquoise (pure)
 * - Elegant, minimal chamber shapes (no technical detail)
 * - Particle flow showing sediment removal
 * - Sophisticated glows at each stage
 * - Beautiful proportions and confident geometry
 */
export function WaterPurifier() {
  const { isConstructing, isLiving } = useConstructionPhase(ANIMATION_TIMINGS.constructionMedium + 1);

  // Chamber positions and colors (showing purification progression)
  const chambers = [
    { x: 50, color: WATER_PURIFIER_COLORS.primary, label: 'sediment' },
    { x: 100, color: WATER_PURIFIER_COLORS.secondary, label: 'carbon' },
    { x: 150, color: WATER_PURIFIER_COLORS.accent, label: 'membrane' },
    { x: 190, color: WATER_PURIFIER_COLORS.primary, label: 'clarity' },
  ];

  // Particle flow data - sediment progressively clearing
  const purificationParticles = [
    // Input particles (cloudy)
    { id: 'p1', startX: 10, startY: 105, endX: 45, endY: 105, delay: 0, duration: 3, radius: 2.5, color: '#888888', opacity: 0.8 },
    { id: 'p2', startX: 12, startY: 115, endX: 48, endY: 115, delay: 0.4, duration: 3, radius: 2, color: '#666666', opacity: 0.7 },
    { id: 'p3', startX: 8, startY: 125, endX: 42, endY: 125, delay: 0.8, duration: 3, radius: 2.2, color: '#777777', opacity: 0.6 },

    // Stage 2 particles (less cloudy)
    { id: 'p4', startX: 55, startY: 108, endX: 95, endY: 108, delay: 1.2, duration: 2.8, radius: 1.8, color: '#AAB8CC', opacity: 0.5 },
    { id: 'p5', startX: 58, startY: 118, endX: 98, endY: 118, delay: 1.5, duration: 2.8, radius: 1.5, color: '#8BA0B8', opacity: 0.4 },

    // Stage 3 particles (clear)
    { id: 'p6', startX: 105, startY: 110, endX: 145, endY: 110, delay: 2.2, duration: 2.5, radius: 1.2, color: WATER_PURIFIER_COLORS.accent, opacity: 0.6 },
    { id: 'p7', startX: 108, startY: 120, endX: 148, endY: 120, delay: 2.5, duration: 2.5, radius: 1, color: WATER_PURIFIER_COLORS.accent, opacity: 0.5 },

    // Output particles (crystal clear)
    { id: 'p8', startX: 155, startY: 112, endX: 195, endY: 112, delay: 3.2, duration: 2.3, radius: 1, color: WATER_PURIFIER_COLORS.primary, opacity: 0.9 },
    { id: 'p9', startX: 158, startY: 118, endX: 198, endY: 118, delay: 3.5, duration: 2.3, radius: 0.8, color: WATER_PURIFIER_COLORS.primary, opacity: 0.8 },
  ];

  return (
    <svg viewBox="0 0 240 240" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        {/* Gradients for chambers - showing color progression */}
        <linearGradient id="chamber-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={WATER_PURIFIER_COLORS.primary} stopOpacity="0.2" />
          <stop offset="100%" stopColor={WATER_PURIFIER_COLORS.primary} stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="chamber-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={WATER_PURIFIER_COLORS.secondary} stopOpacity="0.2" />
          <stop offset="100%" stopColor={WATER_PURIFIER_COLORS.secondary} stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="chamber-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={WATER_PURIFIER_COLORS.accent} stopOpacity="0.25" />
          <stop offset="100%" stopColor={WATER_PURIFIER_COLORS.accent} stopOpacity="0.05" />
        </linearGradient>

        {/* Blur filters */}
        <filter id="glow-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
      </defs>

      {/* === CONSTRUCTION PHASE: Premium Reveal Animation === */}
      {isConstructing && (
        <>
          {/* Stage 1: Main housing outline (0-0.8s) */}
          <AnimatedPath
            d="M 20 100 L 200 100 L 205 105 L 205 135 L 200 140 L 20 140 Q 15 140 15 135 L 15 105 Q 15 100 20 100"
            stroke={WATER_PURIFIER_COLORS.primary}
            strokeWidth="1.5"
            duration={ANIMATION_TIMINGS.constructionFast}
            delay={0}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 2: Chamber dividers revealing purification stages (0.8-2.3s) */}
          <AnimatedGroup
            paths={[
              {
                d: `M 50 100 L 50 140`,
                stroke: WATER_PURIFIER_COLORS.primary,
                strokeWidth: 1.2,
              },
              {
                d: `M 100 100 L 100 140`,
                stroke: WATER_PURIFIER_COLORS.secondary,
                strokeWidth: 1.2,
              },
              {
                d: `M 150 100 L 150 140`,
                stroke: WATER_PURIFIER_COLORS.accent,
                strokeWidth: 1.2,
              },
            ]}
            baseDelay={ANIMATION_TIMINGS.constructionFast}
            stagger={0.15}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 3: Input/output ports (2.3-3.1s) */}
          <AnimatedGroup
            paths={[
              {
                d: 'M 10 120 L 15 120',
                stroke: WATER_PURIFIER_COLORS.primary,
                strokeWidth: 2,
              },
              {
                d: 'M 205 120 L 210 120',
                stroke: WATER_PURIFIER_COLORS.primary,
                strokeWidth: 2,
              },
            ]}
            baseDelay={ANIMATION_TIMINGS.constructionFast + ANIMATION_TIMINGS.constructionMedium}
            stagger={0.1}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 4: Chamber fills and glows fade in (3.1-3.8s) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: ANIMATION_TIMINGS.constructionFast + ANIMATION_TIMINGS.constructionMedium + ANIMATION_TIMINGS.constructionSlow * 0.8,
              duration: 0.5,
            }}
          >
            {/* Chamber fills */}
            <rect x="20" y="100" width="30" height="40" rx="3" fill="url(#chamber-gradient-1)" />
            <rect x="70" y="100" width="30" height="40" rx="3" fill="url(#chamber-gradient-2)" />
            <rect x="120" y="100" width="30" height="40" rx="3" fill="url(#chamber-gradient-3)" />
            <rect x="170" y="100" width="30" height="40" rx="3" fill="url(#chamber-gradient-1)" />
          </motion.g>
        </>
      )}

      {/* === LIVING SYSTEM PHASE: Continuous Operation === */}
      {isLiving && (
        <>
          {/* Static chamber fills */}
          <rect x="20" y="100" width="30" height="40" rx="3" fill="url(#chamber-gradient-1)" />
          <rect x="70" y="100" width="30" height="40" rx="3" fill="url(#chamber-gradient-2)" />
          <rect x="120" y="100" width="30" height="40" rx="3" fill="url(#chamber-gradient-3)" />
          <rect x="170" y="100" width="30" height="40" rx="3" fill="url(#chamber-gradient-1)" />

          {/* Particle flow through purification stages */}
          <ParticleFlow particles={purificationParticles} loop={true} easing="linear" />

          {/* Pulsing glows at each chamber (showing active process) */}
          <motion.circle
            cx="35"
            cy="120"
            r="6"
            fill={WATER_PURIFIER_COLORS.primary}
            animate={{ opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="85"
            cy="120"
            r="6"
            fill={WATER_PURIFIER_COLORS.secondary}
            animate={{ opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
          <motion.circle
            cx="135"
            cy="120"
            r="6"
            fill={WATER_PURIFIER_COLORS.accent}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
          <motion.circle
            cx="185"
            cy="120"
            r="6"
            fill={WATER_PURIFIER_COLORS.primary}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />

          {/* Incoming water turbulence indicator (left side) */}
          <motion.path
            d="M 12 115 Q 14 110 16 115 Q 18 120 20 115"
            stroke={WATER_PURIFIER_COLORS.text}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 12 125 Q 14 120 16 125 Q 18 130 20 125"
            stroke={WATER_PURIFIER_COLORS.text}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />

          {/* Clear exit water indicator (right side) */}
          <motion.path
            d="M 205 115 L 208 115 M 205 120 L 208 120 M 205 125 L 208 125"
            stroke={WATER_PURIFIER_COLORS.primary}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Static outline (always visible) */}
      <path
        d="M 20 100 L 200 100 L 205 105 L 205 135 L 200 140 L 20 140 Q 15 140 15 135 L 15 105 Q 15 100 20 100"
        fill="none"
        stroke={WATER_PURIFIER_COLORS.primary}
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* Chamber dividers (static) */}
      <line x1="50" y1="100" x2="50" y2="140" stroke={WATER_PURIFIER_COLORS.primary} strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="100" x2="100" y2="140" stroke={WATER_PURIFIER_COLORS.secondary} strokeWidth="0.8" opacity="0.3" />
      <line x1="150" y1="100" x2="150" y2="140" stroke={WATER_PURIFIER_COLORS.accent} strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}
