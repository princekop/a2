"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const parallax1 = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const parallax2 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const rotateCard = useTransform(scrollYProgress, [0, 1], [-5, 5])

  return (
    <section id="about" ref={containerRef} className="relative py-40 overflow-hidden">
      {/* Decorative Orbs */}
      <motion.div
        style={{ y: parallax1 }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#d4a855]/10 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: parallax2 }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#d4a855]/5 to-transparent blur-3xl"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4a855]/10 to-[#d4a855]/5 border border-[#d4a855]/20 mb-8"
          >
            <svg className="w-4 h-4 text-[#d4a855]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d4a855]">Our Philosophy</span>
          </motion.span>

          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-[#faf8f5] mb-6">
            Crafted with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#d4a855] via-[#f0d78c] to-[#d4a855] bg-clip-text text-transparent">
                Intention
              </span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 12"
              >
                <motion.path
                  d="M2 10 Q50 2 100 6 Q150 10 198 4"
                  fill="none"
                  stroke="#d4a855"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              style={{ rotateZ: rotateCard }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
            >
              {/* Glass Card Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1815]/80 to-[#0d0a08]/90 backdrop-blur-xl border border-[#d4a855]/10">
                {/* Decorative Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 500">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="#d4a855" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Main Visual */}
                <div className="absolute inset-8 rounded-2xl overflow-hidden">
                  <PeanutFieldVisualization />
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#080808]/70 backdrop-blur-2xl border border-[#d4a855]/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4a855] to-[#c49745] flex items-center justify-center shadow-lg shadow-[#d4a855]/20">
                    <span className="font-serif text-2xl text-[#080808]">37</span>
                  </div>
                  <div>
                    <p className="text-[#faf8f5] font-medium">Years of Excellence</p>
                    <p className="text-[#faf8f5]/50 text-sm">Three generations of mastery</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#d4a855] to-[#c49745] flex flex-col items-center justify-center shadow-2xl shadow-[#d4a855]/30 z-10"
            >
              <span className="text-[#080808] text-3xl font-serif">100%</span>
              <span className="text-[#080808]/70 text-[10px] tracking-wider uppercase">Natural</span>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-[#faf8f5]/80 leading-relaxed font-light">
              In the rolling hills of Georgia, where the soil whispers secrets to the roots below, we discovered
              something extraordinary—peanuts that taste like{" "}
              <span className="text-[#d4a855] font-normal">memories</span>.
            </p>

            <p className="text-[#faf8f5]/50 leading-relaxed">
              Every jar of A² begins with hand-selected Valencia peanuts, slow-roasted in small batches until they
              reach the perfect amber hue. We grind them fresh, preserving the natural oils that give our butter its
              legendary smoothness.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { value: "48hr", label: "Slow Roast", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { value: "Zero", label: "Additives", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                {
                  value: "100%",
                  label: "Organic",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="group p-5 rounded-2xl bg-gradient-to-br from-[#1a1815] to-[#0d0a08] border border-[#d4a855]/10 hover:border-[#d4a855]/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-[#d4a855]/60 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                  <p className="text-2xl font-serif text-[#d4a855]">{stat.value}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#faf8f5]/40 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#"
              whileHover={{ x: 8 }}
              className="inline-flex items-center gap-4 text-[#d4a855] group pt-4"
            >
              <span className="text-sm tracking-[0.2em] uppercase">Read Our Story</span>
              <div className="w-10 h-10 rounded-full border border-[#d4a855]/30 flex items-center justify-center group-hover:bg-[#d4a855]/10 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PeanutFieldVisualization() {
  return (
    <svg viewBox="0 0 400 500" className="w-full h-full">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1510" />
          <stop offset="100%" stopColor="#2a2015" />
        </linearGradient>
        <linearGradient id="sunGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4a855" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#d4a855" stopOpacity="0" />
        </linearGradient>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="400" height="280" fill="url(#skyGrad)" />

      {/* Sun */}
      <circle cx="320" cy="100" r="80" fill="url(#sunGlow)" filter="url(#blur)" />
      <circle cx="320" cy="100" r="25" fill="#d4a855" opacity="0.9" />

      {/* Hills */}
      <path d="M0 220 Q100 180 200 200 Q300 220 400 190 L400 500 L0 500 Z" fill="#2a2520" />
      <path d="M0 260 Q150 220 300 250 Q350 260 400 240 L400 500 L0 500 Z" fill="#1f1a15" />

      {/* Peanut plants */}
      {[40, 100, 160, 220, 280, 340].map((x, i) => (
        <g key={i} transform={`translate(${x}, ${280 + Math.sin(i) * 10})`}>
          <ellipse cx="0" cy="30" rx="12" ry="6" fill="#3d3025" />
          <path d="M0 25 Q-8 15 -4 5 Q0 0 4 5 Q8 15 0 25" fill="#4a3d2a" />
          <path d="M0 25 Q8 18 12 10 Q14 6 10 5 Q4 6 0 25" fill="#3d3025" />
        </g>
      ))}

      {/* Foreground */}
      <rect y="400" width="400" height="100" fill="#1a1510" />
    </svg>
  )
}
