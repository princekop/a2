"use client"

import { useRef, useState, useEffect, Suspense, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play } from "lucide-react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei"
import * as THREE from "three"
import { VideoModal } from "@/components/ui/video-modal"

function GoldenSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial color="#d4a855" roughness={0.1} metalness={0.9} distort={0.3} speed={2} />
      </Sphere>
    </Float>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#d4a855" />
      <Suspense fallback={null}>
        <GoldenSphere />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const [isVideoOpen, setIsVideoOpen] = useState(false)
  // Generate particle positions only on client-side to avoid hydration mismatch
  const [particles, setParticles] = useState<{ left: number; top: number; duration: number; delay: number }[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    )
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#080808]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(212,168,85,0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(160,120,48,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 80% 40%, rgba(212,168,85,0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 20% 60%, rgba(160,120,48,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(212,168,85,0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(160,120,48,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#d4a855]/20 to-transparent"
            style={{
              top: `${20 + i * 15}% `,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={`particle - ${i} `}
              className="absolute w-1 h-1 rounded-full bg-[#d4a855]/30"
              style={{
                left: `${particle.left}% `,
                top: `${particle.top}% `,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* 3D Canvas */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[60vh] pointer-events-none"
      >
        <Scene3D />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#d4a855]/5 border border-[#d4a855]/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#d4a855] animate-pulse" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#d4a855]">
                Artisanal Excellence Since 2024-2025
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight mb-8"
          >
            <span className="block text-[#faf8f5]">The Art of</span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-[#d4a855] via-[#f0d78c] to-[#d4a855] bg-clip-text text-transparent">
                Liquid Gold
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#d4a855] via-[#f0d78c] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-[#faf8f5]/50 leading-relaxed max-w-xl mb-12"
          >
            Crafted from the finest heritage peanuts, slow-roasted to perfection. An indulgence for the discerning
            palate—where every jar tells a story of excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#d4a855] text-[#080808] rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-[#c49745] transition-colors shadow-[0_0_30px_rgba(212,168,85,0.3)]"
            >
              Shop Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOpen(true)}
              className="px-8 py-4 border border-[#d4a855]/30 text-[#faf8f5] rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-[#d4a855]/10 transition-colors flex items-center gap-3 group"
            >
              <span className="w-8 h-8 rounded-full bg-[#d4a855]/20 flex items-center justify-center group-hover:bg-[#d4a855] group-hover:text-[#080808] transition-colors">
                <Play className="w-3 h-3 fill-current" />
              </span>
              Watch Film
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#faf8f5]/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#d4a855] to-transparent"
        />
      </motion.div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        playlist={[
          "/videos/brand-film-1.mp4",
          "/videos/brand-film-2.mp4",
          "/videos/brand-film-3.mp4"
        ]}
      />
    </section>
  )
}

