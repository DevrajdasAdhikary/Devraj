import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../ui/SectionWrapper';
import SectionMusicPlayer from '../ui/SectionMusicPlayer';
import { useMouseContext } from '../../context/MouseContext';
import { Code, Database, Layout, Layers, Globe, Server, Brain, BarChart as ChartBar, Cloud } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import SkillsGlobe from '../ui/SkillsGlobe';

const Skills: React.FC = () => {
  const { setCursorVariant, setCursorText } = useMouseContext();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const { ref: canvasRef, inView: canvasInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const skillCategories = [
    {
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Programming & Development',
      level: 90,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 85 },
        { name: 'MATLAB', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Flask', level: 85 },
        { name: 'REST API development', level: 85 },
      ],
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'AI/ML Expertise',
      level: 95,
      skills: [
        { name: 'PyTorch', level: 90 },
        { name: 'Transformers', level: 95 },
        { name: 'OpenCV', level: 85 },
        { name: 'scikit-learn', level: 90 },
        { name: 'Large Language Models (LLMs)', level: 95 },
        { name: 'Computer Vision and NLP', level: 90 },
        { name: 'Generative AI systems', level: 90 },
        { name: 'Deep Learning architectures', level: 85 },
      ],
    },
    {
      icon: <ChartBar className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Data Science & Analytics',
      level: 90,
      skills: [
        { name: 'NumPy', level: 95 },
        { name: 'Pandas', level: 95 },
        { name: 'Statistical Modeling', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'Tableau visualization', level: 80 },
        { name: 'Time Series Analysis', level: 85 },
        { name: 'Financial modeling', level: 90 },
      ],
    },
    {
      icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Cloud & DevOps',
      level: 75,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD pipelines', level: 70 },
        { name: 'Database management (MySQL, ChromaDB)', level: 75 },
      ],
    },
    {
      icon: <Layout className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'UI/UX',
      level: 80,
      skills: [
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'Material UI', level: 75 },
        { name: 'Responsive Design', level: 85 },
        { name: 'Animation', level: 70 },
      ],
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Others',
      level: 85,
      skills: [
        { name: 'SEO', level: 70 },
        { name: 'Testing', level: 75 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
      ],
    },
  ];

  return (
    <SectionWrapper id="skills" className="bg-dark-900">
      {/* Tech/Futuristic Background Music */}
      <SectionMusicPlayer 
        sectionId="skills" 
        musicUrl="https://www.bensound.com/bensound-music/bensound-scifi.mp3"
        volume={0.15}
      />
      
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-center mb-3 sm:mb-4 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My <span className="text-gradient">Skills</span>
      </motion.h2>
      
      <motion.p
        className="text-sm sm:text-base md:text-lg text-white/70 text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Expertise across machine learning, deep learning, LLMs, AI integrations, and data analysis, constantly expanding my toolkit to tackle diverse challenges.
      </motion.p>
      
      {/* 3D Skills Globe - Only render when in view */}
      <motion.div 
        className="mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto px-2 sm:px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        ref={globeContainerRef}
      >
        <div className="glass-card p-3 sm:p-4 md:p-6 lg:p-8">
          <div 
            ref={canvasRef}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full"
          >
            {canvasInView && (
              <Canvas 
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ powerPreference: 'low-power' }}
              >
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.2} />
                <SkillsGlobe />
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  rotateSpeed={0.5}
                  autoRotate={false}
                  autoRotateSpeed={0}
                />
                <Environment preset="city" />
              </Canvas>
            )}
            
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-white/70 text-xs sm:text-sm">
              <p>Drag to rotate | Hover for details</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="glass-card p-3 sm:p-4 md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            onMouseEnter={() => {
              setCursorVariant('text');
              setActiveCategory(category.title);
            }}
            onMouseLeave={() => {
              setCursorVariant('default');
              setActiveCategory(null);
            }}
          >
            <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 mr-2 sm:mr-3 md:mr-4">
                {category.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">{category.title}</h3>
            </div>
            
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 text-xs sm:text-sm">
                    <span className="truncate pr-2">{skill.name}</span>
                    <span className="text-primary-400 flex-shrink-0">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-dark-600 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 0.8, 
                        delay: skillIndex * 0.1 + 0.2,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;