"use client"

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react"
import {
  useMotionValue,
  useSpring,
  useVelocity,
  animate,
} from "framer-motion"
import { LocationCard } from "./location-card"
import { serviceLocations } from "@/lib/data/service-categories"

const BUFFER = 8

export function LocationsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ w: 220, h: 300 })
  const [range, setRange] = useState({ start: -BUFFER, end: BUFFER })

  const raw = useMotionValue(0)
  const spring = useSpring(raw, { stiffness: 120, damping: 20, mass: 1 })
  const vel = useVelocity(spring)
  const smoothVel = useSpring(vel, { stiffness: 800, damping: 40, mass: 0.5 })

  const lastCenter = useRef(0)
  const dragging = useRef(false)
  const dragX = useRef(0)
  const totalDrag = useRef(0)

  const total = serviceLocations.length

  /* ---- Responsive Sizing ---- */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width
      if (w < 640) setDims({ w: Math.min(260, w * 0.7), h: 340 })
      else if (w < 1024) setDims({ w: 200, h: 280 })
      else setDims({ w: 220, h: 300 })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  /* ---- Render Window Update ---- */
  useEffect(() => {
    const unsub = raw.on("change", (v) => {
      const c = Math.round(v)
      if (c !== lastCenter.current) {
        lastCenter.current = c
        setRange({ start: c - BUFFER, end: c + BUFFER })
      }
    })
    return unsub
  }, [raw])

  /* ---- Wheel Scroll ---- */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handler = (e: WheelEvent) => {
      e.preventDefault()
      raw.set(raw.get() + (e.deltaY || e.deltaX) * 0.006)
    }
    el.addEventListener("wheel", handler, { passive: false })
    return () => el.removeEventListener("wheel", handler)
  }, [raw])

  /* ---- Pointer Drag ---- */
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true
    totalDrag.current = 0
    dragX.current = e.clientX
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return
      const dx = e.clientX - dragX.current
      dragX.current = e.clientX
      totalDrag.current += Math.abs(dx)
      raw.set(raw.get() - dx * 0.006)
    },
    [raw]
  )

  const onPointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  /* ---- Click to Center ---- */
  const onContainerClick = useCallback(
    (e: React.MouseEvent) => {
      if (totalDrag.current > 5 || total === 0) return
      const card = (e.target as HTMLElement).closest("[data-vi]")
      if (!card) return
      const vi = parseInt(card.getAttribute("data-vi")!, 10)
      if (isNaN(vi)) return
      animate(raw, vi, { type: "spring", stiffness: 150, damping: 22 })
    },
    [raw, total]
  )

  /* ---- Keyboard ---- */
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") raw.set(raw.get() - 1)
      else if (e.key === "ArrowRight") raw.set(raw.get() + 1)
    },
    [raw]
  )

  /* ---- Visible Cards Map ---- */
  const visible = useMemo(() => {
    if (total === 0) return []
    const list: { vi: number; location: typeof serviceLocations[number] }[] = []
    for (let i = range.start; i <= range.end; i++) {
      const idx = ((i % total) + total) % total
      list.push({ vi: i, location: serviceLocations[idx] })
    }
    return list
  }, [range, total])

  if (total === 0) return null

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Service locations carousel"
      onKeyDown={onKeyDown}
      onClick={onContainerClick}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="relative mx-auto outline-none select-none"
      style={{
        height: dims.h + 70,
        perspective: "1200px",
        perspectiveOrigin: "50% 50%",
        touchAction: "none",
        cursor: "grab",
      }}
    >
      {visible.map(({ vi, location }) => (
        <LocationCard
          key={vi}
          location={location}
          virtualIndex={vi}
          position={spring}
          velocity={smoothVel}
          width={dims.w}
          height={dims.h}
        />
      ))}
    </div>
  )
}