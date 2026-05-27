import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 60,
  duration = 0.7,
  once = true,
}: ScrollRevealProps) {
  void delay;
  void direction;
  void distance;
  void duration;
  void once;

  return <div className={className}>{children}</div>;
}
