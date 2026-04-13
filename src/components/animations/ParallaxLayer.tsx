import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number; // negative = slower, positive = faster
  style?: React.CSSProperties;
}

export default function ParallaxLayer({
  children,
  className = "",
  speed = -0.2,
  style,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -200, speed * 200]);

  return (
    <motion.div ref={ref} className={className} style={{ y, ...style }}>
      {children}
    </motion.div>
  );
}
