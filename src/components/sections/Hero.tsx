import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Send, Award, Rocket, GraduationCap, Briefcase } from 'lucide-react';
import { useMouseContext } from '../../context/MouseContext';
import AnimatedText from '../ui/AnimatedText';
import SectionMusicPlayer from '../ui/SectionMusicPlayer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const Hero: React.FC = () => {
  const { setCursorVariant, setCursorText } = useMouseContext();
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: canvasRef, inView: canvasInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = [
    { icon: <Award size={16} className="sm:w-5 sm:h-5" />, text: "2 National Hackathon Wins (600+ and 423+ teams defeated)" },
    { icon: <Rocket size={16} className="sm:w-5 sm:h-5" />, text: "Co-founder of NaviMitra (Maritime AI Startup)" },
    { icon: <GraduationCap size={16} className="sm:w-5 sm:h-5" />, text: "IIT Kharagpur Graduate (Financial Engineering & AI)" },
    { icon: <Briefcase size={16} className="sm:w-5 sm:h-5" />, text: "Strategic Consulting at Krutrim (Ola)" },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Cinematic Background Music */}
      <SectionMusicPlayer 
        sectionId="hero" 
        musicUrl="https://www.bensound.com/bensound-music/bensound-epic.mp3"
        volume={0.15}
      />
      
      <motion.div 
        className="absolute inset-0 bg-dark-900 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Reduced intensity 3D Mesh Background - Only render when in view */}
      <motion.div
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-screen -z-5 opacity-20"
        style={{ opacity }}
      >
        {canvasInView && (
          <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
              <Sphere args={[2.5, 100, 200]} position={[3, 0, 0]}>
                <MeshDistortMaterial
                  color="#8b5cf6"
                  distort={0.2}
                  speed={2}
                  roughness={0.7}
                  metalness={0.3}
                  opacity={0.4}
                  transparent
                />
              </Sphere>
            </Float>
            <OrbitControls enableZoom={false} />
          </Canvas>
        )}
      </motion.div>
      
      <motion.div 
        className="container relative flex flex-col items-center text-center px-4 sm:px-6 lg:px-8"
        style={{ y, opacity }}
      >
        <motion.div
          className="mb-3 sm:mb-4 md:mb-6 text-primary-500 font-mono text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, I'm
        </motion.div>
        
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatedText text="Devraj Das Adhikary" className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-300 to-white" />
        </motion.h1>
        
        <motion.h2
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 font-heading font-medium mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-gradient">AI & Financial Engineering Expert</span> developing practical solutions at the intersection of analytics, AI, and finance
        </motion.h2>
        
        <motion.p
          className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          IIT Kharagpur graduate with expertise in Financial Engineering and AI technology, focused on developing practical solutions at the intersection of analytics, artificial intelligence, and finance. Co-founder of NaviMitra with experience in strategic consulting and AI engineering.
        </motion.p>
        
        {/* Key Statistics */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="glass-card p-2 sm:p-3 md:p-4 flex items-center gap-2 sm:gap-3"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="text-primary-500 flex-shrink-0">{stat.icon}</div>
              <p className="text-xs sm:text-sm md:text-base text-white/80 text-left leading-tight">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-md md:max-w-lg px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a 
            href="#projects"
            className="btn-primary flex items-center justify-center gap-2 group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
            onMouseEnter={() => {
              setCursorVariant('button');
              setCursorText('Projects');
            }}
            onMouseLeave={() => {
              setCursorVariant('default');
              setCursorText('');
            }}
          >
            Explore My Projects
          </a>
          <a 
            href="#contact"
            className="btn-outline flex items-center justify-center gap-2 group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
            onMouseEnter={() => {
              setCursorVariant('button');
              setCursorText('Contact');
            }}
            onMouseLeave={() => {
              setCursorVariant('default');
              setCursorText('');
            }}
          >
            Let's Connect <Send size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
      
      <motion.a
        href="#about"
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
        }}
        whileHover={{ y: 5 }}
        onMouseEnter={() => {
          setCursorVariant('link');
          setCursorText('Scroll');
        }}
        onMouseLeave={() => {
          setCursorVariant('default');
          setCursorText('');
        }}
      >
        <span className="text-white/60 mb-2 text-xs sm:text-sm">Scroll Down</span>
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <ArrowDown className="text-primary-500 w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;