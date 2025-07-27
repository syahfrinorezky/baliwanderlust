"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRightIcon } from "lucide-react";

function Hero() {
  const [showTypingWrapper, setShowTypingWrapper] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [startExit, setStartExit] = useState(false);
  const [showFinalTitle, setShowFinalTitle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTypingWrapper(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (showTypingWrapper) {
      const timeout = setTimeout(() => {
        setStartTyping(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [showTypingWrapper]);

  useEffect(() => {
    if (startTyping) {
      const typingDuration = 33 * (1000 / 50) + 3000 + 2000;
      const timeout = setTimeout(() => {
        setStartExit(true);
      }, typingDuration);
      return () => clearTimeout(timeout);
    }
  }, [startTyping]);

  const handleExitComplete = () => {
    setTimeout(() => {
      setShowFinalTitle(true);
    }, 1500);
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-white dark:bg-neutral-900">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="object-cover w-full h-full">
            <source src="/videos/cinematic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative container mx-auto z-20 flex items-center justify-center min-h-screen text-white">
          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            {!startExit && !showFinalTitle && (
              <motion.div
                key="hero-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-center">
                <h1 className="font-bold text-8xl font-sans">
                  Bali Wanderlust.
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                  className="font-sans font-thin min-h-[2rem] mt-4">
                  {showTypingWrapper && startTyping ? (
                    <TypeAnimation
                      sequence={["Authentic Balinese Tour Experiences", 3000]}
                      speed={50}
                      cursor={false}
                    />
                  ) : null}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {showFinalTitle && (
            <div className="w-full flex items-center justify-between px-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex-1">
                <h1 className="font-bold text-6xl font-sans">
                  Bali Wanderlust.
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="font-sans font-thin text-xl mb-4">
                  Authentic Balinese Tour Experiences
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1, ease: "easeInOut" }}>
                  <Button
                    asChild
                    className="bg-yellow-500 hover:bg-yellow-600 font-bold">
                    <Link title="Explore More to Services" href={"/services"} className="inline-flex space-x-2">Exlpore More <ArrowRightIcon /></Link>
                  </Button>
                </motion.div>
              </motion.div>

              <div className="flex-1">
                <div className="flex items-center justify-center"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
