"use client"

import HeroSection from "@/components/heroSection";
import LoadingScreen from "@/components/loadingScreen";
import SecondSlice from "@/components/secondSlice";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ThridSlice from "@/components/thirdSlice";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
      <AnimatePresence>{isLoading && <LoadingScreen key="loading" />}</AnimatePresence>
      {!isLoading && (
        <>
          <section className="snap-start min-h-screen">
            <HeroSection />
          </section>

          <section className="snap-start min-h-screen">
            <SecondSlice />
          </section>

          <section className="snap-start min-h-screen">
            <ThridSlice />
          </section>
        </>
      )}
    </main>
  );
}
