"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const flavors = [
  {
    id: "original",
    name: "Original Gold",
    tagline: "Pure Essence",
    description:
      "The quintessential expression of our craft. Single-origin Valencia peanuts, slow-roasted for 48 hours.",
    notes: ["Buttery", "Toasted", "Earthy"],
    color: "#d4a855",
    intensity: 3,
    pairing: ["Artisan bread", "Green apples", "Dark chocolate"],
  },
  {
    id: "honey",
    name: "Honey Amber",
    tagline: "Sweet Symphony",
    description:
      "A harmonious marriage of our signature butter with raw wildflower honey from the Appalachian highlands.",
    notes: ["Floral", "Sweet", "Warm"],
    color: "#e8a54b",
    intensity: 4,
    pairing: ["Greek yogurt", "Bananas", "Oat cookies"],
  },
  {
    id: "dark",
    name: "Dark Velvet",
    tagline: "Bold Indulgence",
    description: "Infused with 72% Belgian dark chocolate, creating a sophisticated spread that defies convention.",
    notes: ["Cocoa", "Rich", "Complex"],
    color: "#5a4535",
    intensity: 5,
    pairing: ["Strawberries", "Croissants", "Red wine"],
  },
  {
    id: "spice",
    name: "Ember Spice",
    tagline: "Subtle Heat",
    description: "A whisper of cayenne and smoked paprika elevates our classic to new dimensions.",
    notes: ["Smoky", "Spicy", "Bold"],
    color: "#b85c38",
    intensity: 4,
    pairing: ["Celery", "Asian dishes", "Cocktails"],
  },
  {
    id: "vanilla",
    name: "Tahitian Silk",
    tagline: "Velvet Dreams",
    description: "Madagascar bourbon vanilla beans steep into every batch, creating ethereal smoothness.",
    notes: ["Vanilla", "Creamy", "Delicate"],
    color: "#d4c5a9",
    intensity: 2,
    pairing: ["Ice cream", "Waffles", "Fresh berries"],
  },
]

export function FlavorExplorer() {
  const [activeFlavor, setActiveFlavor] = useState(flavors[0])

  return (
    <section id="flavors" className="relative py-40 overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        animate={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${activeFlavor.color}12 0%, transparent 60%)`,
        }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#d4a855]/5 border border-[#d4a855]/20 mb-8">
            <svg className="w-4 h-4 text-[#d4a855]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d4a855]">Flavor Explorer</span>
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-[#faf8f5] mb-4">
            Find Your{" "}
            <span className="bg-gradient-to-r from-[#d4a855] via-[#f0d78c] to-[#d4a855] bg-clip-text text-transparent">
              Signature
            </span>
          </h2>
          <p className="text-[#faf8f5]/50 max-w-xl mx-auto">
            Each flavor tells a story. Explore our collection and discover the one that speaks to you.
          </p>
        </motion.div>

        {/* Flavor Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {flavors.map((flavor) => (
            <motion.button
              key={flavor.id}
              onClick={() => setActiveFlavor(flavor)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 overflow-hidden ${
                activeFlavor.id === flavor.id
                  ? "text-[#080808]"
                  : "bg-[#1a1815]/50 border border-[#d4a855]/10 text-[#faf8f5]/60 hover:border-[#d4a855]/30"
              }`}
            >
              {activeFlavor.id === flavor.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-gradient-to-r from-[#d4a855] to-[#c49745]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 text-sm tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: flavor.color }} />
                {flavor.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Flavor Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlavor.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Visual */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Orbital Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      stroke={activeFlavor.color}
                      strokeWidth="0.5"
                      fill="none"
                      opacity="0.2"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="140"
                      stroke={activeFlavor.color}
                      strokeWidth="0.5"
                      fill="none"
                      opacity="0.15"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="100"
                      stroke={activeFlavor.color}
                      strokeWidth="0.5"
                      fill="none"
                      opacity="0.1"
                    />

                    {/* Orbital dots */}
                    {activeFlavor.notes.map((_, i) => (
                      <circle
                        key={i}
                        cx={200 + Math.cos((i * 120 * Math.PI) / 180) * 180}
                        cy={200 + Math.sin((i * 120 * Math.PI) / 180) * 180}
                        r="6"
                        fill={activeFlavor.color}
                        opacity="0.8"
                      />
                    ))}
                  </svg>
                </motion.div>

                {/* Center Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="w-40 h-40 rounded-full flex flex-col items-center justify-center backdrop-blur-xl border-2"
                    style={{
                      backgroundColor: `${activeFlavor.color}15`,
                      borderColor: `${activeFlavor.color}40`,
                    }}
                  >
                    <span className="font-serif text-6xl text-[#faf8f5]">{activeFlavor.name.charAt(0)}</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#faf8f5]/50 mt-1">
                      {activeFlavor.tagline}
                    </span>
                  </div>
                </motion.div>

                {/* Floating Note Cards */}
                {activeFlavor.notes.map((note, i) => (
                  <motion.div
                    key={note}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="absolute px-4 py-2 rounded-full bg-[#080808]/80 backdrop-blur-xl border border-[#d4a855]/20 text-sm text-[#faf8f5]/70"
                    style={{
                      top: `${30 + i * 25}%`,
                      left: i % 2 === 0 ? "5%" : "auto",
                      right: i % 2 === 1 ? "5%" : "auto",
                    }}
                  >
                    {note}
                  </motion.div>
                ))}
              </div>

              {/* Right - Details */}
              <div className="space-y-8">
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[#d4a855] tracking-[0.3em] uppercase text-xs mb-3"
                  >
                    {activeFlavor.tagline}
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-5xl text-[#faf8f5] mb-4"
                  >
                    {activeFlavor.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-[#faf8f5]/60 text-lg leading-relaxed"
                  >
                    {activeFlavor.description}
                  </motion.p>
                </div>

                {/* Intensity Meter */}
                <div className="p-6 rounded-2xl bg-[#1a1815]/50 border border-[#d4a855]/10">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#faf8f5]/40 mb-4">Intensity Level</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <motion.div
                        key={level}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: level * 0.05 }}
                        className={`flex-1 h-2 rounded-full origin-left ${
                          level <= activeFlavor.intensity
                            ? "bg-gradient-to-r from-[#d4a855] to-[#c49745]"
                            : "bg-[#2a2520]"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-[#faf8f5]/40 text-sm mt-2">
                    {activeFlavor.intensity <= 2 ? "Delicate" : activeFlavor.intensity <= 3 ? "Balanced" : "Bold"}
                  </p>
                </div>

                {/* Perfect Pairings */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#faf8f5]/40 mb-4">Perfect Pairings</p>
                  <div className="flex flex-wrap gap-2">
                    {activeFlavor.pairing.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 rounded-full bg-[#1a1815] border border-[#d4a855]/10 text-[#faf8f5]/60 text-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: `0 0 50px ${activeFlavor.color}30` }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-[#d4a855] to-[#c49745] text-[#080808] font-semibold text-sm tracking-[0.15em] uppercase"
                >
                  Add to Collection
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
