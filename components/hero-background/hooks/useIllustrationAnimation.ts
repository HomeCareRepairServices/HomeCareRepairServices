'use client';

import { useEffect, useState } from 'react';

export interface ConstructionPhaseState {
  isConstructing: boolean;
  isLiving: boolean;
}

/**
 * Hook to manage the two-phase animation state for service illustrations
 * @param constructionDuration Total duration in seconds for the construction animation
 * @returns Object with isConstructing and isLiving boolean flags
 */
export function useConstructionPhase(
  constructionDuration: number = 3.8
): ConstructionPhaseState {
  const [state, setState] = useState<ConstructionPhaseState>({
    isConstructing: true,
    isLiving: false,
  });

  useEffect(() => {
    // Phase 1: Construction (0 to constructionDuration)
    const constructionTimeout = setTimeout(() => {
      setState({
        isConstructing: false,
        isLiving: true,
      });
    }, constructionDuration * 1000);

    return () => clearTimeout(constructionTimeout);
  }, [constructionDuration]);

  return state;
}
