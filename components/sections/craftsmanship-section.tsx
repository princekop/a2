"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Selection",
    description: "Hand-picked Valencia peanuts from certified organic farms in Georgia and Virginia.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <ellipse cx="24" cy="18" rx="8" ry="10" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="24" cy="32" rx="6" ry="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 14c0-4 2-6 6-6s6 2 6 6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Roasting",
    description: "Slow-roasted in small batches at precisely 325°F for 48 hours to develop complex flavors.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Grinding",
    description: "Stone-ground within hours of roasting to preserve natural oils and freshness.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="12" y="16" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 12h12v4H18z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 24h16M16 30h16" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Perfection",
    description: "Hand-checked quality control ensures every jar meets our exacting standards.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 24l6 6 12-12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export function CraftsmanshipSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])

  return (
    <section id="craft" ref={containerRef} className="relative py-40 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4a855 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#d4a855]/5 border border-[#d4a855]/20 mb-8">
            <svg className="w-4 h-4 text-[#d4a855]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d4a855]">The Process</span>
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-[#faf8f5] mb-6">
            Crafted with{" "}
            <span className="bg-gradient-to-r from-[#d4a855] via-[#f0d78c] to-[#d4a855] bg-clip-text text-transparent">
              Precision
            </span>
          </h2>
          <p className="text-[#faf8f5]/50 max-w-2xl mx-auto text-lg">
            Every jar is a testament to our unwavering commitment to excellence. From farm to table, no detail is
            overlooked.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-[#d4a855]/10 lg:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#d4a855] via-[#d4a855] to-[#d4a855]/30"
            />
          </div>

          <div className="space-y-20 lg:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                {/* Content */}
                <div className={`pl-20 lg:pl-0 ${index % 2 === 1 ? "lg:order-2 lg:pl-20" : "lg:pr-20"}`}>
                  <span className="font-serif text-7xl lg:text-8xl text-[#d4a855]/10">{step.number}</span>
                  <h3 className="font-serif text-4xl text-[#faf8f5] -mt-8 mb-4">{step.title}</h3>
                  <p className="text-[#faf8f5]/50 leading-relaxed text-lg">{step.description}</p>
                </div>

                {/* Icon Card */}
                <div className={`absolute left-0 lg:relative lg:left-auto ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`flex ${index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      className="w-16 h-16 lg:w-28 lg:h-28 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[#1a1815] to-[#0d0a08] border border-[#d4a855]/20 flex items-center justify-center shadow-2xl shadow-[#d4a855]/5 p-4 lg:p-6"
                    >
                      <div className="text-[#d4a855]">{step.icon}</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
