"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Collection", href: "#products" },
  { label: "Flavors", href: "#flavors" },
  { label: "Craft", href: "#craft" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 100], ["rgba(8,8,8,0)", "rgba(8,8,8,0.85)"])
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"])
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(212,168,85,0)", "rgba(212,168,85,0.1)"])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        style={{
          backgroundColor: navBg,
          backdropFilter: navBlur,
          borderBottomColor: navBorder,
          borderBottomWidth: "1px",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <motion.a href="#" className="flex items-center gap-4 group" whileHover={{ scale: 1.02 }}>
              <div className="relative w-12 h-12">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4a855] to-[#a07830]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <div className="absolute inset-[2px] rounded-full bg-[#080808] flex items-center justify-center">
                  <span className="font-serif text-lg text-[#d4a855]">
                    A<sup className="text-xs">2</sup>
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.2em] text-[#faf8f5]">
                  A<sup className="text-base align-super">2</sup>
                </span>
                <span className="text-[10px] tracking-[0.4em] text-[#d4a855]/60 uppercase">A Square · Peanut Butter</span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                  className="relative text-xs tracking-[0.25em] uppercase text-[#faf8f5]/60 hover:text-[#d4a855] transition-colors duration-300 group py-2"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-0 left-0 h-px bg-gradient-to-r from-[#d4a855] to-transparent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#d4a855] to-[#c49745] text-[#080808] text-xs font-semibold tracking-[0.2em] uppercase overflow-hidden relative group"
            >
              <span className="relative z-10">Shop Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#f0d78c] to-[#d4a855]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            >
              <div className="relative w-6 h-4">
                <motion.span
                  className="absolute left-0 w-full h-[1.5px] bg-[#d4a855]"
                  animate={mobileOpen ? { top: "50%", rotate: 45, y: "-50%" } : { top: 0, rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 w-full h-[1.5px] bg-[#d4a855] -translate-y-1/2"
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 w-full h-[1.5px] bg-[#d4a855]"
                  animate={mobileOpen ? { bottom: "50%", rotate: -45, y: "50%" } : { bottom: 0, rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="font-serif text-4xl text-[#faf8f5] hover:text-[#d4a855] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-[#d4a855] to-[#c49745] text-[#080808] text-sm font-semibold tracking-[0.2em] uppercase"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
