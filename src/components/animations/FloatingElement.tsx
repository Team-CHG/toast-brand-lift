import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}

export default function FloatingElement({
  children,
  className = "",
  duration = 6,
  distance = 15,
  delay = 0,
}: FloatingElementProps) {
  void duration;
  void distance;
  void delay;

  return <div className={className}>{children}</div>;
}
