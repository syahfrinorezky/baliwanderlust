"use client";

import { teamMembers } from "@/constants/teamMembers";
import { useInViewTrigger } from "@/hooks/useInViewTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

function OurTeam() {
  const { ref, inView } = useInViewTrigger();

  return (
    <section
      id="ourteam"
      className="min-h-screen bg-white dark:bg-neutral-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">
            Our Team
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet our dedicated team of travel experts ready to make your journey unforgettable
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
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
              className="relative w-60 aspect-[4/6] rounded-xl overflow-hidden shadow-lg shadow-gray-300 dark:shadow-none group cursor-pointer">
              
              <Image
                src={member.src}
                alt={`${member.name} - ${member.role}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
                <h2 className="text-white font-semibold font-sans text-lg mb-1">
                  {member.name}
                </h2>
                <p className="text-sm font-sans text-gray-300">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;