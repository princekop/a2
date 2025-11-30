"use client"

import { useEffect, type ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return <>{children}</>
}
