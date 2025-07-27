"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/constants/reviews";
import { useInViewTrigger } from "@/hooks/useInViewTrigger";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

function Review() {
  const { ref, inView } = useInViewTrigger();

  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "text-yellow-500 fill-current"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section id="reviews">
      <div className="min-h-screen container mx-auto flex flex-col items-center justify-center px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">
            What Our Travelers Say
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real experiences from real travelers who chose our tour packages
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto">
          <Carousel
            plugins={[autoplayPlugin]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={() => autoplayPlugin.stop()}
            onMouseLeave={() => autoplayPlugin.play()}>
            <CarouselContent className="-ml-4 pt-6">
              {reviews.map((review, index) => (
                <CarouselItem key={review.id} className="pl-4 basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.5,
                              delay: 0.1 * index,
                            },
                          }
                        : { opacity: 0, y: 20 }
                    }
                    className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-gray-300 dark:border-none p-6 h-full relative">
                    <div className="absolute -top-4 left-6">
                      <div className="bg-yellow-500 rounded-full p-2">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col h-full">
                      <div className="flex items-center gap-1 mb-4">
                        {renderStars(review.rating)}
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                        &quot;{review.comment}&quot;
                      </p>

                      <div className="mb-4">
                        <span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                          {review.package}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 dark:text-gray-300 font-semibold">
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {review.name}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400 text-xs">
                            {review.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700" />
            <CarouselNext className="bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

export default Review;
