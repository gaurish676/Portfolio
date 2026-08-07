import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import projectsData from '../data/projects.json';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaCode, FaServer, FaTerminal, FaLaptopCode } from 'react-icons/fa';

const Projects = () => {
  const [projects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories dynamically
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  // Filter projects by both category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full-Stack': return <FaServer className="text-2xl text-[#00df9a]" />;
      case 'Web Apps': return <FaLaptopCode className="text-2xl text-[#00b8d4]" />;
      case 'Systems': return <FaTerminal className="text-2xl text-[#a855f7]" />;
      default: return <FaCode className="text-2xl text-[#3b82f6]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#030303]">
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
            Featured <span className="gradient-text font-extrabold">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            An curated selection of my coding challenges, systems, and architectural experiments.
          </p>
        </motion.div>

        {/* Filters and Search Bar Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 w-full"
        >
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4.5 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#00df9a] text-black font-bold shadow-[0_0_15px_rgba(0,223,154,0.25)]'
                    : 'bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-4.5 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search project or stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#0d0d10] border border-white/5 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00df9a]/40 focus:ring-1 focus:ring-[#00df9a]/20 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                whileHover={{ y: -6 }}
                className="glass-panel rounded-2xl border border-white/5 hover:border-[#00df9a]/35 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-[0_15px_40px_-15px_rgba(0,223,154,0.15)] group"
              >
                {/* Visual Header Mockup */}
                <div className="h-40 w-full bg-gradient-to-br from-[#0d0d10] to-[#121216] border-b border-white/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-3 left-4 flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  </div>
                  
                  {/* Glowing background blob in header */}
                  <div className="absolute -bottom-8 w-24 h-24 bg-[#00df9a]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Category Center Illustration */}
                  <div className="flex flex-col items-center gap-2.5 z-10 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:bg-[#00df9a]/10 group-hover:border-[#00df9a]/30 transition-all duration-500">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#00df9a] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 font-light text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-lg border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 flex-1 justify-center text-sm font-semibold cursor-pointer"
                    >
                      <FaGithub size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#00df9a] hover:bg-[#00c085] text-black rounded-xl font-bold transition-all duration-300 flex-1 justify-center text-sm cursor-pointer shadow-lg shadow-[#00df9a]/20"
                    >
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

