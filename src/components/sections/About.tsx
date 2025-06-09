import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../ui/SectionWrapper';
import SectionMusicPlayer from '../ui/SectionMusicPlayer';
import { useMouseContext } from '../../context/MouseContext';
import { GraduationCap, Code, TrendingUp, Brain, Rocket } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import AnimatedText from '../ui/AnimatedText';

const About: React.FC = () => {
  const { setCursorVariant } = useMouseContext();
  const { ref: canvasRef, inView: canvasInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const aboutItems = [
    {
      icon: <Brain className="text-primary-500 w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'AI & ML Expert',
      description: 'Specializing in machine learning, deep learning, LLMs, and AI integrations with hands-on experience in production systems.',
    },
    {
      icon: <TrendingUp className="text-primary-500 w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Financial Engineering',
      description: 'IIT Kharagpur graduate with expertise in quantitative analytics, financial modeling, and market analysis.',
    },
    {
      icon: <Rocket className="text-primary-500 w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Startup Co-founder',
      description: 'Co-founded NaviMitra, developing AI-powered vessel traffic management systems with functional deployment readiness.',
    },
  ];

  return (
    <SectionWrapper id="about">
      {/* Ambient Background Music */}
      <SectionMusicPlayer 
        sectionId="about" 
        musicUrl="https://www.bensound.com/bensound-music/bensound-slowmotion.mp3"
        volume={0.12}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1 px-2 sm:px-0">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatedText 
              text="I am an IIT Kharagpur graduate with expertise in Financial Engineering and AI technology, focused on developing practical solutions at the intersection of analytics, artificial intelligence, and finance." 
              className="inline-block"
            />
          </motion.p>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/70 mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            As co-founder of NaviMitra, I developed AI-powered vessel traffic management systems that achieved functional deployment readiness. My experience includes strategic consulting at Krutrim (Ola), where I analyzed AI market opportunities and developed pricing models for GPU infrastructure.
          </motion.p>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/70 mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I am particularly interested in leveraging generative AI, quantitative analytics, and large language models to solve complex problems in financial technology and system optimization, creating scalable, production-ready solutions that deliver measurable business impact.
          </motion.p>
          
          <motion.div 
            className="text-sm sm:text-base lg:text-lg text-white/70 mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white">Education & Achievements</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <GraduationCap className="text-primary-500 mr-2 sm:mr-3 mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <div>
                  <p className="font-medium text-sm sm:text-base">MTech Dual Degree in Ocean Engineering & Naval Architecture with Financial Engineering</p>
                  <p className="text-white/60 text-xs sm:text-sm">Indian Institute of Technology Kharagpur (Graduated in 2025)</p>
                  <p className="text-primary-400 text-xs sm:text-sm">Departmental Rank 2 among 60+ students</p>
                  <p className="text-accent-400 text-xs sm:text-sm">JC GHOSH MEMORIAL Award Winner (Best All-Rounder)</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2 h-48 sm:h-64 md:h-80 lg:h-96 px-2 sm:px-0">
          <motion.div
            ref={canvasRef}
            className="w-full h-full bg-dark-700/50 rounded-xl overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <div className="absolute inset-2 sm:inset-4 rounded-lg overflow-hidden z-10">
              <img
                src="/devraj pic.jpg"
                alt="Devraj"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  console.log('Image failed to load, using fallback');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent rounded-lg" />
            </div>
            
            {/* 3D Background - Only render when in view */}
            {canvasInView && (
              <Canvas 
                className="absolute inset-0"
                gl={{ powerPreference: 'low-power', antialias: false }}
                onCreated={({ gl }) => {
                  gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                }}
              >
                <ambientLight intensity={0.3} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} />
                <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
                  <Sphere args={[1.5, 64, 64]} position={[-1, -1, -2]}>
                    <MeshDistortMaterial
                      color="#8b5cf6"
                      attach="material"
                      distort={0.3}
                      speed={1.5}
                      roughness={0.2}
                      metalness={0.6}
                      opacity={0.4}
                      transparent
                    />
                  </Sphere>
                </Float>
                <OrbitControls enableZoom={false} />
              </Canvas>
            )}
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 px-2 sm:px-0">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            className="glass-card p-3 sm:p-4 md:p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary-500/10 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
              {item.icon}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
            <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;