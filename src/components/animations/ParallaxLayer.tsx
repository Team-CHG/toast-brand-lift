import { motion, useScroll, useTransform, useReducedMotion, type MotionStyle } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number; // negative = slower, positive = faster
  style?: React.CSSProperties | undefined;
}

export default function ParallaxLayer({
  children,
  className = "",
  speed = -0.2,
  style,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [speed * -200, speed * 200]
  );

  return (
    <motion.div ref={ref} className={className} style={{ y, ...(style as MotionStyle | undefined) }}>
      {children}
    </motion.div>
  );
}
