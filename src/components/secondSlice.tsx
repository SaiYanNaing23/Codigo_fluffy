"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Bubble {
  id: number
  size: string
  x: string
  delay: number
  color: string
}
type ScreenSize = "sm" | "md" | "lg"
type BubbleConfig = Record<ScreenSize, Bubble[]>
export default function MovingBubbles() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("lg")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm")
      } else if (window.innerWidth < 1024) {
        setScreenSize("md")
      } else {
        setScreenSize("lg")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  const bubbleConfigs : BubbleConfig = {
    sm: [
      { id: 1, size: "w-16 h-24", x: "5%", delay: 0, color: "bg-pink-400" },
      // { id: 2, size: "w-12 h-20", x: "25%", delay: 1, color: "bg-blue-400" },
      { id: 3, size: "w-20 h-28", x: "45%", delay: 2, color: "bg-pink-300" },
      { id: 4, size: "w-14 h-22", x: "65%", delay: 0.5, color: "bg-blue-300" },
      { id: 5, size: "w-18 h-26", x: "85%", delay: 1.5, color: "bg-pink-500" },
      { id: 6, size: "w-16 h-24", x: "15%", delay: 2.5, color: "bg-blue-500" },
      { id: 7, size: "w-12 h-20", x: "35%", delay: 3, color: "bg-pink-400" },
     
    ],
    md: [
      { id: 1, size: "w-24 h-32", x: "3%", delay: 0, color: "bg-pink-400" },
      { id: 2, size: "w-20 h-28", x: "15%", delay: 1, color: "bg-blue-400" },
      { id: 3, size: "w-28 h-36", x: "27%", delay: 2, color: "bg-pink-300" },
      { id: 4, size: "w-22 h-30", x: "39%", delay: 0.5, color: "bg-blue-300" },
      { id: 5, size: "w-26 h-34", x: "51%", delay: 1.5, color: "bg-pink-500" },
      { id: 6, size: "w-18 h-26", x: "63%", delay: 2.5, color: "bg-blue-500" },
      { id: 7, size: "w-30 h-38", x: "75%", delay: 3, color: "bg-pink-400" },
      // { id: 8, size: "w-16 h-24", x: "87%", delay: 3.5, color: "bg-blue-400" },
      { id: 9, size: "w-24 h-32", x: "9%", delay: 4, color: "bg-pink-300" },
      { id: 10, size: "w-20 h-28", x: "21%", delay: 4.5, color: "bg-blue-300" },
      { id: 11, size: "w-28 h-36", x: "33%", delay: 5, color: "bg-pink-500" },
    
    ],
    lg: [
      { id: 1, size: "w-32 h-40", x: "1%", delay: 0, color: "bg-pink-400" },
      { id: 2, size: "w-24 h-32", x: "11%", delay: 1, color: "bg-blue-400" },
      { id: 3, size: "w-40 h-48", x: "21%", delay: 2, color: "bg-pink-300" },
      { id: 4, size: "w-36 h-44", x: "31%", delay: 0.5, color: "bg-blue-300" },
      { id: 5, size: "w-28 h-36", x: "41%", delay: 1.5, color: "bg-pink-500" },
      { id: 6, size: "w-20 h-28", x: "51%", delay: 2.5, color: "bg-blue-500" },
      { id: 7, size: "w-44 h-52", x: "61%", delay: 3, color: "bg-pink-400" },
      // { id: 8, size: "w-16 h-24", x: "71%", delay: 3.5, color: "bg-blue-400" },
      { id: 9, size: "w-30 h-38", x: "81%", delay: 4, color: "bg-pink-300" },
      { id: 10, size: "w-22 h-30", x: "91%", delay: 4.5, color: "bg-blue-300" },
      { id: 11, size: "w-38 h-46", x: "6%", delay: 5, color: "bg-pink-500" },
      { id: 12, size: "w-26 h-34", x: "16%", delay: 5.5, color: "bg-blue-500" },
      { id: 13, size: "w-34 h-42", x: "26%", delay: 6, color: "bg-pink-400" },
      { id: 14, size: "w-18 h-26", x: "36%", delay: 6.5, color: "bg-blue-400" },
      { id: 15, size: "w-42 h-50", x: "46%", delay: 7, color: "bg-pink-300" },
      { id: 16, size: "w-24 h-32", x: "56%", delay: 7.5, color: "bg-blue-300" },
      { id: 17, size: "w-32 h-40", x: "66%", delay: 8, color: "bg-pink-500" },
      { id: 18, size: "w-20 h-28", x: "76%", delay: 8.5, color: "bg-blue-500" },
      { id: 19, size: "w-36 h-44", x: "86%", delay: 9, color: "bg-pink-400" },
     
    ],
  }

  const bubbles : Bubble[] = bubbleConfigs[screenSize]

  return (
    <div className="min-h-screen bg-orange-50 relative overflow-hidden">
      {/* Moving Fluid Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute ${bubble.size} ${bubble.color} opacity-75`}
          style={{
            left: bubble.x,
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          }}
          initial={{
            y: "100vh",
          }}
          animate={{
            y: "-20vh",
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "50% 40% 60% 30% / 70% 50% 40% 30%",
              "40% 70% 30% 60% / 40% 70% 60% 50%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: bubble.delay,
            ease: "linear",
            borderRadius: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Header Text */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
       <motion.div
          className="px-4 xl:mb-[150px] "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} 
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/images/Logo.svg"
            alt="Fluffy Hugs Logo"
            width={0}
            height={0}
            className="xl:w-[1400px] xl:h-[300px] lg:w-[1000px] lg:h-[1000px] md:w-[1000px] sm:w-[800px] w-[600px] mx-auto"
          />
        </motion.div>

        <motion.div
          className="px-4 lg:bottom-[28%] bottom-[25%] sm:bottom-[17%] absolute"
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 0, rotate: -90 }}
          viewport={{ once: false, amount: 0.5 }} 
          transition={{ duration: .8, delay: 0.3 }}

        >
          <motion.div
            // floating animation
            className="flex items-center justify-center"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: [0, -20, 0], opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
          >
            <Image
              src="/images/second_slice_main.png"
              alt="Fluffy Hugs"
              width={700}
              height={400}
              className=" !rotate-90 "
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
