import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionMusicPlayer from '../ui/SectionMusicPlayer';
import { useMouseContext } from '../../context/MouseContext';
import { ExternalLink, Github, ArrowRight, X, Code, Layers, Cpu, Database, BarChart, Brain, TrendingUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  challenge: string;
  solution: string;
  impact: string;
  period: string;
  links: {
    live?: string;
    github?: string;
  };
}

const Projects: React.FC = () => {
  const { setCursorVariant, setCursorText } = useMouseContext();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Retrieval Augmented Generation using LLMs',
      description: 'Advanced Question-Answering system leveraging state-of-the-art RAG techniques with quantized Google-Flan-T5-XXL model.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['LangChain', 'ChromaDB', 'HuggingFace', 'BitsandBytes', 'Google-Flan-T5-XXL', 'PDF Processing'],
      category: 'Generative AI Capstone',
      period: 'July-August 2024',
      challenge: 'Developing a sophisticated Question-Answering system with optimized performance using large language models',
      solution: 'Implemented RAG with PDF document processing into 1000-sized chunks, ChromaDB vector database, and 4-bit quantized Google-Flan-T5-XXL model integrated with LangChain',
      impact: 'Created production-ready Q&A system with optimized performance through quantization techniques',
      links: {
        github: 'https://github.com/DevrajdasAdhikary',
      },
    },
    {
      title: 'Decision Support Systems for Financial Markets',
      description: 'Comprehensive analysis of financial market volatility patterns using advanced econometric models and big data processing.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['EGARCH Models', 'Fama-French 3-factor', 'NSEpy', 'Python', 'Econometric Analysis'],
      category: 'Classical ML Capstone',
      period: 'February-April 2024',
      challenge: 'Analyzing financial market volatility patterns across 778 firms over 10-year period with 1.2 million data points',
      solution: 'Implemented EGARCH models for 1-month ahead Expected Implied Volatility prediction and Fama-French 3-factor pricing models for Realized Implied Volatility calculations',
      impact: 'Revealed 23% increase in overall Mean Realized Implied Volatility when comparing pre-COVID and post-COVID market data',
      links: {
        github: 'https://github.com/DevrajdasAdhikary',
      },
    },
    {
      title: 'EmoGenX - Emotion Generation System',
      description: 'Innovative approach to fine-grained emotion detection using generation-based transformer models for 12-way emotion classification.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['GPT-2', 'T5', 'BART', 'PyTorch', 'Natural Language Processing', 'Transformer Models'],
      category: 'NLP Research Project',
      period: 'November-December 2023',
      challenge: 'Detecting fine-grained and subtle emotions from text using novel generation-based approach',
      solution: 'Fine-tuned transformer models (GPT-2, T5, BART) with 1000+ concatenated datapoints from 12-way emotion dataset with Natural Language prompts',
      impact: 'Achieved 87% accuracy and 0.79 F1 Score on complex 12-way emotion classification',
      links: {
        github: 'https://github.com/DevrajdasAdhikary',
      },
    },
    {
      title: 'Customer Lifetime Value & Product Demand Forecasting',
      description: 'Predictive models for customer behavior analysis and demand forecasting with practical business applications.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Multiple Linear Regression', 'Polynomial Regression', 'ARIMA Models', 'Python', 'Statistical Analysis'],
      category: 'Business Analytics',
      period: 'January-April 2023',
      challenge: 'Developing accurate predictive models for customer lifetime value and product demand across multiple warehouses',
      solution: 'Implemented regression models with frequency, total sales, recency parameters and ARIMA models for demand forecasting',
      impact: 'Achieved 96.36% R-squared with Polynomial Regression for CLV and 92.33% accuracy for demand forecasting, revealing 4.2% reduction in transport costs',
      links: {
        github: 'https://github.com/DevrajdasAdhikary',
      },
    },
    {
      title: 'TCDHE-SD Image Processing',
      description: 'Implementation of TCDHE-SD algorithm in MATLAB with comparative analysis against other histogram-based methods.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['MATLAB', 'Image Processing', 'Histogram Equalization', 'Statistical Analysis'],
      category: 'Image Processing Capstone',
      period: 'October-December 2022',
      challenge: 'Implementing and comparing histogram-based image enhancement algorithms for improved image quality',
      solution: 'Computed image histogram and split into 3 equal parts based on mean and standard deviation, calculated mean brightness, entropy, and EBCM measure',
      impact: 'Successfully contrasted results with contemporary histogram equalization methods, demonstrating algorithm effectiveness',
      links: {
        github: 'https://github.com/DevrajdasAdhikary',
      },
    },
    {
      title: 'Reinforcement Learning Path Following Control',
      description: 'RL-based path following controller for vehicles with variable delay using DDPG algorithm implementation.',
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['DDPG Algorithm', 'Reinforcement Learning', 'MATLAB', 'Control Systems', 'Path Planning'],
      category: 'Control Systems Research',
      period: 'August 2021',
      challenge: 'Developing robust path following control for vehicles with variable delay constraints',
      solution: 'Implemented DDPG (Deep Deterministic Policy Gradient) algorithm with custom driving scenarios and observation-error systems',
      impact: 'Created effective RL-based controller capable of handling variable delay in vehicle path following scenarios',
      links: {
        github: 'https://github.com/DevrajdasAdhikary',
      },
    },
  ];

  const categoryIcons: Record<string, JSX.Element> = {
    'Generative AI Capstone': <Brain size={16} className="sm:w-5 sm:h-5" />,
    'Classical ML Capstone': <TrendingUp size={16} className="sm:w-5 sm:h-5" />,
    'NLP Research Project': <Code size={16} className="sm:w-5 sm:h-5" />,
    'Business Analytics': <BarChart size={16} className="sm:w-5 sm:h-5" />,
    'Image Processing Capstone': <Layers size={16} className="sm:w-5 sm:h-5" />,
    'Control Systems Research': <Cpu size={16} className="sm:w-5 sm:h-5" />,
  };

  return (
    <SectionWrapper id="projects" className="bg-dark-900">
      {/* Innovative/Creative Background Music */}
      <SectionMusicPlayer 
        sectionId="projects" 
        musicUrl="https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
        volume={0.12}
      />
      
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-center mb-3 sm:mb-4 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My <span className="text-gradient">Projects</span>
      </motion.h2>
      
      <motion.p
        className="text-sm sm:text-base md:text-lg text-white/70 text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Explore my portfolio of academic and research projects showcasing expertise in AI, machine learning, financial engineering, and advanced computational methods.
      </motion.p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group glass-card overflow-hidden relative h-[400px] sm:h-[450px] md:h-[500px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 z-10 bg-dark-800/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full flex items-center gap-1.5">
              {categoryIcons[project.category] || <Code size={14} />}
              <span className="text-xs font-medium">{project.category}</span>
            </div>
            
            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-10 bg-dark-800/80 backdrop-blur-sm px-2 py-1 rounded-full">
              <span className="text-xs text-primary-400">{project.period}</span>
            </div>
            
            <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-3 sm:p-4 md:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 line-clamp-2">{project.title}</h3>
              <p className="text-white/70 mb-2 sm:mb-3 md:mb-4 line-clamp-2 text-xs sm:text-sm md:text-base">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary-500/10 text-primary-400 px-2 py-1 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-dark-600 text-white/60 px-2 py-1 text-xs rounded-md">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-white/80 hover:text-white flex items-center gap-2 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                  onMouseEnter={() => {
                    setCursorVariant('link');
                    setCursorText('Details');
                  }}
                  onMouseLeave={() => {
                    setCursorVariant('default');
                    setCursorText('');
                  }}
                >
                  View Details
                </button>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white flex items-center gap-2 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                    onMouseEnter={() => {
                      setCursorVariant('link');
                      setCursorText('Visit');
                    }}
                    onMouseLeave={() => {
                      setCursorVariant('default');
                      setCursorText('');
                    }}
                  >
                    <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                    Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white flex items-center gap-2 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                    onMouseEnter={() => {
                      setCursorVariant('link');
                      setCursorText('Code');
                    }}
                    onMouseLeave={() => {
                      setCursorVariant('default');
                      setCursorText('');
                    }}
                  >
                    <Github size={12} className="sm:w-3.5 sm:h-3.5" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
            
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="flex justify-center mt-6 sm:mt-8 md:mt-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/DevrajdasAdhikary"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline flex items-center gap-2 group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
          onMouseEnter={() => {
            setCursorVariant('button');
            setCursorText('More Projects');
          }}
          onMouseLeave={() => {
            setCursorVariant('default');
            setCursorText('');
          }}
        >
          See More on GitHub 
          <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-dark-900/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <div className="relative h-32 sm:h-48 md:h-64 overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-dark-800/80 p-2 rounded-full text-white/80 hover:text-white transition-colors"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <X size={16} className="sm:w-5 sm:h-5" />
              </button>
              <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-3 sm:left-4 md:left-6 flex gap-2 sm:gap-3">
                <span className="bg-primary-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <span className="bg-secondary-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full">
                  {selectedProject.period}
                </span>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">{selectedProject.title}</h3>
              <p className="text-white/80 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                <div className="glass-card p-2 sm:p-3 md:p-4">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-primary-400">Challenge</h4>
                  <p className="text-white/70 text-xs sm:text-sm md:text-base">{selectedProject.challenge}</p>
                </div>
                <div className="glass-card p-2 sm:p-3 md:p-4">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-secondary-400">Solution</h4>
                  <p className="text-white/70 text-xs sm:text-sm md:text-base">{selectedProject.solution}</p>
                </div>
                <div className="glass-card p-2 sm:p-3 md:p-4">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-accent-400">Impact</h4>
                  <p className="text-white/70 text-xs sm:text-sm md:text-base">{selectedProject.impact}</p>
                </div>
              </div>
              
              <div className="mb-3 sm:mb-4 md:mb-6">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary-500/10 text-primary-400 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-end">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3"
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <Github size={14} className="sm:w-4 sm:h-4" /> View Source Code
                  </a>
                )}
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3"
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" /> Visit Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </SectionWrapper>
  );
};

export default Projects;