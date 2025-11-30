"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote: "Honestly didn't expect much, but this stuff is legit. Way better than the grocery store brands I've been settling for.",
    author: "Byte-S",
    title: "Developer & Coffee Addict",
    rating: 5,
    avatar: "https://i.postimg.cc/JhLLjxH8/darkbyte_premium.gif",
  },
  {
    quote: "Finally, peanut butter that doesn't taste like it was made in a factory last year. Fresh, smooth, and actually has flavor.",
    author: "Byte-M",
    title: "Product Designer",
    rating: 5,
    avatar: "https://i.postimg.cc/bwSpFrDc/Byte-Notes.png",
  },
  {
    quote: "I'm picky about ingredients. This is the real deal - no weird additives, just peanuts done right.",
    author: "Byte-X",
    title: "Fitness Enthusiast",
    rating: 5,
    avatar: "https://i.postimg.cc/NjSt4d6x/byte_avatar.png",
  },
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0d0a08] to-[#080808]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#d4a855]/5 border border-[#d4a855]/20 mb-8">
            <svg className="w-4 h-4 text-[#d4a855]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d4a855]">Testimonials</span>
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-[#faf8f5]">
            Words of{" "}
            <span className="bg-gradient-to-r from-[#d4a855] via-[#f0d78c] to-[#d4a855] bg-clip-text text-transparent">
              Praise
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div style={{ x }} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#1a1815]/80 to-[#0d0a08]/90 border border-[#d4a855]/10 hover:border-[#d4a855]/30 transition-all duration-500 backdrop-blur-xl"
            >
              {/* Quote Icon */}
              <svg className="w-10 h-10 text-[#d4a855]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#d4a855]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#faf8f5]/80 text-lg leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#d4a855] to-[#c49745]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-[#faf8f5] font-medium">{testimonial.author}</p>
                  <p className="text-[#faf8f5]/50 text-sm">{testimonial.title}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d4a855]/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
