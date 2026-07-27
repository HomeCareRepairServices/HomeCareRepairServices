"use client"

import { type ReactNode } from "react"

interface BlueprintContainerProps {
  children: ReactNode
  className?: string
  isRoot?: boolean
}

export function BlueprintContainer({ children, className = "", isRoot = true }: BlueprintContainerProps) {
  const Wrapper = isRoot ? "svg" : "g"

  return (
    <Wrapper
      className={className}
      viewBox={isRoot ? "0 0 1920 1080" : undefined}
      preserveAspectRatio={isRoot ? "xMidYMid slice" : undefined}
      xmlns={isRoot ? "http://www.w3.org/2000/svg" : undefined}
    >
      <defs>
        <filter id="blueprint-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(128, 255, 219, 0.03)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#blueprint-grid)" />

      {children}
    </Wrapper>
  )
}
