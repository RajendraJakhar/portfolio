import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: ScrollRevealProps) {
  const offset = 16;
  const directionVariants = {
    up: { initial: { opacity: 0, y: offset }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -offset }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -offset }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: offset }, animate: { opacity: 1, x: 0 } },
  };

  const variant = directionVariants[direction];

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
