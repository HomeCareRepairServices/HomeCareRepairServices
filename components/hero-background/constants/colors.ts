/**
 * Premium Color System for Hero Illustrations
 * Each service has a carefully curated palette that communicates
 * its core function through color psychology and visual hierarchy.
 */

export const WATER_PURIFIER_COLORS = {
  background: '#0F1F47',
  bodyLight: '#1A2F5F',
  primary: '#00EDD5',
  secondary: '#10B981',
  accent: '#0EA5E9',
  glowPrimary: 'rgba(0, 237, 213, 0.3)',
  glowSecondary: 'rgba(16, 185, 129, 0.2)',
  text: '#E0E7FF',
  dark: '#000000',
};

export const REFRIGERATOR_COLORS = {
  background: '#0F1F47',
  bodyLight: '#1A2F5F',
  warm: '#F59E0B',
  cool: '#38BDF8',
  coolDark: '#0EA5E9',
  frost: '#F1F5F9',
  violet: '#A78BFA',
  glowWarm: 'rgba(245, 158, 11, 0.25)',
  glowCool: 'rgba(56, 189, 248, 0.3)',
  text: '#E0E7FF',
  dark: '#000000',
};

export const AC_AIRFLOW_COLORS = {
  background: '#0F1F47',
  bodyLight: '#1A2F5F',
  primary: '#06B6D4',
  secondary: '#14B8A6',
  warmAir: '#F97316',
  coolAir: '#06D6A0',
  white: '#F0F9FF',
  glowPrimary: 'rgba(6, 182, 212, 0.3)',
  glowSecondary: 'rgba(20, 184, 166, 0.2)',
  text: '#E0E7FF',
  dark: '#000000',
};

export const WASHING_MACHINE_COLORS = {
  background: '#0F1F47',
  bodyLight: '#1A2F5F',
  aqua: '#06D6A0',
  silver: '#CBD5E1',
  silverLight: '#E2E8F0',
  waterGlow: '#BAE6FD',
  waterDark: '#0EA5E9',
  glowAqua: 'rgba(6, 214, 160, 0.3)',
  glowWater: 'rgba(186, 230, 253, 0.2)',
  text: '#E0E7FF',
  dark: '#000000',
};

export const ELECTRICAL_COLORS = {
  background: '#0F1F47',
  bodyLight: '#1A2F5F',
  primary: '#3B82F6',
  secondary: '#1E40AF',
  energy: '#F59E0B',
  energyWarm: '#FEF3C7',
  highlight: '#FFFFFF',
  glowPrimary: 'rgba(59, 130, 246, 0.3)',
  glowEnergy: 'rgba(245, 158, 11, 0.25)',
  text: '#E0E7FF',
  dark: '#000000',
};

/**
 * Animation timing constants for consistent choreography
 */
export const ANIMATION_TIMINGS = {
  constructionFast: 0.8,        // Stage 1: Main form reveal
  constructionMedium: 1.5,      // Stage 2: Active systems reveal
  constructionSlow: 1.0,        // Stage 3: Glows and polish
  stagger: 0.1,                 // Stagger between animation stages
  particleFlow: 3,              // Particle motion duration
  glowPulse: 2,                 // Glow breathing duration
  thermalCycle: 8,              // Refrigerator cycle
  drumRotation: 6,              // Washing machine drum
  energyPulse: 3,               // Electrical energy flow
};

export const ANIMATION_EASING = {
  smooth: [0.43, 0.13, 0.23, 0.96],    // Custom cubic-bezier for premium feel
  energetic: [0.34, 1.56, 0.64, 1],    // Bouncy, lively
  gentle: [0.25, 0.46, 0.45, 0.94],    // Smooth, calm
  linear: [0, 0, 1, 1],                // Steady, reliable
};
