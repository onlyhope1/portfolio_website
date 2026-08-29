import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../SocialIcons';
import { projects } from '../../data/content';

// Gradient placeholders for projects without images
const gradients = [
  'from-purple-600 via-red-500 to-orange-400',
  'from-cyan-500 via-blue-500 to-purple-600',
  'from-green-400 via-emerald-500 to-teal-600',
];

export default function Projects() {
  const [startIdx, setStartIdx] = useState(0);
  const itemsToShow = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const visibleProjects = projects.slice(startIdx, startIdx + itemsToShow);

  const canPrev = startIdx > 0;
  const canNext = startIdx + itemsToShow < projects.length;

  return (
    <section className="w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 max-w-6xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
        >
          My Creative <span className="text-red-500">Projects</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2"
        >
          <button
            onClick={() => canPrev && setStartIdx((p) => p - 1)}
            disabled={!canPrev}
            className="w-10 h-10 rounded-full border border-gray-400/30 dark:border-gray-600/30 bg-white/10 dark:bg-white/5 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all disabled:opacity-30 cursor-pointer disabled:cursor-default"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => canNext && setStartIdx((p) => p + 1)}
            disabled={!canNext}
            className="w-10 h-10 rounded-full border border-gray-400/30 dark:border-gray-600/30 bg-white/10 dark:bg-white/5 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all disabled:opacity-30 cursor-pointer disabled:cursor-default"
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.title + startIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-red-950/10 dark:bg-red-950/20 border border-red-900/20 dark:border-red-900/30 hover:border-red-700/40 transition-all group"
            >
              {/* Image / Gradient Placeholder */}
              <div className={`h-40 md:h-48 bg-gradient-to-br ${gradients[i % gradients.length]} relative overflow-hidden`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-6xl font-bold">{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-red-600/15 text-red-400 border border-red-800/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <GithubIcon size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
