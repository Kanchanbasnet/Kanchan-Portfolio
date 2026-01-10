
import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
}

interface MouseFollowerProps {
  color?: string
  glowColor?: string
  particleSize?: number
  spawnRate?: number
}

export function MouseFollower({
  color = "#ffffff",
  glowColor = "rgba(255, 255, 255, 0.8)",
  particleSize = 6,
  spawnRate = 0.8,
}: MouseFollowerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      if (Math.random() < spawnRate) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          life: 1,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [spawnRate])

  useEffect(() => {
    const animate = () => {
      const container = containerRef.current
      if (!container) return

      particlesRef.current = particlesRef.current
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 0.02,
        }))
        .filter((p) => p.life > 0)

      container.innerHTML = ""

      particlesRef.current.forEach((particle) => {
        const dot = document.createElement("div")
        dot.style.position = "fixed"
        dot.style.left = `${particle.x}px`
        dot.style.top = `${particle.y}px`
        dot.style.width = `${particleSize}px`
        dot.style.height = `${particleSize}px`
        dot.style.borderRadius = "50%"
        dot.style.backgroundColor = color
        dot.style.pointerEvents = "none"
        dot.style.opacity = String(particle.life)
        dot.style.transform = "translate(-50%, -50%)"
        dot.style.boxShadow = `0 0 ${particleSize * 1.5}px ${glowColor}`
        dot.style.zIndex = "9999"

        container.appendChild(dot)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [color, glowColor, particleSize])

  return <div ref={containerRef} />
}
