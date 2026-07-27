"use client"

interface BlueprintGlowProps {
  cx?: string
  cy?: string
  x?: number
  y?: number
  color?: string
  radius?: number
  opacity?: number
}

export function BlueprintGlow({
  cx = "50%",
  cy = "45%",
  x,
  y,
  color = "rgba(120, 220, 255, 0.12)",
  radius = 35,
  opacity = 1,
}: BlueprintGlowProps) {
  if (x !== undefined && y !== undefined) {
    const id = `glow-${x}-${y}`
    return (
      <>
        <defs>
          <radialGradient id={id} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity={opacity} />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={x} cy={y} r={radius} fill={`url(#${id})`} />
      </>
    )
  }

  return (
    <>
      <defs>
        <radialGradient id="glow-core" cx={cx} cy={cy} r="35%">
          <stop offset="0%" stopColor="rgba(120, 220, 255, 0.12)" />
          <stop offset="50%" stopColor="rgba(60, 180, 240, 0.04)" />
          <stop offset="100%" stopColor="rgba(0, 100, 200, 0)" />
        </radialGradient>

        <radialGradient id="glow-mid" cx={cx} cy={cy} r="55%">
          <stop offset="0%" stopColor="rgba(40, 160, 230, 0.06)" />
          <stop offset="60%" stopColor="rgba(20, 120, 200, 0.02)" />
          <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
        </radialGradient>

        <radialGradient id="glow-outer" cx={cx} cy={cy} r="80%">
          <stop offset="0%" stopColor="rgba(15, 100, 180, 0.04)" />
          <stop offset="100%" stopColor="rgba(0, 40, 80, 0)" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#glow-outer)" />
      <rect width="100%" height="100%" fill="url(#glow-mid)" />
      <rect width="100%" height="100%" fill="url(#glow-core)" />
    </>
  )
}
