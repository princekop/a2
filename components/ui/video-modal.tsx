"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Pause, Volume2, VolumeX, SkipForward, SkipBack, Loader2 } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    playlist: string[]
}

export function VideoModal({ isOpen, onClose, playlist }: VideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [blobUrl, setBlobUrl] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(false)
    const [progress, setProgress] = useState(0)

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentVideoIndex(0)
            setIsPlaying(true)
            setIsMuted(false)
            setProgress(0)
        }
    }, [isOpen])

    // Secure Video Loading (Blob Obfuscation)
    useEffect(() => {
        if (!isOpen || playlist.length === 0) return

        const loadSecureVideo = async () => {
            setIsLoading(true)
            setBlobUrl(null) // Clear previous

            try {
                const response = await fetch(playlist[currentVideoIndex])
                const blob = await response.blob()
                const url = URL.createObjectURL(blob)
                setBlobUrl(url)
                setIsLoading(false)
            } catch (error) {
                console.error("Failed to load secure video", error)
                setIsLoading(false)
            }
        }

        loadSecureVideo()

        // Cleanup
        return () => {
            if (blobUrl) URL.revokeObjectURL(blobUrl)
        }
    }, [isOpen, currentVideoIndex, playlist])

    // Handle video progress
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleTimeUpdate = () => {
            const progress = (video.currentTime / video.duration) * 100
            setProgress(progress)
        }

        const handleEnded = () => {
            if (currentVideoIndex < playlist.length - 1) {
                setCurrentVideoIndex(prev => prev + 1)
            } else {
                setCurrentVideoIndex(0) // Loop back to start
            }
        }

        video.addEventListener("timeupdate", handleTimeUpdate)
        video.addEventListener("ended", handleEnded)
        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate)
            video.removeEventListener("ended", handleEnded)
        }
    }, [currentVideoIndex, playlist.length])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const nextVideo = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (currentVideoIndex < playlist.length - 1) {
            setCurrentVideoIndex(prev => prev + 1)
        } else {
            setCurrentVideoIndex(0)
        }
    }

    const prevVideo = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(prev => prev - 1)
        } else {
            setCurrentVideoIndex(playlist.length - 1)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808]/90 backdrop-blur-xl"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 text-[#faf8f5] transition-colors group"
                    >
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        <span className="sr-only">Close</span>
                    </button>

                    {/* Video Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-6xl aspect-video mx-4 md:mx-12 rounded-2xl overflow-hidden shadow-2xl border border-[#d4a855]/10 bg-black"
                        onClick={(e) => e.stopPropagation()}
                        onContextMenu={(e) => e.preventDefault()} // Block right click
                    >
                        {/* Protection Layer - Blocks direct interaction/dragging */}
                        <div className="absolute inset-0 z-10 bg-transparent" onClick={togglePlay} />

                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <Loader2 className="w-10 h-10 text-[#d4a855] animate-spin" />
                            </div>
                        )}

                        {blobUrl && (
                            <video
                                ref={videoRef}
                                src={blobUrl}
                                className="w-full h-full object-cover"
                                autoPlay
                                playsInline
                            />
                        )}

                        {/* Custom Controls */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={prevVideo}
                                        className="text-[#faf8f5]/70 hover:text-[#d4a855] transition-colors"
                                    >
                                        <SkipBack className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            togglePlay()
                                        }}
                                        className="text-[#faf8f5] hover:text-[#d4a855] transition-colors"
                                    >
                                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                    </button>

                                    <button
                                        onClick={nextVideo}
                                        className="text-[#faf8f5]/70 hover:text-[#d4a855] transition-colors"
                                    >
                                        <SkipForward className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#d4a855] transition-all duration-100"
                                        style={{ width: `${progress}% ` }}
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-[#faf8f5]/50 font-mono">
                                        {currentVideoIndex + 1} / {playlist.length}
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleMute()
                                        }}
                                        className="text-[#faf8f5] hover:text-[#d4a855] transition-colors"
                                    >
                                        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Watermark */}
                        <div className="absolute top-6 left-6 z-20 pointer-events-none opacity-50">
                            <span className="font-serif text-[#faf8f5] text-sm tracking-widest">A² FILMS</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
