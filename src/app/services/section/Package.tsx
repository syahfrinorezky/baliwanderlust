"use client";

import clsx from "clsx";
import { packages } from "@/constants/packages";
import { useInViewTrigger } from "@/hooks/useInViewTrigger";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
function Package() {
  const { ref, inView } = useInViewTrigger();

  return (
    <section
      id="package"
      className="min-h-screen bg-white dark:bg-neutral-900 py-22">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">
            Tour Packages
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing destinations with our carefully crafted travel
            packages
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: 0.2 * index,
                      },
                    }
                  : { opacity: 0, y: 30 }
              }
              className={clsx(
                "relative bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-gray-300 dark:border-none p-6",
                pack.popular && "ring-2 ring-yellow-500"
              )}>
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {pack.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-yellow-500">
                    {pack.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {pack.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                  {pack.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {pack.includes.map((include, includeIndex) => (
                  <div key={includeIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {include}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={clsx(
                  "w-full py-3 px-6 rounded-lg font-semibold transition-colors",
                  pack.popular
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-gray-900 dark:text-white"
                )}>
                Choose {pack.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Package;

