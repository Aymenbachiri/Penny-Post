"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollAppearProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  from?: "bottom" | "top" | "left" | "right";
}

export function AppearAnimation({
  children,
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
  once = true,
  from = "bottom",
}: ScrollAppearProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    amount: threshold,
    once,
  });

  const controls = useAnimation();

  const initialPositions = {
    bottom: { y: 50 },
    top: { y: -50 },
    left: { x: -50 },
    right: { x: 50 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  const variants = {
    hidden: {
      opacity: 0,
      ...initialPositions[from],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
