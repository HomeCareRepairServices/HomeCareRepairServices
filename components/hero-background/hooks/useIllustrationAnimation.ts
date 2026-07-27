import { useState, useEffect } from 'react';

interface AnimationState {
  isConstructing: boolean;
  isLiving: boolean;
  constructionProgress: number;
}

/**
 * useIllustrationAnimation
 *
 * Orchestrates the two-phase animation lifecycle:
 * Phase 1: Construction reveal (SVG drawing animation)
 * Phase 2: Living system (continuous operational animation)
 *
 * @param constructionDuration - Duration of construction phase in seconds
 * @param onConstructionComplete - Callback when construction phase finishes
 * @returns Animation state and utilities
 */
export function useIllustrationAnimation(
  constructionDuration: number = 3,
  onConstructionComplete?: () => void
): AnimationState {
  const [state, setState] = useState<AnimationState>({
    isConstructing: true,
    isLiving: false,
    constructionProgress: 0,
  });

  useEffect(() => {
    if (!state.isConstructing) {
      return;
    }

    // Timeline for construction phase
    const startTime = Date.now();
    const animationDuration = constructionDuration * 1000; // Convert to ms

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      setState((prev) => ({
        ...prev,
        constructionProgress: progress,
      }));

      if (progress >= 1) {
        // Construction complete, enter living phase
        setState({
          isConstructing: false,
          isLiving: true,
          constructionProgress: 1,
        });

        if (onConstructionComplete) {
          onConstructionComplete();
        }
      } else {
        requestAnimationFrame(updateProgress);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frameId);
  }, [state.isConstructing, constructionDuration, onConstructionComplete]);

  return state;
}

/**
 * useConstructionPhase
 *
 * Simpler hook that just manages the construction → living system transition.
 * Returns whether we're in the construction phase and when it completes.
 */
export function useConstructionPhase(duration: number = 3) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  return {
    isConstructing: !isComplete,
    isLiving: isComplete,
    onComplete: () => setIsComplete(true),
  };
}

/**
 * calculateStageDelays
 *
 * Helper function to calculate staggered delays for multi-stage animations.
 * Useful for coordinating paths and glows in construction phase.
 *
 * @param stageCount - Number of stages
 * @param stageDuration - Duration of each stage in seconds
 * @param stagger - Stagger delay between stages in seconds
 * @returns Array of delays for each stage
 */
export function calculateStageDelays(
  stageCount: number,
  stageDuration: number = 1,
  stagger: number = 0.1
): number[] {
  const delays: number[] = [];
  let currentDelay = 0;

  for (let i = 0; i < stageCount; i++) {
    delays.push(currentDelay);
    currentDelay += stageDuration + stagger;
  }

  return delays;
}

/**
 * getTotalConstructionTime
 *
 * Calculates total construction time from stage configuration.
 *
 * @param stages - Array of stage configurations with durations
 * @param stagger - Stagger between stages
 * @returns Total time in seconds
 */
export function getTotalConstructionTime(
  stages: Array<{ duration?: number }>,
  stagger: number = 0.1
): number {
  return stages.reduce((total, stage, index) => {
    const duration = stage.duration ?? 1.5;
    const gap = index < stages.length - 1 ? stagger : 0;
    return total + duration + gap;
  }, 0);
}
