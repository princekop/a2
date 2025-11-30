"use client"

import { useRef, useState, Suspense } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, RoundedBox, MeshTransmissionMaterial } from "@react-three/drei"
import type * as THREE from "three"

const products = [
  {
    id: 1,
    name: "Original Gold",
    tagline: "The Signature",
    description: "Our iconic blend. Pure, smooth, unforgettable. Where simplicity meets perfection.",
    price: "$28",
    color: "#d4a855",
    details: ["Single-origin Valencia peanuts", "Sea salt from Brittany", "48-hour slow roast"],
  },
  {
    id: 2,
    name: "Honey Amber",
    tagline: "The Sweet",
    description: "Kissed with raw wildflower honey from the Appalachian highlands.",
    price: "$32",
    color: "#e8a54b",
    details: ["Organic wildflower honey", "Valencia peanuts", "Zero refined sugar"],
  },
  {
    id: 3,
    name: "Dark Velvet",
    tagline: "The Bold",
    description: "Infused with 72% Belgian dark chocolate for those who crave depth.",
    price: "$34",
    color: "#5a4535",
    details: ["Belgian dark chocolate", "Roasted cacao nibs", "Hint of vanilla"],
  },
]

function JarModel({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Jar body */}
        <RoundedBox args={[1.2, 1.8, 1.2]} radius={0.15} smoothness={4} position={[0, 0, 0]}>
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.1}
            anisotropy={0.3}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            color="#1a1815"
            roughness={0.1}
          />
        </RoundedBox>

        {/* Peanut butter inside */}
        <RoundedBox args={[1, 1.2, 1]} radius={0.1} position={[0, -0.2, 0]}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
        </RoundedBox>

        {/* Lid */}
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.3, 32]} />
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
        </mesh>
      </group>
    </Float>
  )
}

function ProductScene({ color }: { color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color={color} />
      <Suspense fallback={null}>
        <JarModel color={color} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  )
}

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeProduct, setActiveProduct] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="products" ref={containerRef} className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${products[activeProduct].color}10 0%, transparent 70%)`,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#d4a855]/5 border border-[#d4a855]/20 mb-8">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d4a855]">The Collection</span>
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-[#faf8f5]">
            Three Expressions of{" "}
            <span className="bg-gradient-to-r from-[#d4a855] via-[#f0d78c] to-[#d4a855] bg-clip-text text-transparent">
              Perfection
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - 3D Product */}
          <motion.div style={{ y }} className="relative order-2 lg:order-1">
            <div className="relative aspect-square">
              {/* Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-10"
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${products[activeProduct].color}30, transparent)`,
                  }}
                />
              </motion.div>

              {/* 3D Canvas */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <ProductScene color={products[activeProduct].color} />
                </motion.div>
              </AnimatePresence>

              {/* Glass Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 mx-auto w-4/5 p-6 rounded-2xl bg-[#080808]/60 backdrop-blur-2xl border border-[#d4a855]/20"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    {products[activeProduct].details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-[#faf8f5]/60 text-sm">
                        <span className="w-1 h-1 rounded-full bg-[#d4a855]" />
                        {detail}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Product Selector */}
          <div className="order-1 lg:order-2 space-y-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                onClick={() => setActiveProduct(index)}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className={`w-full text-left p-8 rounded-3xl transition-all duration-500 group cursor-pointer ${activeProduct === index
                    ? "bg-gradient-to-r from-[#1a1815] to-[#1a1815]/50 border border-[#d4a855]/30"
                    : "bg-[#0d0a08]/50 border border-transparent hover:border-[#d4a855]/10"
                  }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <motion.div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: product.color }}
                        animate={activeProduct === index ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#faf8f5]/40">
                        {product.tagline}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl text-[#faf8f5] mb-2 group-hover:text-[#d4a855] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#faf8f5]/50 text-sm leading-relaxed">{product.description}</p>
                  </div>
                  <span className="font-serif text-3xl text-[#d4a855]">{product.price}</span>
                </div>

                <AnimatePresence>
                  {activeProduct === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-[#d4a855]/20"
                    >
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#d4a855] to-[#c49745] text-[#080808] font-semibold text-sm tracking-wider uppercase"
                        >
                          Add to Cart
                        </motion.button>
                        <button className="px-6 py-3 rounded-full border border-[#d4a855]/30 text-[#d4a855] text-sm tracking-wider uppercase hover:bg-[#d4a855]/5 transition-colors">
                          Details
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
