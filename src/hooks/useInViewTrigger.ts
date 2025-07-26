"use client";

import { useInView } from "react-intersection-observer";

export function useInViewTrigger(
  options = { threshold: 0.3, triggerOnce: false }
) {
  const { ref, inView, entry } = useInView(options);
  return { ref, inView, entry };
}

export default useInViewTrigger;
