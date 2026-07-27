interface BlueprintArrowProps {
  x?: number
  y?: number
  rotation?: number
  strokeColor?: string
  length?: number
}

/**
 * A sharp, open-ended technical directional arrow.
 * Used to indicate flow direction on pipes.
 */
export function BlueprintArrow({
  x = 0,
  y = 0,
  rotation = 0,
  strokeColor = "#80FFDB",
  length = 10,
}: BlueprintArrowProps) {
  const halfLen = length / 2
  return (
    <g
      transform={`translate(${x}, ${y}) rotate(${rotation})`}
      stroke={strokeColor}
      strokeWidth="0.5"
      fill="none"
      opacity={0.2}
      vectorEffect="non-scaling-stroke"
      strokeLinejoin="miter"
    >
      <line x1={-halfLen} y1="0" x2={halfLen} y2="0" />
      <polyline points={`${halfLen - 4},-4 ${halfLen},0 ${halfLen - 4},4`} />
    </g>
  )
}