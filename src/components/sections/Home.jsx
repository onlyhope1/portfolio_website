import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { personalInfo, homeSection } from '../../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home({ navigate }) {
  return (
    <section className="w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 pb-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl w-full">
        {/* Character Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex-shrink-0"
        >
          {/* Concentric glow rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-red-800/20 absolute" />
            <div className="w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full border border-red-950/15 absolute" />
            <div className="w-[22rem] h-[22rem] md:w-96 md:h-96 rounded-full border border-red-950/10 absolute" />
          </div>
          <img
            src={import.meta.env.BASE_URL + 'images/character-home.jpg'}
            alt={personalInfo.name}
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover relative z-10"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-red-950/40 dark:bg-red-950/40 text-red-400 border border-red-800/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              {homeSection.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3">
            {homeSection.greeting}{' '}
            <span className="text-red-500">{personalInfo.name}</span>
          </motion.h1>

          {/* Code tag */}
          <motion.p variants={itemVariants} className="font-mono text-base md:text-lg text-gray-500 dark:text-gray-400 mb-4">
            &lt;{personalInfo.title}&gt;
          </motion.p>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-md mb-8">
            {homeSection.tagline}
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-8 mb-8">
            {homeSection.stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href={import.meta.env.BASE_URL + 'resume.pdf'}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all hover:scale-[1.03] text-sm"
            >
              <Download size={16} />
              Download CV
            </a>
            <button
              onClick={() => navigate(5)}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold rounded-xl transition-all hover:scale-[1.03] text-sm cursor-pointer"
            >
              <Mail size={16} />
              Hire Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
