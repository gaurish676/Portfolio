import { motion } from 'framer-motion';
import { useState } from 'react';
import skillsData from '../data/skills.json';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiAmazonaws, 
  SiGit,
  SiC,
  SiGo,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiVisualstudiocode,
  SiGithub
} from 'react-icons/si';
import { 
  FaCode, 
  FaServer, 
  FaSync, 
  FaProjectDiagram, 
  FaTerminal, 
  FaLaptopCode,
  FaCoffee,
  FaBrain,
  FaCubes,
  FaCogs,
  FaLightbulb,
  FaDatabase
} from 'react-icons/fa';

// Map skill names to their corresponding icons
const getSkillIcon = (name) => {
  switch (name) {
    case 'JavaScript': return <SiJavascript className="text-[#f7df1e]" />;
    case 'TypeScript': return <SiTypescript className="text-[#3178c6]" />;
    case 'Python': return <SiPython className="text-[#3776ab]" />;
    case 'Java': return <FaCoffee className="text-[#ea2d2e]" />;
    case 'C++': return <FaCode className="text-[#00599c]" />;
    case 'C': return <SiC className="text-[#a8b9cc]" />;
    case 'Go': return <SiGo className="text-[#00add8]" />;
    case 'HTML': return <SiHtml5 className="text-[#e34f26]" />;
    case 'CSS': return <SiCss3 className="text-[#1572b6]" />;
    case 'React': return <SiReact className="text-[#61dafb] animate-spin-slow" />;
    case 'Node.js': return <SiNodedotjs className="text-[#339933]" />;
    case 'Express': return <SiExpress className="text-gray-300" />;
    case 'MongoDB': return <SiMongodb className="text-[#47a248]" />;
    case 'MySQL': return <SiMysql className="text-[#4479a1]" />;
    case 'PostgreSQL': return <SiPostgresql className="text-[#4169e1]" />;
    case 'Docker': return <SiDocker className="text-[#2496ed]" />;
    case 'AWS': return <SiAmazonaws className="text-[#ff9900]" />;
    case 'Git': return <SiGit className="text-[#f05032]" />;
    case 'GitHub': return <SiGithub className="text-white" />;
    case 'VS Code': return <SiVisualstudiocode className="text-[#007acc]" />;
    case 'XAMPP': return <FaDatabase className="text-[#fb7a24]" />;
    case 'Full-Stack Development': return <FaLaptopCode className="text-[#00df9a]" />;
    case 'RESTful APIs': return <FaServer className="text-[#00b8d4]" />;
    case 'Microservices': return <FaTerminal className="text-[#3b82f6]" />;
    case 'CI/CD': return <FaSync className="text-[#a855f7]" />;
    case 'Agile/Scrum': return <FaCode className="text-[#ec4899]" />;
    case 'System Design': return <FaProjectDiagram className="text-[#f59e0b]" />;
    case 'Data Structures & Algorithms (DSA)': return <FaBrain className="text-[#00df9a]" />;
    case 'Object-Oriented Programming (OOP)': return <FaCubes className="text-[#00b8d4]" />;
    case 'Compiler Design': return <FaCogs className="text-[#a855f7]" />;
    case 'Problem Solving': return <FaLightbulb className="text-[#eab308]" />;
    default: return <FaCode className="text-gray-400" />;
  }
};

const Skills = () => {
  const categories = ['All', ...Object.keys(skillsData)];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter skills based on selected category
  const getFilteredSkills = () => {
    if (activeCategory === 'All') {
      return Object.entries(skillsData).flatMap(([category, items]) => 
        items.map(item => ({ ...item, category }))
      );
    }
    return skillsData[activeCategory].map(item => ({ ...item, category: activeCategory }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#070709]/60 border-y border-white/5">
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
            <span className="gradient-text font-extrabold">Skills</span> & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A comprehensive outlook on programming languages, full-stack tools, and methodology expertise.
          </p>
        </motion.div>

        {/* Category Selector Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center flex-wrap gap-2.5 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#00df9a] to-[#00b8d4] text-black font-bold shadow-[0_0_20px_rgba(0,223,154,0.3)]'
                  : 'bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {getFilteredSkills().map((skill) => (
            <motion.div
              key={`${skill.category}-${skill.name}`}
              variants={cardVariants}
              whileHover={{ y: -3, border: '1px solid rgba(0, 223, 154, 0.25)' }}
              layoutId={`${skill.category}-${skill.name}`}
              className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,223,154,0.05)] transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/5 rounded-xl text-2xl group-hover:bg-[#00df9a]/10 transition-colors duration-300">
                      {getSkillIcon(skill.name)}
                    </div>
                    <span className="text-white font-semibold text-lg tracking-wide group-hover:text-[#00df9a] transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm font-bold bg-white/5 px-2.5 py-1 rounded-lg">
                    {skill.level}%
                  </span>
                </div>

                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">
                  {skill.category}
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#00df9a] to-[#00b8d4] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

