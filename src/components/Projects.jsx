import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects] = useState(projectsData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Some of my recent work and contributions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-accent/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] text-white rounded-lg border border-gray-700 hover:border-accent hover:text-accent transition-all duration-300 flex-1 justify-center"
                >
                  <FaGithub />
                  View Code
                </motion.a>
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-black rounded-lg font-semibold hover:bg-[#00c085] transition-all duration-300 flex-1 justify-center"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

