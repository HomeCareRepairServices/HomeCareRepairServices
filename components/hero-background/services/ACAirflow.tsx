'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useConstructionPhase } from '../hooks/useIllustrationAnimation';
import { AC_AIRFLOW_COLORS, ANIMATION_TIMINGS, ANIMATION_EASING } from '../constants/colors';
import { AnimatedPath, AnimatedGroup } from '../primitives/AnimatedPath';
import { ParticleFlow } from '../primitives/ParticleFlow';
import { RotatingGlow } from '../primitives/EnergyFlow';

/**
 * ACAirflow
 *
 * Premium product illustration celebrating invisible airflow made visible.
 *
 * Narrative: Shows air intake on the left (warm), passing through cooling element,
 * and exiting smooth, cool air on the right with visible particle trails showing
 * the transformation of invisible air into a perceptible, refreshing breeze.
 *
 * Visual Language:
 * - Isometric 3D view of AC unit
 * - Flowing curves emphasizing motion over mechanics
 * - Color transition: warm intake → cool output
 * - Particle trails showing smooth airflow
 * - Rotating fan animation at core
 */
export function ACAirflow() {
  const { isConstructing, isLiving } = useConstructionPhase(ANIMATION_TIMINGS.constructionMedium + 1.5);

  const intakeParticles = [
    { id: 'a1', startX: 10, startY: 100, endX: 60, endY: 95, delay: 0, duration: 2.5, radius: 2, color: AC_AIRFLOW_COLORS.warmAir, opacity: 0.7 },
    { id: 'a2', startX: 12, startY: 120, endX: 62, endY: 125, delay: 0.3, duration: 2.5, radius: 1.8, color: AC_AIRFLOW_COLORS.warmAir, opacity: 0.6 },
    { id: 'a3', startX: 8, startY: 135, endX: 58, endY: 140, delay: 0.6, duration: 2.5, radius: 1.8, color: AC_AIRFLOW_COLORS.warmAir, opacity: 0.5 },

    { id: 'a4', startX: 70, startY: 100, endX: 130, endY: 105, delay: 1.2, duration: 2.3, radius: 1.5, color: AC_AIRFLOW_COLORS.coolAir, opacity: 0.6 },
    { id: 'a5', startX: 72, startY: 120, endX: 132, endY: 120, delay: 1.5, duration: 2.3, radius: 1.5, color: AC_AIRFLOW_COLORS.coolAir, opacity: 0.7 },
    { id: 'a6', startX: 68, startY: 140, endX: 128, endY: 135, delay: 1.8, duration: 2.3, radius: 1.3, color: AC_AIRFLOW_COLORS.coolAir, opacity: 0.6 },

    { id: 'a7', startX: 140, startY: 100, endX: 200, endY: 105, delay: 2.5, duration: 2, radius: 1, color: AC_AIRFLOW_COLORS.primary, opacity: 0.8 },
    { id: 'a8', startX: 142, startY: 120, endX: 202, endY: 120, delay: 2.8, duration: 2, radius: 1, color: AC_AIRFLOW_COLORS.primary, opacity: 0.9 },
    { id: 'a9', startX: 138, startY: 140, endX: 198, endY: 135, delay: 3.1, duration: 2, radius: 0.8, color: AC_AIRFLOW_COLORS.primary, opacity: 0.8 },
  ];

  return (
    <svg viewBox="0 0 240 240" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="ac-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={AC_AIRFLOW_COLORS.warmAir} stopOpacity="0.1" />
          <stop offset="50%" stopColor={AC_AIRFLOW_COLORS.primary} stopOpacity="0.05" />
          <stop offset="100%" stopColor={AC_AIRFLOW_COLORS.coolAir} stopOpacity="0.1" />
        </linearGradient>

        <filter id="glow-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
      </defs>

      {/* === CONSTRUCTION PHASE === */}
      {isConstructing && (
        <>
          {/* Stage 1: AC unit housing (0-0.8s) */}
          <AnimatedPath
            d="M 20 90 L 200 90 L 205 95 L 205 155 L 200 160 L 20 160 Q 15 160 15 155 L 15 95 Q 15 90 20 90"
            stroke={AC_AIRFLOW_COLORS.primary}
            strokeWidth="1.5"
            duration={ANIMATION_TIMINGS.constructionFast}
            delay={0}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 2: Airflow paths (0.8-2.2s) */}
          <AnimatedGroup
            paths={[
              {
                d: 'M 15 110 L 70 110',
                stroke: AC_AIRFLOW_COLORS.warmAir,
                strokeWidth: 1.2,
              },
              {
                d: 'M 70 110 L 130 110',
                stroke: AC_AIRFLOW_COLORS.primary,
                strokeWidth: 1.2,
              },
              {
                d: 'M 130 110 L 205 110',
                stroke: AC_AIRFLOW_COLORS.coolAir,
                strokeWidth: 1.2,
              },
            ]}
            baseDelay={ANIMATION_TIMINGS.constructionFast}
            stagger={0.2}
            easing={ANIMATION_EASING.smooth}
          />

          {/* Stage 3: Cooling element and fan (2.2-3.2s) */}
          <AnimatedGroup
            paths={[
              {
                d: 'M 90 95 L 90 135 L 110 135 L 110 95',
                stroke: AC_AIRFLOW_COLORS.secondary,
                strokeWidth: 0.8,
              },
            ]}
            baseDelay={ANIMATION_TIMINGS.constructionFast + 1.4}
            stagger={0.1}
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
            <circle cx="40" cy="110" r="4" fill={AC_AIRFLOW_COLORS.warmAir} opacity="0.2" filter="blur(3px)" />
            <circle cx="100" cy="115" r="5" fill={AC_AIRFLOW_COLORS.primary} opacity="0.3" filter="blur(4px)" />
            <circle cx="170" cy="110" r="4" fill={AC_AIRFLOW_COLORS.coolAir} opacity="0.25" filter="blur(3px)" />
          </motion.g>
        </>
      )}

      {/* === LIVING SYSTEM PHASE === */}
      {isLiving && (
        <>
          {/* AC unit body fill */}
          <rect x="20" y="90" width="185" height="70" rx="4" fill="url(#ac-body)" />

          {/* Rotating fan core (center element) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '100px 115px' }}
          >
            <path
              d="M 100 95 L 100 135"
              stroke={AC_AIRFLOW_COLORS.primary}
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M 90 115 L 110 115"
              stroke={AC_AIRFLOW_COLORS.primary}
              strokeWidth="1"
              opacity="0.6"
            />
          </motion.g>

          {/* Fan glow */}
          <motion.circle
            cx="100"
            cy="115"
            r="8"
            fill={AC_AIRFLOW_COLORS.primary}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Particle flow through AC */}
          <ParticleFlow particles={intakeParticles} loop={true} easing="easeInOut" />

          {/* Intake warmth indicator (left) */}
          <motion.path
            d="M 15 105 Q 18 100 21 105 M 15 115 Q 18 110 21 115 M 15 125 Q 18 120 21 125"
            stroke={AC_AIRFLOW_COLORS.warmAir}
            strokeWidth="1"
            strokeLinecap="round"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Cooling element glow */}
          <motion.rect
            x="85"
            y="100"
            width="30"
            height="30"
            rx="2"
            fill={AC_AIRFLOW_COLORS.secondary}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Output cool air indicator (right) */}
          <motion.path
            d="M 205 105 L 210 105 M 205 115 L 210 115 M 205 125 L 210 125"
            stroke={AC_AIRFLOW_COLORS.coolAir}
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Static outlines */}
      <path
        d="M 20 90 L 200 90 L 205 95 L 205 155 L 200 160 L 20 160 Q 15 160 15 155 L 15 95 Q 15 90 20 90"
        fill="none"
        stroke={AC_AIRFLOW_COLORS.primary}
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* Cooling element outline */}
      <rect x="85" y="100" width="30" height="30" rx="2" fill="none" stroke={AC_AIRFLOW_COLORS.secondary} strokeWidth="0.8" opacity="0.3" />

      {/* Airflow paths */}
      <path d="M 15 110 L 70 110 L 130 110 L 205 110" fill="none" stroke={AC_AIRFLOW_COLORS.primary} strokeWidth="0.8" opacity="0.3" strokeDasharray="2 2" />
    </svg>
  );
}
