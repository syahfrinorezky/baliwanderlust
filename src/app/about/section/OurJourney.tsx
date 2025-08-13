/** @format */

"use client";

import { Progress } from "@/components/ui/progress";
import { milestonesTl } from "@/constants/milestoneTl";
import { useInViewTrigger } from "@/hooks/useInViewTrigger";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function OurJourney() {
  const { ref, inView } = useInViewTrigger();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestonesTl.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeMilestone = milestonesTl[activeIndex];

  return (
    <section
      id="ourjourney"
      className="min-h-screen bg-white dark:bg-neutral-900 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col w-full">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">
              Our Journey
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our journey to build a travel and tour agency that serves the
              needs of local and international tourists
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.7 }}
            className="relative">
            <div className="relative max-w-5xl mx-auto flex justify-between items-center mt-5">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ originX: 0 }}
                className="absolute top-1/2 left-0 w-full transform -translate-y-1/2">
                <Progress
                  value={
                    inView ? (activeIndex / (milestonesTl.length - 1)) * 100 : 0
                  }
                  className="h-1 transition-all duration-1000 ease-in-out"
                />
              </motion.div>

              {milestonesTl.map((milestone, index) => {
                const Icon = milestone.icon;
                const isActive = index === activeIndex;
                const passed = index <= activeIndex;

                const delays = [0.4, 0.55, 0.7, 0.9, 1.1];
                const delay = delays[index] || 0.4;

                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{
                      duration: 0.6,
                      delay,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="relative -translate-y-5 z-10 cursor-pointer group"
                    onClick={() => setActiveIndex(index)}>
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: delay + 0.3,
                          type: "keyframes",
                        }}
                        className={clsx(
                          "mb-4 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-500 ease-in-out",
                          passed
                            ? "bg-gradient-to-tr from-yellow-400 to-yellow-500 text-white"
                            : "border border-yellow-500 text-yellow-500"
                        )}>
                        {milestone.year}
                      </motion.div>

                      <div
                        className={clsx(
                          "relative w-16 h-16 rounded-full transition-all duration-500 transform shadow-lg group-hover:scale-110",
                          isActive ? "scale-120 shadow-2xl" : "scale-100",
                          passed
                            ? "bg-gradient-to-tr from-yellow-400 to-yellow-600"
                            : "bg-gray-100 dark:bg-neutral-700 border border-gray-300 dark:border-neutral-600"
                        )}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon
                            className={clsx(
                              "w-7 h-7 transition-all duration-500",
                              passed
                                ? "text-white"
                                : "text-gray-500 dark:text-gray-400"
                            )}
                          />
                        </div>
                      </div>

                      {isActive && (
                        <div className="absolute inset-0 aspect-square translate-y-11 rounded-full bg-gradient-to-br animate-ping opacity-20 bg-yellow-500"></div>
                      )}

                      {(isActive || passed) && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          animate={
                            inView
                              ? { opacity: 1, y: 0, scale: 1 }
                              : { opacity: 0, y: 20, scale: 0.8 }
                          }
                          transition={{ duration: 0.45, delay: delay }}
                          className="absolute top-20 mt-12 text-center min-w-max px-2">
                          <p
                            className={clsx(
                              "text-sm font-medium transition-all duration-500",
                              isActive
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-600 dark:text-gray-300"
                            )}>
                            {milestone.title}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-3xl mx-auto mt-16">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <motion.div
                    key={`icon-${activeIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-sm">
                      <activeMilestone.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <motion.div
                      key={`content-${activeIndex}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                          {activeMilestone.year}
                        </span>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-yellow-400 to-transparent opacity-50"></div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {activeMilestone.title}
                      </h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {activeMilestone.description}
                      </motion.p>

                      {activeMilestone.highlights && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="flex flex-wrap gap-1.5 mt-3">
                          {activeMilestone.highlights.map((highlight, index) => (
                            <motion.span
                              key={`${activeIndex}-${index}`}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.6 + index * 0.1,
                                ease: "easeOut",
                              }}
                              className="px-2 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-md text-xs font-medium">
                              {highlight}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurJourney;
