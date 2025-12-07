import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  const [skills, setSkills] = useState(skillsData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
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
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-800 hover:border-accent transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-accent text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-accent to-[#00b8d4] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

