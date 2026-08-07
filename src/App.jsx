import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-[#00df9a]/30 selection:text-white overflow-hidden font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00df9a] via-[#00b8d4] to-[#3b82f6] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Background Grid Overlay */}
      <div className="fixed inset-0 grid-bg opacity-45 pointer-events-none z-0" />

      {/* Decorative Ambient Glowing Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="bg-blob bg-[#00df9a]" style={{ width: '400px', height: '400px', top: '-10%', left: '-10%' }} />
        <div className="bg-blob bg-[#00b8d4]" style={{ width: '500px', height: '500px', top: '40%', right: '-15%' }} />
        <div className="bg-blob bg-[#3b82f6]" style={{ width: '450px', height: '450px', bottom: '-10%', left: '20%' }} />
      </div>

      {/* Core Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;

