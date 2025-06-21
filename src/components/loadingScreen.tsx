"use client"
import Image from "next/image"
import { motion } from "framer-motion";
export default function LoadingScreen() {
  return (
    <motion.div 
        className={`fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-2000 z-[999] `}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
    >
      <div className="flex flex-col  items-center justify-center">
        <Image
          src="https://nft.fluffyhugs.io/loading/loading.webp"
          alt="Loading animation with cartoon character"
          width={200}
          height={200}
          priority
        />
      </div>
    </motion.div>
  )
}