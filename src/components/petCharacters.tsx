"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface Pet {
  id: number
  color: string
  accent: string
  name: string
}

interface PetCharacterProps {
  pet: Pet
  index?: number
  size?: number
}

const HeartSVG = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    className={className}
    style={style}
  >
    <path
      fill="currentColor"
      d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
    />
  </svg>
)

export default function PetCharacter({ pet, index = 0, size = 80 }: PetCharacterProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative cursor-pointer inline-block"
      animate={{
        y: [0, -10, 0],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 2 + index * 0.3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: index * 0.2,
      }}
      whileHover={{
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Pet Body */}
      <motion.div
        className="rounded-full relative overflow-hidden"
        style={{
          backgroundColor: pet.color,
          width: size,
          height: size,
        }}
        whileHover={{
          boxShadow: `0 0 30px ${pet.color}80`,
          filter: "brightness(1.1)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Pet Face */}
        <div
          className="absolute bg-white rounded-full flex items-center justify-center"
          style={{
            inset: size * 0.1,
          }}
        >
          {/* Eyes */}
          <div className="flex space-x-1 mb-1" style={{ marginTop: -size * 0.05 }}>
            <motion.div
              className="bg-black rounded-full"
              style={{
                width: size * 0.08,
                height: size * 0.08,
              }}
              animate={
                isHovered
                  ? {
                      scaleY: 0.1,
                      y: size * 0.02,
                    }
                  : {
                      scaleY: 1,
                      y: 0,
                    }
              }
              transition={{ duration: 0.15 }}
            />
            <motion.div
              className="bg-black rounded-full"
              style={{
                width: size * 0.08,
                height: size * 0.08,
              }}
              animate={
                isHovered
                  ? {
                      scaleY: 0.1,
                      y: size * 0.02,
                    }
                  : {
                      scaleY: 1,
                      y: 0,
                    }
              }
              transition={{ duration: 0.15 }}
            />
          </div>

          {/* Nose */}
          <motion.div
            className="rounded-full absolute"
            style={{
              backgroundColor: pet.accent,
              width: size * 0.05,
              height: size * 0.05,
              bottom: size * 0.2,
            }}
            animate={
              isHovered
                ? {
                    y: -2,
                  }
                : {
                    y: 0,
                  }
            }
            transition={{ duration: 0.2 }}
          />

          {/* Mouth */}
          <motion.div
            className="absolute border-b-2 border-gray-400 rounded-full"
            style={{
              width: size * 0.1,
              height: size * 0.05,
              bottom: size * 0.15,
              borderColor: pet.accent,
            }}
            animate={
              isHovered
                ? {
                    scaleX: 1.3,
                    borderColor: "#ff69b4",
                  }
                : {
                    scaleX: 1,
                    borderColor: pet.accent,
                  }
            }
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Left Ear */}
        <motion.div
          className="absolute rounded-full"
          style={{
            backgroundColor: pet.accent,
            width: size * 0.2,
            height: size * 0.3,
            top: -size * 0.1,
            left: size * 0.15,
          }}
          animate={
            isHovered
              ? {
                  rotate: -25,
                }
              : {
                  rotate: -10,
                }
          }
          transition={{ duration: 0.3, type: "spring" }}
        />

        {/* Right Ear */}
        <motion.div
          className="absolute rounded-full"
          style={{
            backgroundColor: pet.accent,
            width: size * 0.2,
            height: size * 0.3,
            top: -size * 0.1,
            right: size * 0.15,
          }}
          animate={
            isHovered
              ? {
                  rotate: 25,
                }
              : {
                  rotate: 10,
                }
          }
          transition={{ duration: 0.3, type: "spring" }}
        />

        {/* Inner Ears */}
        <div
          className="absolute bg-pink-200 rounded-full"
          style={{
            width: size * 0.1,
            height: size * 0.15,
            top: -size * 0.05,
            left: size * 0.2,
          }}
        />
        <div
          className="absolute bg-pink-200 rounded-full"
          style={{
            width: size * 0.1,
            height: size * 0.15,
            top: -size * 0.05,
            right: size * 0.2,
          }}
        />
      </motion.div>

      {/* Floating Hearts */}
      {isHovered && (
        <>
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
            style={{ top: -size * 0.3 }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: -20,
              x: [-5, 5, -5],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <HeartSVG className="text-pink-500" style={{ width: size * 0.15, height: size * 0.15 }} />
          </motion.div>

          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
            style={{ top: -size * 0.25 }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: -15,
              x: [5, -5, 5],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          >
            <HeartSVG className="text-red-400" style={{ width: size * 0.1, height: size * 0.1 }} />
          </motion.div>
        </>
      )}

      {/* Sparkle Effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 2) * 80}%`,
              }}
              animate={{
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

