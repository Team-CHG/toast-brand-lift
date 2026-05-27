import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.15,
  once = true,
}: StaggerContainerProps) {
  void staggerDelay;
  void once;

  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
