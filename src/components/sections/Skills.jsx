import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SkillRing from '../SkillRing';
import { skills } from '../../data/content';

const ITEMS_PER_PAGE = 4;

export default function Skills() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);
  const currentSkills = skills.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 pb-24">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-red-950/40 text-red-400 border border-red-800/30 mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          Expertise
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 text-center"
      >
        My <span className="text-red-500">Skills</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-12 md:mb-16 text-center"
      >
        Technologies and tools I work with to build amazing digital experiences
      </motion.p>

      {/* Skills Grid */}
      <div className="relative w-full max-w-4xl">
        {/* Prev page */}
        {page > 0 && (
          <button
            onClick={() => setPage((p) => p - 1)}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-400/30 dark:border-gray-600/30 bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all z-10 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        <motion.div
          key={page}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center"
        >
          {currentSkills.map((skill, i) => (
            <SkillRing
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              color={skill.color}
              delay={i * 0.15}
            />
          ))}
        </motion.div>

        {/* Next page */}
        {page < totalPages - 1 && (
          <button
            onClick={() => setPage((p) => p + 1)}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-400/30 dark:border-gray-600/30 bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all z-10 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      {/* Page dots */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === page ? 'w-6 bg-red-500' : 'w-2 bg-gray-500/40'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
