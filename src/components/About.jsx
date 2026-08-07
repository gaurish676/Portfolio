import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaAward, FaUser, FaMapMarkerAlt, FaCode, FaBriefcase, FaCertificate, FaFileAlt } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'internships', label: 'Internships', icon: FaBriefcase },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'achievements', label: 'Certifications & Achievements', icon: FaCertificate }
  ];

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
      institution: "NMAM Institute of Technology (NMAMIT), Nitte, Karkala",
      period: "Expected May 2027",
      description: "Focusing on Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Systems, Full-Stack Web Development, and Compiler Design. Certified in Microsoft Azure AI Fundamentals with hands-on research and software engineering experience."
    }
  ];

  const internshipData = [
    {
      title: "Research Intern — RGB-T Vision Portal",
      organization: "NITK (National Institute of Technology Karnataka)",
      period: "2025",
      offerLetterUrl: "/offer_letters/NITK_Offer_Letter.pdf",
      points: [
        "Designed and deployed the RGB-T Vision Portal (Live Portal), an interactive web platform presenting thermal-visible computer vision research methodologies and datasets.",
        "Integrated PyTorch research documentation, interactive simulations, and multi-modal vision datasets to streamline project outcomes for academic collaborators.",
        "Engineered responsive UI components utilizing modern web standards to visualize complex thermal-RGB fusion experimental pipelines."
      ]
    },
    {
      title: "Web Development Intern",
      organization: "NativeSoftTech",
      period: "June 2025 – July 2025",
      offerLetterUrl: "/offer_letters/NativeSoftTech_Offer_Letter.pdf",
      points: [
        "Developed dynamic, responsive web interfaces and reusable user components adhering to modern HTML5, CSS3, and JavaScript standards.",
        "Collaborated on client-facing frontend features, optimizing page layout responsiveness, cross-browser compatibility, and overall site performance.",
        "Refactored frontend code modules to enhance software maintainability and user engagement metrics."
      ]
    },
    {
      title: "Data Science Virtual Intern",
      organization: "CodSoft",
      period: "June 2025 – July 2025",
      offerLetterUrl: "/offer_letters/CodSoft_Offer_Letter.pdf",
      points: [
        "Conducted data preprocessing, exploratory data analysis (EDA), and feature engineering on structured datasets.",
        "Implemented predictive machine learning models to analyze data patterns and evaluate algorithm performance using statistical metrics."
      ]
    }
  ];

  const achievementsData = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      organization: "Microsoft Credentials",
      period: "Certified",
      description: "Validated foundational knowledge of machine learning and artificial intelligence concepts in Microsoft Azure."
    },
    {
      title: "C++ Professional Certification & Azure Webinars",
      organization: "Infosys Springboard & Microsoft Azure Studio",
      period: "Completed",
      description: "Earned C++ Professional Certification from Infosys Springboard and attended Microsoft Azure Studio technical webinars."
    },
    {
      title: "Competitive Programming & Problem Solving",
      organization: "LeetCode & TakeUForward (TUF)",
      period: "Active",
      description: "Active problem solver focusing on Data Structures & Algorithms (DSA), building strong fundamentals in software optimization."
    },
    {
      title: "Leadership & Community Recognition",
      organization: "Tudar Club - Tululipi Event",
      period: "Awarded",
      description: "Awarded Certificate of Appreciation by Tudar Club for organizing and executing the Tululipi event."
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
            Get to know my journey, academic background, research, and internship experience.
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
                <span className="text-gray-500 font-mono text-[10px] tracking-wider uppercase block mb-1">02 / INTERNSHIPS</span>
                <span className="text-3xl font-extrabold text-[#00b8d4] block mb-1 group-hover:scale-105 transition-transform duration-300">3</span>
                <span className="text-xs text-gray-400 font-light leading-snug">NITK, Web, DS</span>
              </div>
              
              <div className="glass-panel p-4.5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#3b82f6]/30 transition-all duration-300 group">
                <span className="text-gray-500 font-mono text-[10px] tracking-wider uppercase block mb-1">03 / CERTIFICATION</span>
                <span className="text-xl font-extrabold text-[#3b82f6] block py-1 group-hover:scale-105 transition-transform duration-300">Azure AI</span>
                <span className="text-xs text-gray-400 font-light leading-snug">AI-900 Fundamentals</span>
              </div>
              
              <div className="glass-panel p-4.5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#a855f7]/30 transition-all duration-300 group">
                <span className="text-gray-500 font-mono text-[10px] tracking-wider uppercase block mb-1">04 / DEGREE</span>
                <span className="text-xl font-extrabold text-[#a855f7] block py-1 leading-none group-hover:scale-105 transition-transform duration-300">B.Tech</span>
                <span className="text-xs text-gray-400 font-light leading-snug">CSE @ NMAMIT</span>
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
                <span className="text-left font-light">B.Tech CSE Undergrad at NMAMIT (May 2027)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <FaCode className="text-[#00df9a] flex-shrink-0" />
                <span className="text-left font-light">Local LLMs, Full-Stack & AI Engineering</span>
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
                    className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-300 relative border-b-2 whitespace-nowrap cursor-pointer ${
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
                      Hello! I'm <span className="text-[#00df9a] font-semibold">Gaurish Bangera</span>, a Computer Science & Engineering undergraduate at NMAMIT with strong expertise in Data Structures, Algorithms, Full-Stack Web Development, and AI Engineering.
                    </p>
                    <p>
                      I have hands-on experience developing <span className="text-white font-medium">Local LLM privacy analyzers</span>, custom database engines in <span className="text-white font-medium">C++</span>, full-stack <span className="text-white font-medium">Go/React</span> web platforms, and deep learning vision systems.
                    </p>
                    <p>
                      Certified in <span className="text-[#00df9a] font-medium">Microsoft Azure AI Fundamentals</span> with proven research experience at NITK Surathkal and industry web development & data science internships.
                    </p>
                    
                    {/* Strengths Badges */}
                    <div className="pt-4 flex flex-wrap gap-2.5">
                      {["Local LLMs (Ollama)", "Full-Stack Web (React/Go)", "PyTorch & Computer Vision", "Custom C++ Engines", "Azure AI Certified", "DSA & Algorithms"].map((tag) => (
                        <span key={tag} className="px-3.5 py-1.5 rounded-full bg-[#00df9a]/5 border border-[#00df9a]/15 text-[#00df9a] text-xs font-semibold tracking-wider uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'internships' && (
                  <motion.div
                    key="internships"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    {internshipData.map((intern, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-white/5 hover:border-[#00df9a]/40 transition-colors duration-300 group">
                        <div className="absolute -left-[6px] top-1.5 w-[10px] h-[10px] rounded-full bg-[#00df9a] group-hover:scale-125 transition-transform duration-300" />
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className="text-xs font-semibold text-[#00df9a] tracking-wider uppercase bg-[#00df9a]/5 border border-[#00df9a]/20 px-2 py-0.5 rounded">
                            {intern.period}
                          </span>
                          {intern.offerLetterUrl && (
                            <a
                              href={intern.offerLetterUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-white/5 border border-white/10 hover:border-[#00df9a]/40 text-gray-300 hover:text-[#00df9a] transition-all duration-300 cursor-pointer"
                            >
                              <FaFileAlt size={11} className="text-[#00df9a]" />
                              Offer Letter
                            </a>
                          )}
                        </div>
                        <h4 className="text-xl font-bold text-white mt-2 mb-1 group-hover:text-[#00df9a] transition-colors duration-300">
                          {intern.title}
                        </h4>
                        <p className="text-sm font-medium text-[#00b8d4] mb-3">
                          {intern.organization}
                        </p>
                        <ul className="space-y-2 text-gray-400 font-light text-sm md:text-base leading-relaxed list-disc list-inside">
                          {intern.points.map((pt, pIdx) => (
                            <li key={pIdx}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
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

                {activeTab === 'achievements' && (
                  <motion.div
                    key="achievements"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    {achievementsData.map((act, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-white/5 hover:border-[#00df9a]/40 transition-colors duration-300 group">
                        <div className="absolute -left-[6px] top-1.5 w-[10px] h-[10px] rounded-full bg-[#00df9a] group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-xs font-semibold text-[#00df9a] tracking-wider uppercase bg-[#00df9a]/5 border border-[#00df9a]/20 px-2 py-0.5 rounded">
                          {act.period}
                        </span>
                        <h4 className="text-xl font-bold text-white mt-2 mb-1 group-hover:text-[#00df9a] transition-colors duration-300">
                          {act.title}
                        </h4>
                        <p className="text-sm font-medium text-[#00b8d4] mb-2">
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
