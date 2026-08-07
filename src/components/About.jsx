import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaAward, FaUser, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import profilePic from '../images/me.jpeg';

const About = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'experience', label: 'Activities & Achievements', icon: FaAward }
  ];

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
      institution: "NMAM Institute of Technology (NMAMIT), Nitte, Karkala",
      period: "2023 - 2027 (Expected)",
      description: "Focusing on Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Systems, Web Development, and Compiler Design. Passionate about engineering innovative software systems."
    },
    {
      degree: "Pre-University Course (Class XII) - Science",
      institution: "State Board Pre-University College, Karnataka",
      period: "2021 - 2023",
      description: "Studied Mathematics, Physics, Chemistry, and Computer Science."
    }
  ];

  const activitiesData = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      organization: "Microsoft Credentials",
      period: "2024",
      description: "Completed professional certification validating foundational knowledge of machine learning and artificial intelligence concepts in Microsoft Azure."
    },
    {
      title: "Appreciation Certificate from Tudar Club",
      organization: "Tudar Club - Tululipi Event",
      period: "2023",
      description: "Recognized with an appreciation certificate for outstanding participation and contribution to the Tululipi regional cultural and script event."
    },
    {
      title: "Infosys C++ & Microsoft Azure Webinars",
      organization: "Professional Technical Training",
      period: "2023 - Present",
      description: "Completed professional C++ certification from Infosys and actively participated in Azure Studio webinars to explore cloud computing services."
    },
    {
      title: "Ethical Hacking & Sustainability Workshops",
      organization: "Nestle & Tech Events",
      period: "2023 - Present",
      description: "Participated in Nestle event for E-Learning sustainability and attended specialized training seminars on Ethical Hacking."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="gradient-text font-extrabold">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Get to know my journey, academic background, and professional pursuits.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Technical Profile Metrics Grid (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col gap-6 w-full"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Technical Profile</h3>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4.5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#00df9a]/30 transition-all duration-300 group">
                <span className="text-gray-500 font-mono text-[10px] tracking-wider uppercase block mb-1">01 / PROJECTS</span>
                <span className="text-3xl font-extrabold text-[#00df9a] block mb-1 group-hover:scale-105 transition-transform duration-300">10+</span>
                <span className="text-xs text-gray-400 font-light leading-snug">Built & Deployed</span>
              </div>
              
              <div className="glass-panel p-4.5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#00b8d4]/30 transition-all duration-300 group">
                <span className="text-gray-500 font-mono text-[10px] tracking-wider uppercase block mb-1">02 / PROBLEM SOLVED</span>
                <span className="text-3xl font-extrabold text-[#00b8d4] block mb-1 group-hover:scale-105 transition-transform duration-300">300+</span>
                <span className="text-xs text-gray-400 font-light leading-snug">LeetCode / DSA</span>
              </div>
              
              <div className="glass-panel p-4.5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#3b82f6]/30 transition-all duration-300 group">
                <span className="text-gray-500 font-mono text-[10px] tracking-wider uppercase block mb-1">03 / EXPERIENCE</span>
                <span className="text-3xl font-extrabold text-[#3b82f6] block mb-1 group-hover:scale-105 transition-transform duration-300">3rd Yr</span>
                <span className="text-xs text-gray-400 font-light leading-snug">Undergrad CSE</span>
              </div>
              
              <div className="glass-panel p-4.5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#a855f7]/30 transition-all duration-300 group">
                <span className="text-gray-500 font-mono text-[10px] tracking-wider uppercase block mb-1">04 / FOCUS AREA</span>
                <span className="text-xl font-extrabold text-[#a855f7] block py-1.5 leading-none group-hover:scale-105 transition-transform duration-300">Full-Stack</span>
                <span className="text-xs text-gray-400 font-light leading-snug">Systems Eng.</span>
              </div>
            </div>

            {/* Quick Details Panel */}
            <div className="glass-panel w-full p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-[#00df9a] flex-shrink-0" />
                <span className="text-left">Mangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <FaGraduationCap className="text-[#00df9a] flex-shrink-0" size={18} />
                <span className="text-left font-light">B.Tech CSE Undergrad at NMAMIT</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <FaCode className="text-[#00df9a] flex-shrink-0" />
                <span className="text-left font-light">Software & Systems Development</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Tabbed Content (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 w-full"
          >
            {/* Tabs Selector */}
            <div className="flex border-b border-white/5 mb-8 overflow-x-auto no-scrollbar scroll-smooth gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-300 relative border-b-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-[#00df9a] border-[#00df9a]'
                        : 'text-gray-400 border-transparent hover:text-white'
                    }`}
                  >
                    <Icon size={14} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Panel */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === 'profile' && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 text-gray-300 leading-relaxed font-light text-base md:text-lg"
                  >
                    <p>
                      Hello! I'm <span className="text-[#00df9a] font-semibold">Gaurish Bangera</span>, a third-year Computer Science & Engineering student with a deep passion for building high-performance web systems and digital products.
                    </p>
                    <p>
                      I specialize in JavaScript, TypeScript, and Python environments, creating full-stack architectures using React, Node.js, and modern database engines. I enjoy taking abstract business problems and translating them into robust, clean, and developer-friendly codebases.
                    </p>
                    <p>
                      Through my coursework at NMAMIT and my own practical software experiments, I continuously work to refine my understanding of system design, performance bottlenecks, and scalable architectures.
                    </p>
                    
                    {/* Strengths Badges */}
                    <div className="pt-4 flex flex-wrap gap-2.5">
                      {["Full-Stack Systems", "Object-Oriented Design", "Database Modeling", "API Integration", "Creative Problem Solving"].map((tag) => (
                        <span key={tag} className="px-3.5 py-1.5 rounded-full bg-[#00df9a]/5 border border-[#00df9a]/15 text-[#00df9a] text-xs font-semibold tracking-wider uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    {educationData.map((edu, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-white/5 hover:border-[#00df9a]/40 transition-colors duration-300 group">
                        <div className="absolute -left-[6px] top-1.5 w-[10px] h-[10px] rounded-full bg-[#00df9a] group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-xs font-semibold text-[#00df9a] tracking-wider uppercase bg-[#00df9a]/5 border border-[#00df9a]/20 px-2 py-0.5 rounded">
                          {edu.period}
                        </span>
                        <h4 className="text-xl font-bold text-white mt-2 mb-1 group-hover:text-[#00df9a] transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <p className="text-sm font-medium text-gray-400 mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-gray-400 font-light text-base leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'experience' && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    {activitiesData.map((act, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-white/5 hover:border-[#00df9a]/40 transition-colors duration-300 group">
                        <div className="absolute -left-[6px] top-1.5 w-[10px] h-[10px] rounded-full bg-[#00df9a] group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-xs font-semibold text-[#00df9a] tracking-wider uppercase bg-[#00df9a]/5 border border-[#00df9a]/20 px-2 py-0.5 rounded">
                          {act.period}
                        </span>
                        <h4 className="text-xl font-bold text-white mt-2 mb-1 group-hover:text-[#00df9a] transition-colors duration-300">
                          {act.title}
                        </h4>
                        <p className="text-sm font-medium text-gray-400 mb-2">
                          {act.organization}
                        </p>
                        <p className="text-gray-400 font-light text-base leading-relaxed">
                          {act.description}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

