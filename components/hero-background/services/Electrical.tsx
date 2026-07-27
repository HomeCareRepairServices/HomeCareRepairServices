'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useConstructionPhase } from '../hooks/useIllustrationAnimation';
import { ELECTRICAL_COLORS, ANIMATION_TIMINGS, ANIMATION_EASING } from '../constants/colors';
import { AnimatedPath, AnimatedGroup } from '../primitives/AnimatedPath';
import { GlowBreathing } from '../primitives/EnergyFlow';
import { ParticleFlow } from '../primitives/ParticleFlow';

/**
 * Electrical
 *
 * Premium product illustration celebrating intelligent energy distribution.
 *
 * Narrative: Shows a clean, modern home electrical system - power source flows through
 * a breaker (protection), distributes to multiple zones/outlets, with subtle safety
 * indicators showing intelligent load management and protection.
 *
 * Visual Language:
 * - Clean schematic aesthetic (elegant geometry, not realistic wires)
 * - Central breaker as protection/intelligence point
 * - Multiple load endpoints showing distribution
 * - Energy pulses flowing through the system
 * - Warm amber energy accent color
 * - Minimal, modern, trustworthy aesthetic
 */
export function Electrical() {
  const { isConstructing, isLiving } = useConstructionPhase(ANIMATION_TIMINGS.constructionMedium + 1.5);

  const energyParticles = [
    // Source to breaker
    { id: 'e1', startX: 20, startY: 120, endX: 50, endY: 120, delay: 0, duration: 1.5, radius: 1.5, color: ELECTRICAL_COLORS.energy, opacity: 0.8 },
    { id: 'e2', startX: 22, startY: 115, endX: 48, endY: 115, delay: 0.4, duration: 1.5, radius: 1.2, color: ELECTRICAL_COLORS.primary, opacity: 0.6 },

    // Breaker to load 1 (top-left)
    { id: 'e3', startX: 65, startY: 90, endX: 100, endY: 85, delay: 0.8, duration: 2, radius: 1, color: ELECTRICAL_COLORS.energy, opacity: 0.7 },

    // Breaker to load 2 (bottom-left)
    { id: 'e4', startX: 65, startY: 150, endX: 100, endY: 155, delay: 1.2, duration: 2, radius: 1, color: ELECTRICAL_COLORS.energy, opacity: 0.7 },

    // Breaker to load 3 (top-right)
    { id: 'e5', startX: 70, startY: 110, endX: 140, endY: 90, delay: 0.9, duration: 2.2, radius: 1, color: ELECTRICAL_COLORS.energy, opacity: 0.6 },

    // Breaker to load 4 (bottom-right)
    { id: 'e6', startX: 70, startY: 130, endX: 140, endY: 150, delay: 1.3, duration: 2.2, radius: 1, color: ELECTRICAL_COLORS.energy, opacity: 0.6 },
  ];

  return (
    <svg viewBox="0 0 240 240" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="glow-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
      </defs>

      {/* === CONSTRUCTION PHASE === */}
      {isConstructing && (
        <>
          {/* Stage 1: Main distribution frame (0-0.8s) */}
          <AnimatedPath
            d="M 15 80 L 200 80 L 205 85 L 205 155 L 200 160 L 15 160 Q 10 160 10 155 L 10 85 Q 10 80 15 80"
            stroke={ELECTRICAL_COLORS.primary}
            strokeWidth="1.5"
            duration={ANIMATION_TIMINGS.constructionFast}
            delay={0}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 2: Main power line and breaker (0.8-2s) */}
          <AnimatedGroup
            paths={[
              {
                d: 'M 10 120 L 50 120',
                stroke: ELECTRICAL_COLORS.energy,
                strokeWidth: 1.5,
              },
              {
                d: 'M 50 105 L 50 135 L 70 135 L 70 105 Z',
                stroke: ELECTRICAL_COLORS.primary,
                strokeWidth: 1,
                fill: 'none',
              },
            ]}
            baseDelay={ANIMATION_TIMINGS.constructionFast}
            stagger={0.15}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 3: Distribution lines to loads (2-3.2s) */}
          <AnimatedGroup
            paths={[
              {
                d: 'M 70 100 L 120 90',
                stroke: ELECTRICAL_COLORS.primary,
                strokeWidth: 0.8,
              },
              {
                d: 'M 70 140 L 120 150',
                stroke: ELECTRICAL_COLORS.primary,
                strokeWidth: 0.8,
              },
              {
                d: 'M 70 110 L 160 90',
                stroke: ELECTRICAL_COLORS.primary,
                strokeWidth: 0.8,
              },
              {
                d: 'M 70 130 L 160 150',
                stroke: ELECTRICAL_COLORS.primary,
                strokeWidth: 0.8,
              },
            ]}
            baseDelay={ANIMATION_TIMINGS.constructionFast + ANIMATION_TIMINGS.constructionMedium}
            stagger={0.1}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 4: Load endpoints (3.2-3.8s) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: ANIMATION_TIMINGS.constructionFast + ANIMATION_TIMINGS.constructionMedium + ANIMATION_TIMINGS.constructionSlow,
              duration: 0.4,
            }}
          >
            <circle cx="120" cy="90" r="5" fill={ELECTRICAL_COLORS.energy} opacity="0.2" />
            <circle cx="120" cy="150" r="5" fill={ELECTRICAL_COLORS.energy} opacity="0.2" />
            <circle cx="160" cy="90" r="5" fill={ELECTRICAL_COLORS.energy} opacity="0.2" />
            <circle cx="160" cy="150" r="5" fill={ELECTRICAL_COLORS.energy} opacity="0.2" />
            <circle cx="60" cy="120" r="4" fill={ELECTRICAL_COLORS.primary} opacity="0.2" filter="blur(3px)" />
          </motion.g>
        </>
      )}

      {/* === LIVING SYSTEM PHASE === */}
      {isLiving && (
        <>
          {/* Power source glow (active) */}
          <motion.circle
            cx="15"
            cy="120"
            r="5"
            fill={ELECTRICAL_COLORS.energy}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Breaker protection indicator (breathing glow) */}
          <motion.rect
            x="45"
            y="105"
            width="25"
            height="30"
            rx="2"
            fill={ELECTRICAL_COLORS.primary}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Breaker internal state */}
          <motion.line
            x1="52"
            y1="110"
            x2="63"
            y2="130"
            stroke={ELECTRICAL_COLORS.primary}
            strokeWidth="1"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Energy particle flow through system */}
          <ParticleFlow particles={energyParticles} loop={true} easing="linear" />

          {/* Load indicators - breathing glows */}
          <motion.circle
            cx="120"
            cy="90"
            r="6"
            fill={ELECTRICAL_COLORS.energy}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="120"
            cy="150"
            r="6"
            fill={ELECTRICAL_COLORS.energy}
            animate={{ opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
          <motion.circle
            cx="160"
            cy="90"
            r="6"
            fill={ELECTRICAL_COLORS.energy}
            animate={{ opacity: [0.3, 0.75, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
          <motion.circle
            cx="160"
            cy="150"
            r="6"
            fill={ELECTRICAL_COLORS.energy}
            animate={{ opacity: [0.25, 0.65, 0.25] }}
            transition={{ duration: 2.15, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          />

          {/* Ground connection indicators */}
          <motion.path
            d="M 120 100 L 120 110"
            stroke={ELECTRICAL_COLORS.primary}
            strokeWidth="0.8"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 160 100 L 160 110"
            stroke={ELECTRICAL_COLORS.primary}
            strokeWidth="0.8"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
        </>
      )}

      {/* Static system outline */}
      <path
        d="M 15 80 L 200 80 L 205 85 L 205 155 L 200 160 L 15 160 Q 10 160 10 155 L 10 85 Q 10 80 15 80"
        fill="none"
        stroke={ELECTRICAL_COLORS.primary}
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* Main power line */}
      <line x1="10" y1="120" x2="200" y2="120" stroke={ELECTRICAL_COLORS.primary} strokeWidth="0.6" opacity="0.2" />

      {/* Breaker box (always visible) */}
      <rect x="45" y="105" width="25" height="30" rx="2" fill="none" stroke={ELECTRICAL_COLORS.primary} strokeWidth="0.8" opacity="0.4" />

      {/* Distribution lines */}
      <path d="M 70 100 L 120 90 M 70 140 L 120 150 M 70 110 L 160 90 M 70 130 L 160 150" fill="none" stroke={ELECTRICAL_COLORS.primary} strokeWidth="0.6" opacity="0.25" strokeDasharray="1.5 1.5" />

      {/* Load endpoints */}
      <circle cx="120" cy="90" r="4" fill="none" stroke={ELECTRICAL_COLORS.energy} strokeWidth="0.8" opacity="0.4" />
      <circle cx="120" cy="150" r="4" fill="none" stroke={ELECTRICAL_COLORS.energy} strokeWidth="0.8" opacity="0.4" />
      <circle cx="160" cy="90" r="4" fill="none" stroke={ELECTRICAL_COLORS.energy} strokeWidth="0.8" opacity="0.4" />
      <circle cx="160" cy="150" r="4" fill="none" stroke={ELECTRICAL_COLORS.energy} strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}
