import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume URL or file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm <span className="gradient-text">Gaurish Bangera</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl text-gray-400 mb-6"
          >
            Web Developer & Problem Solver
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8"
          >
            I build scalable web applications with modern technologies. Passionate
            about creating elegant solutions to complex problems and delivering
            exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto hover:bg-[#00c085] transition-colors duration-300 shadow-lg shadow-accent/50"
            >
              <FaDownload />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

