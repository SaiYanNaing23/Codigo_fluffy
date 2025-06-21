"use client"
import Image from "next/image";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const floatVariant: Variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    hidden: {
      x: 2100,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const images = [
    { src: "/images/main.png", className: "flex items-center justify-center min-h-screen relative z-50", style: {}, duration: 1, z: 50 },
    { src: "/images/1.png", className: "!absolute -bottom-[2%] md:left-0 -left-[10%] z-50 md:z-40", duration: 1 },
    { src: "/images/2.png", className: "!absolute lg:bottom-[10%] bottom-[20%] lg:left-[15%] md:left-[3%] -left-[10%] z-20", duration: 0.8 },
    { src: "/images/12.png", className: "!absolute md:bottom-[8%] bottom-[15%] lg:-left-[12%] md:-left-[16%] -left-[26%] z-20", duration: 0.6 },
    { src: "/images/5.png", className: "!absolute -top-[18%] left-[18%] z-0", duration: 0.8 },
    { src: "/images/6.png", className: "!absolute -top-[15%] lg:-left-[15%] md:-left-[20%] -left-[28%] z-0", duration: 1.2 },
    { src: "/images/7.png", className: "!absolute md:-top-[20%] -top-[10%] left-[3%] z-10", duration: 0.7 },
    { src: "/images/8.png", className: "!absolute -top-[18%] left-[52%] z-0", duration: 0.7 },
    { src: "/images/1.png", className: "!absolute lg:-top-[25%] -top-[10%] left-[35%] z-0", duration: 1 },
    { src: "/images/10.png", className: "!absolute -top-[20%] md:-right-[14%] -right-[24%] 2xl:-right-[10%] z-0", duration: 1.5 },
    { src: "/images/9.png", className: "!absolute top-[10%] md:-right-[10%] -right-[25%] z-0", duration: 1.2 },
    { src: "/images/12.png", className: "!absolute bottom-[0%] lg:right-[12%] md:right-[0%] sm:-right-[10%] -right-[24%] z-0", duration: 1.1 },
    { src: "/images/head_2.png", className: "!absolute -bottom-[3%] -left-[7%] z-[50]", duration: 0.8, width: 500 },
    { src: "/images/head_1.png", className: "!absolute -bottom-[3%] left-[30%] z-50", duration: 1.1, width: 500 },
    { src: "/images/head_1.png", className: "!absolute -bottom-[3%] lg:right-[0%] -right-[4%] z-50", duration: 1.2, width: 500 },
  ];

  return (
    <section ref={ref} className="bg-[#FFF8EF] min-h-screen relative">
      {images.map((img, idx) => {
        const floatControls = useAnimation();

        useEffect(() => {
          floatControls.start({
            y: [0, -20, 0],
            transition: {
              duration: img.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          });
        }, [floatControls, img.duration]);

        return (
          <motion.div
            key={idx}
            className={img.className}
            style={{ scaleX: -1, ...img.style }}
            variants={floatVariant}
            initial="hidden"
            animate={controls}
          >
            <motion.div animate={floatControls}>
              <Image
                src={img.src}
                alt={`nft character ${idx + 1}`}
                width={img.width || 750}
                height={200}
                className={`${idx> 11 ? "header_image_responsive" : "image_responsive_query"}`}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}