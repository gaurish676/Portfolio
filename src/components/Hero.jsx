import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaCode, FaLaptopCode } from 'react-icons/fa';
import profilePic from '../images/me.jpeg';

const Hero = () => {
  const roles = [
    "AI & Full-Stack Engineer",
    "Local LLM & Systems Developer",
    "Computer Science Undergraduate",
    "RGB-T Vision & AI Researcher"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Gaurish_Bangera_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/gaurish676' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/gaurish-bangera-191a8831b/' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:gaurishbangera8970@gmail.com' }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & Content (65% on desktop) */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start z-10 order-2 lg:order-1">
          {/* Intro Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00df9a]/10 border border-[#00df9a]/25 text-[#00df9a] text-sm font-semibold mb-6 tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-[#00df9a] animate-ping" />
            Available for Opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 select-none leading-none"
          >
            Hi, I'm <br className="hidden lg:block" />
            <span className="gradient-text font-black">Gaurish Bangera</span>
          </motion.h1>

          {/* Animated Roles */}
          <div className="h-14 sm:h-16 flex items-center justify-center lg:justify-start mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Core Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
          >
            Computer Science & Engineering undergraduate at <span className="text-[#00df9a] font-medium">NMAMIT</span> with strong expertise in Data Structures, Algorithms, Full-Stack Web Development, Local LLMs, and AI Engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full sm:w-auto mb-10"
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#00df9a] to-[#00b8d4] text-black font-bold rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,223,154,0.4)] cursor-pointer text-sm md:text-base"
            >
              <FaDownload size={15} />
              Download Resume
            </motion.button>
            
            <motion.a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-7 py-3.5 bg-white/5 border border-white/10 hover:border-[#00df9a]/40 text-white font-bold rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Icons Link Group */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-5 items-center"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#00df9a] hover:scale-110 transition-all duration-300 text-xl md:text-2xl"
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Holographic Photo HUD (35% on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2 py-8 lg:py-0"
        >
          {/* Floating Motion Wrapper */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center"
          >
            {/* Outer Orbit (Dashed) */}
            <div className="absolute -inset-6 border border-dashed border-[#00df9a]/25 rounded-[3rem] animate-spin-slow pointer-events-none" />
            
            {/* Inner Orbit (Dotted) */}
            <div className="absolute -inset-9 border border-dotted border-[#00b8d4]/20 rounded-full animate-spin-reverse-slow pointer-events-none" />
            
            {/* Decorative Orbit Coordinate Ticks */}
            <div className="absolute -inset-12 border border-white/5 rounded-full pointer-events-none flex items-center justify-between px-2 text-[8px] font-mono text-gray-600">
              <span>LAT_13.18</span>
              <span>LON_74.93</span>
            </div>

            {/* Backdrop Glow Mesh */}
            <div className="absolute inset-4 bg-gradient-to-tr from-[#00df9a] to-[#00b8d4] rounded-3xl blur-2xl opacity-25 group-hover:opacity-45 transition-all duration-500 scale-95" />
            
            {/* Image Frame HUD Box */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden p-2 bg-gradient-to-tr from-[#00df9a]/25 to-[#00b8d4]/25 border border-white/10 scanner-effect group">
              
              {/* HUD Corner Targets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#00df9a] z-20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#00df9a] z-20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#00df9a] z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#00df9a] z-20" />

              {/* Holographic Matrix Pattern Overlay */}
              <div className="absolute inset-0 dots-grid z-10 opacity-70 pointer-events-none" />

              {/* Tint Overlay */}
              <div className="absolute inset-0 bg-[#00df9a]/5 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

              {/* Primary Profile Pic */}
              <img
                src={profilePic}
                alt="Gaurish Bangera"
                className="w-full h-full rounded-2xl object-cover filter contrast-[1.05] brightness-90 grayscale sepia-[25%] hue-rotate-[110deg] saturate-[140%] hover:filter-none hover:brightness-100 hover:contrast-100 transition-all duration-500 z-0"
              />

              {/* Glitched hover overlay */}
              <img
                src={profilePic}
                alt="Gaurish Glitch"
                className="absolute inset-2 rounded-2xl object-cover glitch-image z-10 pointer-events-none"
              />
            </div>

            {/* Bottom HUD Labels */}
            <div className="absolute -bottom-6 flex justify-between w-full px-2 text-[9px] font-mono text-gray-500 tracking-wider">
              <span className="flex items-center gap-1"><FaCode className="text-[#00df9a]" /> Gaurish_B</span>
              <span className="flex items-center gap-1"><FaLaptopCode className="text-[#00b8d4]" /> HOST_5173</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating chevron indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 hidden md:block"
        onClick={(e) => scrollToSection(e, '#about')}
      >
        <FaChevronDown className="text-gray-500 hover:text-[#00df9a] text-2xl transition-colors duration-300" />
      </motion.div>
    </section>
  );
};

export default Hero;

