import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Get to know me better
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1a1a1a] rounded-2xl p-6 md:p-10 border border-gray-800 hover:border-accent/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent to-[#00b8d4] p-1">
              <div className="w-full h-full rounded-full overflow-hidden">

                  {/* Placeholder for profile image - replace with actual image */}
                  <img
                    src="./images/me.jpeg"
                    alt="Gaurish Bangera"
                    className="w-full h-full object-cover"
                    />

                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-gray-300 space-y-4"
            >
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack developer with a love for creating
                innovative solutions and building scalable applications. With
                expertise in modern web technologies, I bring ideas to life
                through clean code and intuitive design.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in software development started with curiosity and
                has evolved into a career focused on continuous learning and
                growth. I enjoy tackling complex challenges and turning them
                into elegant, user-friendly solutions.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/30">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/30">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/30">
                  Continuous Learner
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

