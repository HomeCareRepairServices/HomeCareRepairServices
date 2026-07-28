'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useConstructionPhase } from '../hooks/useIllustrationAnimation';
import { REFRIGERATOR_COLORS, ANIMATION_TIMINGS, ANIMATION_EASING } from '../constants/colors';
import { AnimatedPath, AnimatedGroup } from '../primitives/AnimatedPath';
import { GlowBreathing, ThermalCycle } from '../primitives/EnergyFlow';

/**
 * Refrigerator
 *
 * Premium product illustration celebrating intelligent cooling and freshness.
 *
 * Narrative: Shows an elegant refrigeration cycle where refrigerant travels through
 * a closed loop - warm on the compressor side (amber glow), transforming into cool
 * at the evaporator (blue glow) that chills the food chamber. Demonstrates the
 * intelligent engineering that keeps food fresh.
 *
 * Visual Language:
 * - Isometric 3D cutaway view
 * - Color thermal gradient: warm (compressor) → cool (evaporator)
 * - Elegant refrigerant cycle loop
 * - Pulsing thermal indicators
 * - Minimalist modern appliance aesthetic
 */
export function Refrigerator() {
  const { isConstructing, isLiving } = useConstructionPhase(ANIMATION_TIMINGS.constructionMedium + 1.5);

  const cycleWaypoints = [
    { x: 60, y: 80 },   // Compressor (warm)
    { x: 140, y: 80 },  // Condenser (warm to cool)
    { x: 140, y: 130 }, // Expansion
    { x: 60, y: 130 },  // Evaporator (cold)
  ];

  return (
    <svg viewBox="0 0 240 240" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="fridge-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={REFRIGERATOR_COLORS.bodyLight} stopOpacity="0.8" />
          <stop offset="100%" stopColor={REFRIGERATOR_COLORS.background} stopOpacity="0.9" />
        </linearGradient>

        <filter id="glow-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
      </defs>

      {/* === CONSTRUCTION PHASE === */}
      {isConstructing && (
        <>
          {/* Stage 1: Main housing (0-0.8s) */}
          <AnimatedPath
            d="M 25 85 L 175 85 L 180 90 L 180 160 L 175 165 L 25 165 Q 20 165 20 160 L 20 90 Q 20 85 25 85"
            stroke={REFRIGERATOR_COLORS.cool}
            strokeWidth="1.5"
            duration={ANIMATION_TIMINGS.constructionFast}
            delay={0}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 2: Interior chamber (0.8-2s) */}
          <AnimatedPath
            d="M 30 100 L 170 100 L 170 155 L 30 155"
            stroke={REFRIGERATOR_COLORS.coolDark}
            strokeWidth="0.8"
            duration={ANIMATION_TIMINGS.constructionMedium}
            delay={ANIMATION_TIMINGS.constructionFast}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 3: Cooling cycle loop (2-3.2s) */}
          <AnimatedGroup
            paths={[
              {
                d: 'M 50 95 L 110 95',
                stroke: REFRIGERATOR_COLORS.warm,
                strokeWidth: 1.2,
              },
              {
                d: 'M 110 95 L 110 135',
                stroke: REFRIGERATOR_COLORS.cool,
                strokeWidth: 1.2,
              },
              {
                d: 'M 110 135 L 50 135',
                stroke: REFRIGERATOR_COLORS.coolDark,
                strokeWidth: 1.2,
              },
              {
                d: 'M 50 135 L 50 95',
                stroke: REFRIGERATOR_COLORS.warm,
                strokeWidth: 1.2,
              },
            ]}
            baseDelay={ANIMATION_TIMINGS.constructionFast + ANIMATION_TIMINGS.constructionMedium}
            stagger={0.12}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 4: Polish and glows (3.2-3.8s) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: ANIMATION_TIMINGS.constructionFast + ANIMATION_TIMINGS.constructionMedium + ANIMATION_TIMINGS.constructionSlow,
              duration: 0.4,
            }}
          >
            <circle cx="50" cy="95" r="5" fill={REFRIGERATOR_COLORS.warm} opacity="0.2" filter="blur(4px)" />
            <circle cx="110" cy="115" r="5" fill={REFRIGERATOR_COLORS.cool} opacity="0.25" filter="blur(4px)" />
          </motion.g>
        </>
      )}

      {/* === LIVING SYSTEM PHASE === */}
      {isLiving && (
        <>
          {/* Static structure */}
          <rect x="30" y="100" width="140" height="55" rx="3" fill="url(#fridge-body)" opacity="0.15" />

          {/* Thermal cycle visualization */}
          {/* Warm side (compressor) - amber glow */}
          <motion.circle
            cx="50"
            cy="95"
            r="4"
            fill={REFRIGERATOR_COLORS.warm}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Cooling transition - gradient effect */}
          <motion.circle
            cx="110"
            cy="100"
            r="3"
            fill={REFRIGERATOR_COLORS.cool}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />

          {/* Cold side (evaporator) - bright cool glow */}
          <motion.circle
            cx="110"
            cy="135"
            r="5"
            fill={REFRIGERATOR_COLORS.coolDark}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Return path glow */}
          <motion.circle
            cx="50"
            cy="135"
            r="3"
            fill={REFRIGERATOR_COLORS.warm}
            animate={{ opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />

          {/* Interior cold air indicator */}
          <motion.path
            d="M 140 110 L 145 110 M 140 120 L 145 120 M 140 130 L 145 130"
            stroke={REFRIGERATOR_COLORS.coolDark}
            strokeWidth="1"
            strokeLinecap="round"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Frost sparkle effect (subtle) */}
          <motion.circle
            cx="160"
            cy="105"
            r="1.5"
            fill={REFRIGERATOR_COLORS.frost}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.circle
            cx="162"
            cy="125"
            r="1"
            fill={REFRIGERATOR_COLORS.frost}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
          />
        </>
      )}

      {/* Static cooling cycle outline */}
      <path d="M 50 95 L 110 95 L 110 135 L 50 135 Z" fill="none" stroke={REFRIGERATOR_COLORS.primary} strokeWidth="1" opacity="0.4" />

      {/* Fridge housing outline */}
      <path
        d="M 25 85 L 175 85 L 180 90 L 180 160 L 175 165 L 25 165 Q 20 165 20 160 L 20 90 Q 20 85 25 85"
        fill="none"
        stroke={REFRIGERATOR_COLORS.cool}
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* Interior chamber outline */}
      <rect x="30" y="100" width="140" height="55" rx="3" fill="none" stroke={REFRIGERATOR_COLORS.coolDark} strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}
