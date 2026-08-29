import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const RADIUS = 54;
const STROKE = 8;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function SkillRing({ name, percentage, color, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => setIsVisible(true), 100 + delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const offset = CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative w-32 h-32 md:w-36 md:h-36">
        <svg
          className="w-full h-full -rotate-90"
          viewBox="0 0 128 128"
        >
          {/* Background ring */}
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth={STROKE}
            className="text-gray-200 dark:text-gray-700/50"
          />
          {/* Progress ring */}
          <motion.circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={{
              strokeDashoffset: isVisible ? offset : CIRCUMFERENCE,
            }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: delay }}
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
            style={{ color }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{name}</span>
    </div>
  );
}
