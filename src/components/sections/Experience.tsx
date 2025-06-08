import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionMusicPlayer from '../ui/SectionMusicPlayer';
import { useMouseContext } from '../../context/MouseContext';
import { Briefcase, Calendar, GraduationCap, Award, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const { setCursorVariant } = useMouseContext();
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const workExperience = [
    {
      title: 'Co-founder',
      company: 'NaviMitra',
      period: 'May 2024 - Present',
      description: 'Founded B2B SaaS company developing AI-powered Vessel Traffic Management System. Achieved Technology Readiness Level 4. Leading technical development and product strategy.',
      skills: ['AI', 'Machine Learning', 'Maritime Technology', 'SaaS', 'Entrepreneurship'],
      icon: <Briefcase />,
      companyLogo: '/files_3540181-1749336874854-image.png',
      achievements: [
        'Developed AI-powered vessel tracking algorithms',
        'Achieved Technology Readiness Level 4',
        'Led team of 5 engineers and researchers',
        'Secured incubation at AI4ICPS IIT Kharagpur'
      ],
      website: '#'
    },
    {
      title: 'Strategy Intern',
      company: 'Krutrim (Ola)',
      period: 'May 2024 - August 2024',
      description: "Analyzed 600+ AI companies from YC'23 & '24 batches. Identified 3 key investment trends and 10 potential M&A targets. Estimated GPUaaS market demand contributing to USD 88.5 million opportunity. Developed pricing models for GPU infrastructure with 81% average gross margin.",
      skills: ['Market Analysis', 'Financial Modeling', 'Strategic Planning', 'AI Industry'],
      icon: <Briefcase />,
      companyLogo: '/files_3540181-1749336836476-image.png',
      achievements: [
        'Analyzed 600+ AI companies from YC batches',
        'Identified USD 88.5 million market opportunity',
        'Developed pricing models with 81% gross margin',
        'Created comprehensive market analysis reports'
      ],
      website: 'https://krutrim.ai'
    },
    {
      title: 'AI Engineer',
      company: 'QNext.ai',
      period: 'January 2024 - March 2024',
      description: 'Built REST API-based microservices for dynamic newsletter generation. Engineered asynchronous pipeline reducing user wait time by 5x. Integrated LangChain with dynamic pydantic output parser. Developed Twitter integration for automated content posting.',
      skills: ['REST API', 'LangChain', 'Python', 'Microservices', 'LLMs'],
      icon: <Briefcase />,
      companyLogo: '/files_3540181-1749337633217-download.jpg',
      achievements: [
        'Reduced user wait time by 5x with async pipelines',
        'Built scalable REST API microservices',
        'Integrated LangChain for content generation',
        'Automated social media content posting'
      ],
      website: '#'
    },
    {
      title: 'Summer Intern',
      company: 'Buoyancy Consultants',
      period: 'May 2023 - July 2023',
      description: 'Developed Maritime Energy Efficiency Application focusing on ship energy efficiency indexes. Composed comprehensive study on EEDI, EEXI and CII regulations. Implemented MEPC regulations to create Visual Basic Application for generating energy efficiency indexes.',
      skills: ['Maritime Engineering', 'Visual Basic', 'Energy Efficiency', 'MEPC Regulations', 'Case Studies'],
      icon: <Briefcase />,
      companyLogo: '/files_3540181-1749336851473-image.png',
      achievements: [
        'Comprehensive study on EEDI, EEXI and CII energy efficiency indexes',
        'Created Visual Basic Application for MEPC regulations compliance',
        'Performed case studies on single-fuel and double-fuel engine vessels',
        'Analyzed Energy Saving Devices impact on EEDI index reduction',
        'Predicted EEDI indexes with high precision for vessel types'
      ],
      website: '#'
    },
    {
      title: 'Financial Market Analysis Intern',
      company: 'Finlatics',
      period: 'May 2023 - July 2023',
      description: "Analyzed 20-year historical Nifty 50 data for tail-event prediction. Developed hedging strategies using index options. Achieved 12.97% CAGR, outperforming Nifty 50 by 3.35%. Conducted Porter's 5 Forces analysis on technology sector.",
      skills: ['Financial Analysis', 'Market Research', 'Data Analysis', 'Strategy'],
      icon: <Briefcase />,
      companyLogo: '/files_3540181-1749336866183-image.png',
      achievements: [
        'Achieved 12.97% CAGR performance',
        'Outperformed Nifty 50 by 3.35%',
        'Analyzed 20-year historical market data',
        'Developed sophisticated hedging strategies'
      ],
      website: '#'
    },
  ];

  const education = [
    {
      title: 'MTech Dual Degree in Ocean Engineering & Naval Architecture with Financial Engineering',
      institution: 'Indian Institute of Technology Kharagpur',
      period: '2020 - 2025 (Expected)',
      description: 'Departmental Rank 2 among 60+ students | JC GHOSH MEMORIAL Award Winner (Best All-Rounder)',
      icon: <GraduationCap />,
      logo: '/files_3540181-1749336893045-image.png',
    },
    {
      title: 'Higher Secondary Education',
      institution: 'West Bengal Council of Higher Secondary Education',
      period: '2018 - 2020',
      description: 'Top 10 in West Bengal | West Bengal Government Honor recipient',
      icon: <GraduationCap />,
      logo: '/files_3540181-1749337613250-download.jpg',
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <SectionWrapper id="experience">
      {/* Professional/Corporate Background Music */}
      <SectionMusicPlayer 
        sectionId="experience" 
        musicUrl="https://www.bensound.com/bensound-music/bensound-corporate.mp3"
        volume={0.12}
      />
      
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-center mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My <span className="text-gradient">Experience</span>
      </motion.h2>
      
      <motion.p
        className="text-base sm:text-lg text-white/70 text-center max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-12 sm:mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        My professional journey and educational background that have shaped my skills and expertise in AI engineering, entrepreneurship, and innovation.
      </motion.p>
      
      <div className="space-y-16 sm:space-y-20 px-4">
        <div>
          <motion.h3
            className="text-xl sm:text-2xl font-heading font-medium flex items-center gap-3 mb-6 sm:mb-8 text-primary-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Briefcase className="text-primary-400" /> Professional Experience
          </motion.h3>
          
          <div className="space-y-6 sm:space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 sm:p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Company Logo */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white p-1 sm:p-2 flex items-center justify-center">
                    <img 
                      src={job.companyLogo} 
                      alt={`${job.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-3 sm:mb-4">
                      <div className="mb-2 sm:mb-0">
                        <h4 className="text-lg sm:text-xl font-medium mb-1">{job.title}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/70 mb-2">
                          <span className="font-medium text-primary-400">{job.company}</span>
                          <span className="flex items-center text-sm">
                            <Calendar size={14} className="mr-1" />
                            {job.period}
                          </span>
                          {job.website !== '#' && (
                            <a 
                              href={job.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                            >
                              <ExternalLink size={14} />
                              Visit
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors flex-shrink-0"
                        onMouseEnter={() => setCursorVariant('button')}
                        onMouseLeave={() => setCursorVariant('default')}
                      >
                        {expandedExperience === index ? (
                          <ChevronDown size={20} />
                        ) : (
                          <ChevronRight size={20} />
                        )}
                      </button>
                    </div>
                    
                    <p className="text-white/70 mb-3 sm:mb-4 text-sm sm:text-base">{job.description}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-primary-500/10 text-primary-400 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Expandable Achievements */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedExperience === index ? 'auto' : 0,
                        opacity: expandedExperience === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 sm:pt-4 border-t border-dark-600">
                        <h5 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-secondary-400">Key Achievements</h5>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-2 text-white/70 text-sm sm:text-base"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ 
                                opacity: expandedExperience === index ? 1 : 0,
                                x: expandedExperience === index ? 0 : -10
                              }}
                              transition={{ delay: achIndex * 0.1 }}
                            >
                              <Award size={16} className="text-accent-400 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <motion.h3
            className="text-xl sm:text-2xl font-heading font-medium flex items-center gap-3 mb-6 sm:mb-8 text-primary-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="text-primary-400" /> Education
          </motion.h3>
          
          <div className="relative pl-6 sm:pl-8 border-l-2 border-primary-500/30 space-y-8 sm:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="absolute -left-[34px] sm:-left-[42px] p-2 bg-dark-800 border-2 border-primary-500 rounded-full">
                  {edu.icon}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  {/* Institution Logo */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white p-1 sm:p-2 flex items-center justify-center">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-medium mb-1">{edu.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-white/70 mb-2 sm:mb-3 gap-1 sm:gap-2">
                      <span className="font-medium text-sm sm:text-base">{edu.institution}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center text-sm">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;