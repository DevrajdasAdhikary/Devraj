import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { useMouseContext } from '../../context/MouseContext';
import { BookOpen, FileText, PenTool, Github, Share2, Microscope, BookMarked, FileCode } from 'lucide-react';

const Research: React.FC = () => {
  const { setCursorVariant, setCursorText } = useMouseContext();

  const researchItems = [
    {
      title: "Master's Thesis",
      description: "Financial Engineering applications in maritime risk assessment",
      icon: <BookOpen className="text-primary-500" />,
      link: "#",
    },
    {
      title: "Research Focus",
      description: "AI-powered vessel traffic management systems",
      icon: <Microscope className="text-primary-500" />,
      link: "#",
    },
    {
      title: "Conference Presentations",
      description: "Smart India Hackathon 2023 technical presentation",
      icon: <PenTool className="text-primary-500" />,
      link: "#",
    },
    {
      title: "Technical Blog Posts",
      description: "Deep dives into transformer architectures and quantization techniques",
      icon: <FileText className="text-primary-500" />,
      link: "#",
    },
  ];

  const openSourceItems = [
    {
      title: "GitHub Portfolio",
      description: "10+ repositories showcasing production-ready code",
      icon: <Github className="text-secondary-500" />,
      link: "https://github.com/DevrajdasAdhikary",
    },
    {
      title: "Community Impact",
      description: "Contributing to AI/ML open source ecosystem",
      icon: <Share2 className="text-secondary-500" />,
      link: "#",
    },
    {
      title: "Code Quality",
      description: "Well-documented, industry-standard implementations",
      icon: <FileCode className="text-secondary-500" />,
      link: "#",
    },
    {
      title: "Knowledge Sharing",
      description: "Technical tutorials and implementation guides",
      icon: <BookMarked className="text-secondary-500" />,
      link: "#",
    },
  ];

  return (
    <SectionWrapper id="research">
      <motion.h2
        className="section-heading text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Research & <span className="text-gradient">Publications</span>
      </motion.h2>
      
      <motion.p
        className="text-lg text-white/70 text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Exploring the intersection of AI, financial engineering, and maritime technology through academic research and open-source contributions.
      </motion.p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <BookOpen className="text-primary-500" />
            <span>Academic Contributions</span>
          </h3>
          
          <div className="space-y-6">
            {researchItems.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-5 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, x: 5 }}
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-white/70 mb-2">{item.description}</p>
                  <a 
                    href={item.link} 
                    className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1"
                    onMouseEnter={() => {
                      setCursorVariant('link');
                      setCursorText('View');
                    }}
                    onMouseLeave={() => {
                      setCursorVariant('default');
                      setCursorText('');
                    }}
                  >
                    Learn more <Share2 size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Github className="text-secondary-500" />
            <span>Open Source Contributions</span>
          </h3>
          
          <div className="space-y-6">
            {openSourceItems.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-5 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, x: 5 }}
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-white/70 mb-2">{item.description}</p>
                  <a 
                    href={item.link} 
                    className="text-secondary-400 hover:text-secondary-300 text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => {
                      setCursorVariant('link');
                      setCursorText('View');
                    }}
                    onMouseLeave={() => {
                      setCursorVariant('default');
                      setCursorText('');
                    }}
                  >
                    Explore <Share2 size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-16 p-8 glass-card border border-primary-500/20 rounded-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Microscope size={80} className="text-primary-400 opacity-80" />
              </motion.div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Current Research Focus</h3>
            <p className="text-white/80 mb-4">
              My research focuses on the intersection of AI, financial engineering, and maritime technology. I'm currently exploring novel approaches to vessel traffic management using deep learning and reinforcement learning techniques.
            </p>
            <p className="text-white/70">
              This interdisciplinary approach combines my expertise in ocean engineering with cutting-edge AI methodologies to create safer, more efficient maritime navigation systems.
            </p>
            
            <motion.div 
              className="mt-6 flex gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a 
                href="#contact" 
                className="btn-primary"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Discuss Research Opportunities
              </a>
              <a 
                href="https://github.com/DevrajdasAdhikary" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                View Code Repositories
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Research;