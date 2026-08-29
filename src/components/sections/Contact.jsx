import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from '../SocialIcons';
import { personalInfo, contactSection } from '../../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const socialLinks = [
  { icon: GithubIcon, href: personalInfo.social.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: InstagramIcon, href: personalInfo.social.instagram, label: 'Instagram' },
  { icon: YoutubeIcon, href: personalInfo.social.youtube, label: 'YouTube' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-red-950/40 text-red-400 border border-red-800/30">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            {contactSection.badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-3">
          {contactSection.heading}{' '}
          <span className="text-red-500">{contactSection.headingAccent}</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center mb-10 md:mb-14">
          {contactSection.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-red-950/10 dark:bg-red-950/20 border border-red-900/20 dark:border-red-900/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-red-950/10 dark:bg-red-950/20 border border-red-900/20 dark:border-red-900/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all text-sm"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-red-950/10 dark:bg-red-950/20 border border-red-900/20 dark:border-red-900/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all hover:scale-[1.02] text-sm cursor-pointer"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-red-600/20 flex items-center justify-center text-red-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-gray-900 dark:text-white hover:text-red-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-red-600/20 flex items-center justify-center text-red-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                <a href={`tel:${personalInfo.phone}`} className="text-sm font-medium text-gray-900 dark:text-white hover:text-red-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-red-600/20 flex items-center justify-center text-red-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-4 relative z-10">
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
                  className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all cursor-pointer"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
