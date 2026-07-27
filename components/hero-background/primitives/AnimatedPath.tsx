import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedPathProps {
  /**
   * SVG path data (d attribute)
   */
  d: string;

  /**
   * Stroke color
   */
  stroke: string;

  /**
   * Stroke width
   */
  strokeWidth?: number;

  /**
   * Fill color (if any)
   */
  fill?: string;

  /**
   * Duration of the drawing animation in seconds
   */
  duration?: number;

  /**
   * Delay before animation starts in seconds
   */
  delay?: number;

  /**
   * Whether to animate on mount
   */
  animate?: boolean;

  /**
   * Additional stroke properties
   */
  strokeLinecap?: 'butt' | 'round' | 'square';
  strokeLinejoin?: 'miter' | 'round' | 'bevel';

  /**
   * Optional opacity animation
   */
  animateOpacity?: boolean;

  /**
   * CSS class for additional styling
   */
  className?: string;

  /**
   * Custom easing function or preset
   */
  easing?: string | number[];
}

/**
 * AnimatedPath
 *
 * Draws an SVG path with a smooth animation, creating the impression
 * of being hand-drawn or revealed. Uses strokeDasharray and strokeDashoffset
 * for smooth, performant animation.
 */
export function AnimatedPath({
  d,
  stroke,
  strokeWidth = 2,
  fill = 'none',
  duration = 1.5,
  delay = 0,
  animate = true,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  animateOpacity = false,
  className = '',
  easing = [0.43, 0.13, 0.23, 0.96], // Smooth premium easing
}: AnimatedPathProps) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      className={className}
      animate={
        animate
          ? {
              strokeDashoffset: [1000, 0],
              opacity: animateOpacity ? [0, 1] : 1,
            }
          : {}
      }
      initial={
        animate
          ? {
              strokeDashoffset: 1000,
              opacity: animateOpacity ? 0 : 1,
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: easing,
      }}
      style={{
        strokeDasharray: 1000,
        strokeDashoffset: animate ? 1000 : 0,
      }}
    />
  );
}

/**
 * AnimatedGroup
 *
 * Manages a group of animated paths with staggered timing for sequenced reveals.
 * Useful for coordinating multiple paths drawing in sequence.
 */
interface AnimatedPathConfig {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  duration?: number;
  delay?: number;
}

interface AnimatedGroupProps {
  /**
   * Array of path configurations
   */
  paths: AnimatedPathConfig[];

  /**
   * Stagger delay between paths in seconds
   */
  stagger?: number;

  /**
   * Base delay before any animation starts
   */
  baseDelay?: number;

  /**
   * Default stroke color if not specified per path
   */
  defaultStroke?: string;

  /**
   * Default stroke width if not specified per path
   */
  defaultStrokeWidth?: number;

  /**
   * Easing for all paths
   */
  easing?: string | number[];

  /**
   * Custom renderer for more control
   */
  children?: (paths: Array<AnimatedPathConfig & { delay: number; index: number }>) => React.ReactNode;
}

export function AnimatedGroup({
  paths,
  stagger = 0.1,
  baseDelay = 0,
  defaultStroke = '#06B6D4',
  defaultStrokeWidth = 2,
  easing = [0.43, 0.13, 0.23, 0.96],
  children,
}: AnimatedGroupProps) {
  const annotatedPaths = paths.map((path, index) => ({
    ...path,
    stroke: path.stroke ?? defaultStroke,
    strokeWidth: path.strokeWidth ?? defaultStrokeWidth,
    duration: path.duration ?? 1.5,
    delay: baseDelay + (path.delay ?? index * stagger),
  }));

  if (children) {
    return <>{children(annotatedPaths)}</>;
  }

  return (
    <g>
      {annotatedPaths.map((path, index) => (
        <AnimatedPath
          key={index}
          d={path.d}
          stroke={path.stroke}
          strokeWidth={path.strokeWidth}
          fill={path.fill}
          duration={path.duration}
          delay={path.delay}
          easing={easing}
          animate={true}
        />
      ))}
    </g>
  );
}

/**
 * ConstructionAnimation
 *
 * Orchestrates a multi-stage construction reveal animation with custom callbacks.
 * Useful for controlling complex sequenced animations.
 */
interface ConstructionStage {
  name: string;
  paths: AnimatedPathConfig[];
  duration?: number;
  stagger?: number;
  onComplete?: () => void;
}

interface ConstructionAnimationProps {
  /**
   * Array of construction stages
   */
  stages: ConstructionStage[];

  /**
   * Delay between stages in seconds
   */
  stageDelay?: number;

  /**
   * Called when all stages complete
   */
  onAllComplete?: () => void;

  /**
   * Default stroke settings
   */
  defaultStroke?: string;
  defaultStrokeWidth?: number;

  /**
   * Easing for all animations
   */
  easing?: string | number[];
}

export function ConstructionAnimation({
  stages,
  stageDelay = 0,
  onAllComplete,
  defaultStroke = '#06B6D4',
  defaultStrokeWidth = 2,
  easing = [0.43, 0.13, 0.23, 0.96],
}: ConstructionAnimationProps) {
  let currentDelay = 0;
  const stageData = stages.map((stage) => {
    const stageStart = currentDelay;
    const stageDuration = stage.duration ?? 1.5;
    currentDelay += stageDuration + (stageDelay ?? 0.1);
    return { ...stage, startDelay: stageStart };
  });

  return (
    <g>
      {stageData.map((stage) => (
        <AnimatedGroup
          key={stage.name}
          paths={stage.paths}
          baseDelay={stage.startDelay}
          stagger={stage.stagger ?? 0.05}
          defaultStroke={defaultStroke}
          defaultStrokeWidth={defaultStrokeWidth}
          easing={easing}
        />
      ))}
    </g>
  );
}

/**
 * StaggeredReveal
 *
 * Simple component for revealing multiple SVG elements with staggered timing.
 * Great for showing elements appear one after another.
 */
interface StaggeredRevealProps {
  children: React.ReactNode[];
  stagger?: number;
  baseDelay?: number;
  duration?: number;
}

export function StaggeredReveal({
  children,
  stagger = 0.1,
  baseDelay = 0,
  duration = 0.5,
}: StaggeredRevealProps) {
  return (
    <g>
      {Array.isArray(children) &&
        children.map((child, index) => (
          <motion.g
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: baseDelay + index * stagger,
              duration,
            }}
          >
            {child}
          </motion.g>
        ))}
    </g>
  );
}
