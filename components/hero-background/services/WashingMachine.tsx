'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useConstructionPhase } from '../hooks/useIllustrationAnimation';
import { WASHING_MACHINE_COLORS, ANIMATION_TIMINGS, ANIMATION_EASING } from '../constants/colors';
import { AnimatedPath, AnimatedGroup } from '../primitives/AnimatedPath';
import { ParticleFlow } from '../primitives/ParticleFlow';

/**
 * WashingMachine
 *
 * Premium product illustration celebrating clean through intelligent motion.
 *
 * Narrative: Shows a rotating drum with water inlet at top flowing down,
 * circulating around the rotating drum (where clothes tumble and clean),
 * and draining at the bottom. The gentle drum rotation and water flow
 * illustrate the elegance of the wash cycle.
 *
 * Visual Language:
 * - Isometric 3D cutaway view
 * - Central rotating drum as the hero element
 * - Water flow animation showing circulation
 * - Gentle drum rotation (not aggressive)
 * - Aqua/silver metallic aesthetic
 */
export function WashingMachine() {
  const { isConstructing, isLiving } = useConstructionPhase(ANIMATION_TIMINGS.constructionMedium + 1.5);

  const waterParticles = [
    // Inlet water flowing down
    { id: 'w1', startX: 120, startY: 85, endX: 100, endY: 110, delay: 0, duration: 2, radius: 1.5, color: WASHING_MACHINE_COLORS.waterDark, opacity: 0.7 },
    { id: 'w2', startX: 120, startY: 90, endX: 105, endY: 115, delay: 0.3, duration: 2, radius: 1.3, color: WASHING_MACHINE_COLORS.waterDark, opacity: 0.6 },

    // Water circulating around drum
    { id: 'w3', startX: 95, startY: 120, endX: 85, endY: 140, delay: 0.8, duration: 2.2, radius: 1.2, color: WASHING_MACHINE_COLORS.aqua, opacity: 0.5 },
    { id: 'w4', startX: 130, startY: 120, endX: 140, endY: 140, delay: 1, duration: 2.2, radius: 1.2, color: WASHING_MACHINE_COLORS.aqua, opacity: 0.5 },

    // Water draining
    { id: 'w5', startX: 120, startY: 150, endX: 120, endY: 175, delay: 2, duration: 1.8, radius: 1, color: WASHING_MACHINE_COLORS.waterGlow, opacity: 0.6 },
  ];

  return (
    <svg viewBox="0 0 240 240" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="drum-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={WASHING_MACHINE_COLORS.silver} stopOpacity="0.3" />
          <stop offset="100%" stopColor={WASHING_MACHINE_COLORS.silverLight} stopOpacity="0.15" />
        </linearGradient>

        <filter id="glow-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
      </defs>

      {/* === CONSTRUCTION PHASE === */}
      {isConstructing && (
        <>
          {/* Stage 1: Washing machine housing (0-0.8s) */}
          <AnimatedPath
            d="M 30 75 L 200 75 L 205 80 L 205 160 L 200 165 L 30 165 Q 25 165 25 160 L 25 80 Q 25 75 30 75"
            stroke={WASHING_MACHINE_COLORS.aqua}
            strokeWidth="1.5"
            duration={ANIMATION_TIMINGS.constructionFast}
            delay={0}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 2: Drum outline (0.8-2s) */}
          <AnimatedPath
            d="M 80 95 L 160 95 L 160 145 L 80 145 Z"
            stroke={WASHING_MACHINE_COLORS.silver}
            strokeWidth="1"
            duration={ANIMATION_TIMINGS.constructionMedium}
            delay={ANIMATION_TIMINGS.constructionFast}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 3: Water inlet and drain (2-3.2s) */}
          <AnimatedGroup
            paths={[
              {
                d: 'M 120 75 L 120 95',
                stroke: WASHING_MACHINE_COLORS.waterDark,
                strokeWidth: 1.2,
              },
              {
                d: 'M 120 145 L 120 170',
                stroke: WASHING_MACHINE_COLORS.waterGlow,
                strokeWidth: 1,
              },
            ]}
            baseDelay={ANIMATION_TIMINGS.constructionFast + ANIMATION_TIMINGS.constructionMedium}
            stagger={0.2}
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
            <circle cx="120" cy="85" r="4" fill={WASHING_MACHINE_COLORS.waterDark} opacity="0.2" filter="blur(3px)" />
            <circle cx="120" cy="175" r="3" fill={WASHING_MACHINE_COLORS.waterGlow} opacity="0.2" filter="blur(3px)" />
            <circle cx="120" cy="120" r="6" fill={WASHING_MACHINE_COLORS.aqua} opacity="0.15" filter="blur(4px)" />
          </motion.g>
        </>
      )}

      {/* === LIVING SYSTEM PHASE === */}
      {isLiving && (
        <>
          {/* Drum body fill */}
          <rect x="80" y="95" width="80" height="50" rx="3" fill="url(#drum-body)" />

          {/* Rotating drum (gentle rotation) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '120px 120px' }}
          >
            {/* Drum ribs/texture */}
            <line x1="80" y1="120" x2="160" y2="120" stroke={WASHING_MACHINE_COLORS.silver} strokeWidth="0.6" opacity="0.5" />
            <line x1="85" y1="100" x2="155" y2="100" stroke={WASHING_MACHINE_COLORS.silverLight} strokeWidth="0.5" opacity="0.3" />
            <line x1="85" y1="140" x2="155" y2="140" stroke={WASHING_MACHINE_COLORS.silverLight} strokeWidth="0.5" opacity="0.3" />
          </motion.g>

          {/* Drum center glow (activity indicator) */}
          <motion.circle
            cx="120"
            cy="120"
            r="20"
            fill={WASHING_MACHINE_COLORS.aqua}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Water inlet flow */}
          <motion.path
            d="M 115 85 Q 120 90 125 85 M 115 82 Q 120 87 125 82"
            stroke={WASHING_MACHINE_COLORS.waterDark}
            strokeWidth="1"
            strokeLinecap="round"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Particle flow through wash cycle */}
          <ParticleFlow particles={waterParticles} loop={true} easing="easeInOut" />

          {/* Water circulation glow indicators */}
          <motion.circle
            cx="90"
            cy="130"
            r="3"
            fill={WASHING_MACHINE_COLORS.aqua}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="150"
            cy="130"
            r="3"
            fill={WASHING_MACHINE_COLORS.aqua}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />

          {/* Drain flow indicator */}
          <motion.path
            d="M 120 150 L 120 160"
            stroke={WASHING_MACHINE_COLORS.waterGlow}
            strokeWidth="1.2"
            strokeLinecap="round"
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Static outlines */}
      <path
        d="M 30 75 L 200 75 L 205 80 L 205 160 L 200 165 L 30 165 Q 25 165 25 160 L 25 80 Q 25 75 30 75"
        fill="none"
        stroke={WASHING_MACHINE_COLORS.aqua}
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* Drum outline */}
      <rect x="80" y="95" width="80" height="50" rx="3" fill="none" stroke={WASHING_MACHINE_COLORS.silver} strokeWidth="0.8" opacity="0.4" />

      {/* Water pathways */}
      <path d="M 120 75 L 120 95 L 90 130 L 150 130 L 120 150 L 120 170" fill="none" stroke={WASHING_MACHINE_COLORS.waterDark} strokeWidth="0.6" opacity="0.2" strokeDasharray="2 2" />
    </svg>
  );
}
