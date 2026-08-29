import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from '../SocialIcons';
import { personalInfo, aboutSection } from '../../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const socialLinks = [
  { icon: InstagramIcon, href: personalInfo.social.instagram, label: 'Instagram' },
  { icon: GithubIcon, href: personalInfo.social.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: YoutubeIcon, href: personalInfo.social.youtube, label: 'YouTube' },
];

export default function About({ navigate }) {
  return (
    <section className="w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 pb-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-6xl w-full">
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-red-950/40 text-red-400 border border-red-800/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              {aboutSection.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            {aboutSection.headingLine1}
          </motion.h1>
          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-6 leading-tight">
            {aboutSection.headingLine2}
          </motion.h1>

          {/* Bio */}
          <motion.p variants={itemVariants} className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed">
            {aboutSection.bio}
          </motion.p>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-3 mb-8 relative z-10">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(href, '_blank');
                }}
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all cursor-pointer relative"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => navigate(5)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all hover:scale-[1.03] text-sm cursor-pointer"
            >
              Let's Talk
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </motion.div>

        {/* Character Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          <div className="w-64 h-72 md:w-80 md:h-[22rem] bg-red-600 rounded-[2rem] overflow-hidden relative shadow-2xl shadow-red-900/30">
            <div className="absolute inset-0 bg-gradient-to-t from-red-800/50 to-transparent" />
            <img
              src={import.meta.env.BASE_URL + 'images/character-about.jpg'}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
