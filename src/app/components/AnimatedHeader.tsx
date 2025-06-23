// app/components/AnimatedHeader.tsx
"use client";

import { motion, HTMLMotionProps } from "motion/react";
import React, { ReactNode } from "react";

// ✅ Typed wrapper for motion.header
type MotionHeaderProps = HTMLMotionProps<"header"> & {
  children: ReactNode;
};

const MotionHeader = React.forwardRef<HTMLElement, MotionHeaderProps>(
  (props, ref) => {
    return <motion.header ref={ref} {...props} />;
  }
);
MotionHeader.displayName = "MotionHeader";

// ✅ AnimatedHeader Component
export const AnimatedHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <MotionHeader
      className={className}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </MotionHeader>
  );
};
