"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(1)
    const [playbackRate, setPlaybackRate] = useState(1)

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Shift + X to close/redirect
            if (e.shiftKey && e.key.toLowerCase() === "x") {
                window.location.href = "/"
            }
            // Volume Up to close/redirect
            if (e.key === "AudioVolumeUp") {
                window.location.href = "/"
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    // Handle volume change
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number.parseFloat(e.target.value)
        setVolume(newVolume)
        if (videoRef.current) {
            videoRef.current.volume = newVolume
            setIsMuted(newVolume === 0)
        }
    }

    // Handle speed change
    const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSpeed = Number.parseFloat(e.target.value)
        setPlaybackRate(newSpeed)
        if (videoRef.current) {
            videoRef.current.playbackRate = newSpeed
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
            if (!isMuted) setVolume(0)
            else setVolume(1)
        }
    }

    return (
        <div className="fixed inset-0 z-[100] bg-black overflow-hidden font-sans text-[#faf8f5]">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    src="/videos/videoo.mp4"
                    className="w-full h-full object-cover opacity-60"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl w-full bg-black/40 backdrop-blur-md border border-[#d4a855]/20 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Glass Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    <h1 className="font-serif text-8xl md:text-9xl text-[#d4a855] mb-4 opacity-90">404</h1>
                    <h2 className="text-2xl md:text-3xl font-medium mb-6 tracking-wide">Lost in the Sauce?</h2>
                    <p className="text-[#faf8f5]/60 mb-10 text-lg leading-relaxed">
                        The page you're looking for has been consumed. <br />
                        Probably by someone with excellent taste.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4a855] text-[#080808] rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-[#c49745] transition-colors shadow-[0_0_30px_rgba(212,168,85,0.3)]"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Return Home
                    </Link>

                    {/* Controls */}
                    <div className="mt-12 pt-8 border-t border-[#d4a855]/10 flex flex-col gap-6">
                        <div className="flex items-center justify-center gap-6">
                            <button onClick={toggleMute} className="text-[#d4a855] hover:text-[#fff] transition-colors">
                                {isMuted || volume === 0 ? <VolumeX /> : <Volume2 />}
                            </button>

                            <div className="flex flex-col gap-2 w-32">
                                <label className="text-xs text-[#faf8f5]/40 uppercase tracking-wider">Volume</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="accent-[#d4a855] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-32">
                                <label className="text-xs text-[#faf8f5]/40 uppercase tracking-wider">Speed: {playbackRate}x</label>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="2"
                                    step="0.25"
                                    value={playbackRate}
                                    onChange={handleSpeedChange}
                                    className="accent-[#d4a855] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="text-[10px] text-[#faf8f5]/20 uppercase tracking-widest">
                            Shift + X to Close
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Protection Layer */}
            <div
                className="absolute inset-0 z-[100]"
                onContextMenu={(e) => e.preventDefault()}
                style={{ pointerEvents: 'none' }}
            />
        </div>
    )
}
