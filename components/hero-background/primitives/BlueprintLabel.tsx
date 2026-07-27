interface BlueprintLabelProps {
  x?: number
  y?: number
  text?: string
  textColor?: string
  lineColor?: string
}

/**
 * Engineering dimensioning text.
 * Monospaced font, with thin extension lines.
 */
export function BlueprintLabel({
  x = 0,
  y = 0,
  text = "SYS.NODE.01",
  textColor = "#EAF8FF",
  lineColor = "#80FFDB",
}: BlueprintLabelProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Extension Lines */}
      <line x1="-20" y1="0" x2="-4" y2="0" stroke={lineColor} strokeWidth="0.3" opacity={0.3} vectorEffect="non-scaling-stroke" />
      <line x1="4" y1="0" x2={String(text).length * 5.5 + 4} y2="0" stroke={lineColor} strokeWidth="0.3" opacity={0.3} vectorEffect="non-scaling-stroke" />
      
      {/* Text */}
      <text
        x="0"
        y="4"
        fill={textColor}
        fontFamily="ui-monospace, monospace"
        fontSize="6"
        letterSpacing="0.5"
        opacity={0.15}
      >
        {text}
      </text>
    </g>
  )
}