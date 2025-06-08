import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionMusicPlayer from '../ui/SectionMusicPlayer';
import { useMouseContext } from '../../context/MouseContext';
import { Award, Trophy, Medal, Star, Rocket, GraduationCap, Users } from 'lucide-react';

// Sliding Images Component - Clean version without tooltips
const SlidingImages = () => {
  const { setCursorVariant } = useMouseContext();
  
  const images = [
    {
      url: "/files_3540181-1749339963076-1703442972782.jpg",
      alt: "Smart India Hackathon 2023 - Team Victory"
    },
    {
      url: "/files_3540181-1749339982969-1703442972881.jpg", 
      alt: "Smart India Hackathon 2023 - Award Ceremony"
    },
    {
      url: "/files_3540181-1749340008624-1712583571077.jpg",
      alt: "Dark Pattern Buster Hackathon 2024 - Award Ceremony"
    },
    {
      url: "/files_3540181-1749340032431-474712416_1319217396095585_2644035174386671425_n.jpg",
      alt: "General Championship Victory"
    },
    {
      url: "/files_3540181-1749340081643-480838914_1345233786827279_6628476259851081355_n.jpg",
      alt: "JC GHOSH MEMORIAL Award"
    },
  ];

  return (
    <div className="relative h-32 sm:h-40 md:h-48 mb-12 sm:mb-16 overflow-hidden rounded-xl bg-dark-800/30">
      <motion.div
        className="flex gap-4 sm:gap-6 md:gap-8 h-full items-center"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: 'calc(320px * 10)' }}
      >
        {[...images, ...images].map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-48 sm:w-60 md:w-72 h-24 sm:h-32 md:h-40 rounded-lg overflow-hidden border-2 border-transparent group"
            whileHover={{ scale: 1.05 }}
            animate={{
              borderColor: [
                'rgba(14, 165, 233, 0.5)',
                'rgba(139, 92, 246, 0.5)',
                'rgba(16, 185, 129, 0.5)',
                'rgba(14, 165, 233, 0.5)',
              ],
            }}
            transition={{
              borderColor: {
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              },
            }}
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Achievements: React.FC = () => {
  const { setCursorVariant } = useMouseContext();
  const canvasRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(canvasRef);
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const achievementCategories = [
    {
      title: 'Competition Excellence',
      icon: <Trophy className="text-yellow-400" />,
      achievements: [
        {
          title: 'Dark Pattern Buster Hackathon 2024',
          description: 'National Winner (1st/600+ teams) - Department of Consumer Affairs',
          icon: <Award />,
        },
        {
          title: 'Smart India Hackathon 2023',
          description: 'National Winner (1st/423 teams) - Ministry of Education',
          icon: <Award />,
        },
        {
          title: 'Indian Case Challenge 2023',
          description: 'National Finalist (Top 15/5500+ teams) - IIT Kharagpur Business Club',
          icon: <Medal />,
        },
      ],
    },
    {
      title: 'Academic Honors',
      icon: <GraduationCap className="text-blue-400" />,
      achievements: [
        {
          title: 'Departmental Rank 2',
          description: 'Ocean Engineering & Naval Architecture (2022-2024)',
          icon: <Star />,
        },
        {
          title: 'JC GHOSH MEMORIAL Award',
          description: 'Best All-Rounder among 100+ OENA students (2022-23)',
          icon: <Trophy />,
        },
        {
          title: 'West Bengal Government Honor',
          description: 'Top 10 in Higher Secondary Examination (2020)',
          icon: <Award />,
        },
      ],
    },
    {
      title: 'Entrepreneurship & Innovation',
      icon: <Rocket className="text-purple-400" />,
      achievements: [
        {
          title: 'NaviMitra Co-founder',
          description: 'Maritime AI startup focused on vessel traffic management',
          icon: <Rocket />,
        },
        {
          title: 'Yukti Innovation Challenge',
          description: 'Selected for funding among 400+ teams (2023)',
          icon: <Star />,
        },
        {
          title: 'AI4ICPS Incubation',
          description: 'Successfully incubated at IIT Kharagpur (2024)',
          icon: <Award />,
        },
      ],
    },
    {
      title: 'Leadership Roles',
      icon: <Users className="text-green-400" />,
      achievements: [
        {
          title: 'Department Representative',
          description: 'Undergraduate Council, IIT Kharagpur (2023-2024)',
          icon: <Users />,
        },
        {
          title: 'Social & Cultural Coordinator',
          description: 'Radhakrishnan Hall of Residence (2022-2023)',
          icon: <Users />,
        },
        {
          title: 'General Championship Winner',
          description: 'Led team to victory with 7 Gold, 2 Silver, 1 Bronze medals',
          icon: <Trophy />,
        },
      ],
    },
  ];

  return (
    <SectionWrapper id="achievements" className="bg-dark-900">
      {/* Triumphant/Victory Background Music */}
      <SectionMusicPlayer 
        sectionId="achievements" 
        musicUrl="https://www.bensound.com/bensound-music/bensound-epic.mp3"
        volume={0.15}
      />
      
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-center mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My <span className="text-gradient">Achievements</span>
      </motion.h2>
      
      <motion.p
        className="text-base sm:text-lg text-white/70 text-center max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-12 sm:mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        A timeline of major accomplishments showcasing consistent excellence across competitions, academics, and entrepreneurship.
      </motion.p>
      
      {/* Sliding Images - Clean version */}
      <SlidingImages />
      
      {/* Timeline visualization */}
      <motion.div 
        className="relative h-16 sm:h-20 md:h-24 mb-12 sm:mb-16 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 top-1/2 transform -translate-y-1/2 w-full rounded-full"></div>
        
        {/* Year markers */}
        {['2020', '2021', '2022', '2023', '2024'].map((year, index) => (
          <motion.div 
            key={year}
            className="absolute top-1/2 transform -translate-y-1/2"
            style={{ left: `${index * 25}%` }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-500 rounded-full relative left-0 mb-2"></div>
            <p className="text-white/70 text-xs sm:text-sm absolute -left-3 sm:-left-4">{year}</p>
          </motion.div>
        ))}
        
        {/* Achievement points */}
        {[
          { year: '2020', title: 'WB Govt Honor', position: 0 },
          { year: '2022', title: 'JC GHOSH Award', position: 40 },
          { year: '2023', title: 'SIH Winner', position: 60 },
          { year: '2023', title: 'Yukti Challenge', position: 65 },
          { year: '2024', title: 'Dark Pattern Buster', position: 80 },
          { year: '2024', title: 'NaviMitra', position: 85 },
        ].map((achievement, index) => (
          <motion.div
            key={index}
            className={`absolute ${index % 2 === 0 ? '-top-8 sm:-top-12' : 'top-6 sm:top-8'}`}
            style={{ left: `${achievement.position}%` }}
            initial={{ y: index % 2 === 0 ? -20 : 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            viewport={{ once: true }}
          >
            <div className="w-0.5 h-4 sm:h-6 bg-primary-400 absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="bg-dark-700 rounded-lg p-1 sm:p-2 text-xs whitespace-nowrap">
              {achievement.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4">
        {achievementCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="glass-card p-4 sm:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-700 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                {category.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {category.achievements.map((achievement, achievementIndex) => (
                <motion.div
                  key={achievementIndex}
                  className="flex gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (achievementIndex * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  onMouseEnter={() => setCursorVariant('text')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-700 rounded-lg flex-shrink-0 flex items-center justify-center text-primary-500">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-base sm:text-lg">{achievement.title}</h4>
                    <p className="text-white/60 text-sm sm:text-base">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-12 sm:mt-16 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-block glass-card p-4 sm:p-6 max-w-2xl">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Let's collaborate on innovative AI projects</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Get in touch
            </a>
            <a 
              href="https://www.linkedin.com/in/devraj-das-adhikary-655720202/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Achievements;