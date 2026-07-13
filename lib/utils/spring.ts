export interface SpringConfig {
  stiffness: number
  damping: number
  mass: number
}

const DEFAULT_CONFIG: SpringConfig = {
  stiffness: 250,
  damping: 25,
  mass: 1,
}

export class SpringAnimator {
  private value: number
  private velocity = 0
  private target: number
  private rafId: number | null = null
  private lastTime: number | null = null
  private onUpdate: (v: number) => void
  private onSettle?: () => void
  private config: SpringConfig
  private settled = true

  constructor(
    initial: number,
    onUpdate: (v: number) => void,
    onSettle?: () => void,
    config?: Partial<SpringConfig>
  ) {
    this.value = initial
    this.target = initial
    this.onUpdate = onUpdate
    this.onSettle = onSettle
    this.config = { ...DEFAULT_CONFIG, ...config }
  }

  setTarget(t: number) {
    this.target = t
    this.settled = false
    this.start()
  }

  /** Jump to value instantly — no animation. */
  setImmediate(v: number) {
    this.stop()
    this.value = v
    this.velocity = 0
    this.target = v
    this.settled = true
    this.onUpdate(v)
  }

  getValue() { return this.value }
  getVelocity() { return this.velocity }
  isSettled() { return this.settled }

  /* ---- private ---- */

  private start() {
    if (this.rafId !== null) return
    this.lastTime = null
    this.rafId = requestAnimationFrame(this.tick)
  }

  private stop() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
  }

  private tick = (now: number) => {
    if (this.lastTime === null) { this.lastTime = now; this.rafId = requestAnimationFrame(this.tick); return }

    const dt = Math.min((now - this.lastTime) / 1000, 0.064)
    this.lastTime = now

    const disp = this.value - this.target
    const acc = (-this.config.stiffness * disp - this.config.damping * this.velocity) / this.config.mass
    this.velocity += acc * dt
    this.value += this.velocity * dt

    this.onUpdate(this.value)

    if (Math.abs(this.velocity) < 0.005 && Math.abs(disp) < 0.005) {
      this.value = this.target
      this.velocity = 0
      this.settled = true
      this.onUpdate(this.value)
      this.stop()
      this.onSettle?.()
      return
    }

    this.rafId = requestAnimationFrame(this.tick)
  }

  destroy() {
    this.stop()
    this.onUpdate = () => {}
    this.onSettle = undefined
  }
}
