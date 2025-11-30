"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { _0x5e2a, _0x9d4c } from "@/lib/brand"

export function FooterSection() {
  const currentYear = new Date().getFullYear()
  const [verified, setVerified] = useState(false)
  const brandData = _0x5e2a()

  useEffect(() => {
    setVerified(_0x9d4c())
  }, [])

  const socialLinks = [
    { name: "Instagram", url: brandData.instagram, verified: true },
    { name: "Portfolio", url: brandData.portfolio, verified: true },
    { name: "DarkByte", url: brandData.website, verified: true },
  ]

  return (
    <footer className="relative py-24 overflow-hidden border-t border-[#d4a855]/10">
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4a855]/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-4">Stay in the Loop</h2>
          <p className="text-[#faf8f5]/50 mb-10 max-w-md mx-auto">
            New flavors, limited drops, and the occasional rambling about why good ingredients matter.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-8 py-5 rounded-full bg-[#1a1815]/80 border border-[#d4a855]/20 text-[#faf8f5] placeholder:text-[#faf8f5]/30 focus:outline-none focus:border-[#d4a855]/50 transition-colors backdrop-blur-xl"
            />
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(212,168,85,0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#d4a855] to-[#c49745] text-[#080808] font-semibold text-sm tracking-[0.15em] uppercase whitespace-nowrap transition-shadow duration-300"
            >
              Count Me In
            </motion.button>
          </form>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4a855] to-[#a07830]" />
                <div className="absolute inset-[2px] rounded-full bg-[#080808] flex items-center justify-center">
                  <span className="font-serif text-lg text-[#d4a855]">
                    A<sup className="text-xs">2</sup>
                  </span>
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] text-[#faf8f5]">
                  A<sup className="text-base align-super">2</sup>
                </span>
              </div>
            </div>
            <p className="text-[#faf8f5]/40 text-sm leading-relaxed max-w-xs mb-4">
              Small-batch peanut butter that doesn't compromise. Since 2024, we've been turning Valencia peanuts into something worth talking about.
            </p>
            <p className="text-[#d4a855]/60 text-xs">
              Quality over quantity. Every time.
            </p>
          </div>

          {/* Links */}
          {[
            { title: "Shop", links: ["Original Gold", "Honey Amber", "Dark Velvet", "Gift Sets"] },
            { title: "Learn", links: ["Our Story", "The Process", "Sustainability", "Blog"] },
            { title: "Help", links: ["Contact", "FAQ", "Shipping", "Returns"] },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-[#faf8f5] font-medium tracking-[0.2em] uppercase text-xs mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#faf8f5]/40 hover:text-[#d4a855] transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar with Credits */}
        <div className="pt-8 border-t border-[#d4a855]/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
            {/* Copyright & License */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-center md:text-left">
              <p className="text-[#faf8f5]/30 text-sm">© {currentYear} {brandData.b}. All rights reserved.</p>
              <span className="hidden md:block text-[#d4a855]/20">·</span>
              <p className="text-[#faf8f5]/30 text-sm">
                <a href="/license" className="hover:text-[#d4a855] transition-colors">MIT License</a>
              </p>
            </div>

            {/* Social Links - Production Ready */}
            <div className="flex gap-8">
              {verified && socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-[#faf8f5]/30 hover:text-[#d4a855] transition-colors text-sm"
                  suppressHydrationWarning
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Protected Brand Attribution */}
          {verified && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center pt-6 border-t border-[#d4a855]/5"
              suppressHydrationWarning
            >
              <p className="text-[#d4a855]/40 text-sm mb-2">
                {brandData.t} with ☕ and unreasonable attention to detail by{" "}
                <a
                  href={brandData.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4a855] hover:text-[#f0d78c] transition-colors font-medium"
                  suppressHydrationWarning
                >
                  {brandData.n}
                </a>
              </p>
              <p className="text-[#faf8f5]/20 text-xs">
                No templates. No shortcuts. Just code that gives a damn.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </footer>
  )
}
