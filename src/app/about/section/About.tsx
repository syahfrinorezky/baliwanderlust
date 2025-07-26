"use client";

import useInViewTrigger from "@/hooks/useInViewTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

function AboutUs() {
  const { ref, inView } = useInViewTrigger();

  return (
    <section id="about" className="flex flex-col" ref={ref}>
      <div className="min-h-screen container mx-auto flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}>
              <Image
                src={"/icons/bw-default.svg"}
                alt="logo baliwanderlust"
                width={500}
                height={500}
                className="w-1/2 h-1/2 mx-auto"
              />
            </Tilt>
          </motion.div>
        </div>
        <div className="w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="mb-5 font-extrabold text-4xl text-yellow-500">
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            className="text-justify text-neutral-800 dark:text-neutral-200">
            Bali Wanderlust is a creative travel company based in the heart of
            Bali, dedicated to crafting immersive and unforgettable travel
            experiences. We specialize in personalized tour packages, cultural
            explorations, eco-travel, and adventure getaways — all designed to
            connect you deeper with Bali’s breathtaking nature, rich traditions,
            and vibrant local life. Founded by passionate explorers, we believe
            every journey should be meaningful, sustainable, and soul-stirring.
            Whether you seek tranquility or thrill, Bali Wanderlust is your
            gateway to discovering the true spirit of the Island of the Gods.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
