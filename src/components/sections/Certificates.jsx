import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certificates } from '../../data/content';
import { personalInfo } from '../../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Certificates() {
  return (
    <section className="w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 pb-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl w-full">
        {/* Character Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-shrink-0 relative"
        >
          {/* Concentric glow rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border border-red-800/20 absolute" />
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-red-900/15 absolute" />
            <div className="w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full border border-red-950/10 absolute" />
          </div>
          <img
            src={import.meta.env.BASE_URL + 'images/character-certificates.jpg'}
            alt={personalInfo.name + ' - Graduate'}
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover relative z-10"
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-red-950/40 text-red-400 border border-red-800/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Certifications
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left"
          >
            My <span className="text-red-500">Certificates</span>
          </motion.h1>

          {/* Certificate List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center justify-between p-4 rounded-xl bg-red-950/10 dark:bg-red-950/20 border border-red-900/20 dark:border-red-900/30 hover:bg-red-950/20 dark:hover:bg-red-950/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center text-red-400">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{cert.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    {cert.year}
                  </div>
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-green-400 hover:text-green-300 transition-colors"
                  >
                    Verify
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
