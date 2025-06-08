import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionMusicPlayer from '../ui/SectionMusicPlayer';
import { useMouseContext } from '../../context/MouseContext';
import { Award, Trophy, Users, Star, Activity, BookOpen, Mic, Palette, Heart, Medal } from 'lucide-react';
import CategoryCarousel from '../ui/CategoryCarousel';

const Extracurricular: React.FC = () => {
  const { setCursorVariant } = useMouseContext();
  const [activeTab, setActiveTab] = useState('literary');

  const tabs = [
    { id: 'literary', label: 'Literary & Cultural', icon: <BookOpen size={20} /> },
    { id: 'sports', label: 'Sports & Physical', icon: <Activity size={20} /> },
    { id: 'leadership', label: 'Leadership & Governance', icon: <Users size={20} /> },
    { id: 'community', label: 'Community Service', icon: <Heart size={20} /> },
  ];

  const activities = {
    literary: [
      {
        title: 'Published Author - "Navigating Bias"',
        organization: 'Amazon Kindle Direct Publishing',
        period: '',
        description: 'Successfully completed the full publishing cycle from manuscript development to market distribution through Amazon\'s Kindle Direct Publishing platform. The book "Navigating Bias: Unraveling Moral Decision-Making" explores complex themes of moral decision-making and cognitive biases in human judgment, demonstrating advanced skills in creative writing, research methodology, and academic writing.',
        icon: <BookOpen className="text-blue-400" />,
        gradient: 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20',
        achievements: []
      },
      {
        title: 'State Level Debate Championships',
        organization: 'All Bengal Teachers Association',
        period: '',
        description: 'Secured top positions in state-level debate competitions organized by All Bengal Teachers Association (Estd. 1921). Presented structured parliamentary debate arguments both "for" and "against" various motions across diverse topics including policy, ethics, and contemporary issues, developing exceptional public speaking and critical thinking skills under one of Bengal\'s most prestigious educational organizations.',
        icon: <Mic className="text-purple-400" />,
        gradient: 'bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20',
        achievements: []
      },
      {
        title: 'State Level Extempore Speech Excellence',
        organization: 'All Bengal Teachers Association',
        period: '',
        description: 'Excelled in state-level extempore speech competitions organized by All Bengal Teachers Association, requiring spontaneous presentation skills on diverse topics. Competitions involved topic selection moments before speaking, testing quick thinking and knowledge breadth while building confidence in impromptu public presentations under the guidance of Bengal\'s premier educational association.',
        icon: <Mic className="text-green-400" />,
        gradient: 'bg-gradient-to-br from-green-500/20 via-teal-500/20 to-cyan-500/20',
        achievements: []
      },
      {
        title: 'Senior Diploma in Drawing & Painting - 1st Division',
        organization: 'Calcutta Talent Search School',
        period: '',
        description: 'Completed Senior Diploma in Drawing & Painting with 1st Division from Calcutta Talent Search School, demonstrating exceptional artistic capabilities and technical proficiency in visual arts. This comprehensive certification represents mastery in various drawing and painting techniques, color theory, composition, and artistic expression beyond technical and academic pursuits.',
        icon: <Palette className="text-pink-400" />,
        gradient: 'bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-orange-500/20',
        achievements: []
      },
      {
        title: 'Senior Diploma in Recitation - 1st Division',
        organization: 'Sarbabharatiya Sangeet-O-Sanskriti Parishad',
        period: '',
        description: 'Achieved Senior Diploma in Recitation with 1st Division from Sarbabharatiya Sangeet-O-Sanskriti Parishad under West Bengal State Academy of Dance, Drama, Music & Fine Arts. This prestigious certification demonstrates mastery in voice modulation, expression, rhythm, and performance recitation, showcasing excellence in performing arts and cultural expression.',
        icon: <Mic className="text-indigo-400" />,
        gradient: 'bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-cyan-500/20',
        achievements: []
      },
    ],
    sports: [
      {
        title: 'Hockey Team Member - Radhakrishnan Hall',
        organization: 'IIT Kharagpur',
        period: '',
        description: 'Active member of RK Hall hockey team, contributing to inter-hall sports competitions. RK Hall boasts 50 General Championships, making it one of the most competitive sports environments in the institute, fostering teamwork, strategic thinking, and athletic excellence.',
        icon: <Activity className="text-green-400" />,
        gradient: 'bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20',
        achievements: []
      },
    ],
    leadership: [
      {
        title: 'Undergraduate Representative Candidate',
        organization: 'IIT Kharagpur Student Gymkhana',
        period: '',
        description: 'Contested for Undergraduate Representative position, identifying systemic issues affecting student welfare. Drafted 3 comprehensive policy proposals addressing concerns of 15,000+ undergraduate students covering academic reforms, infrastructure improvements, and student services enhancement.',
        icon: <Users className="text-blue-400" />,
        gradient: 'bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20',
        achievements: []
      },
      {
        title: 'Department Representative - Undergraduate Council',
        organization: 'Ocean Engineering & Naval Architecture Department',
        period: '',
        description: 'Elected representative for 150+ department students across all academic years. Served as liaison between students and administration while successfully organizing "Know Your Department" session empowering 120+ freshers during orientation programs.',
        icon: <Star className="text-purple-400" />,
        gradient: 'bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-indigo-500/20',
        achievements: []
      },
      {
        title: 'Social & Cultural Coordinator - Radhakrishnan Hall',
        organization: 'IIT Kharagpur',
        period: '',
        description: 'Led team to historic General Championship victory, managing budget of INR 500,000 across 21 GC events. Achieved record 665 points with 7 Gold, 2 Silver, and 1 Bronze medals across Rangoli, Open IIT events, and various cultural competitions.',
        icon: <Trophy className="text-yellow-400" />,
        gradient: 'bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20',
        achievements: []
      },
    ],
    community: [
      {
        title: 'NSS Volunteer - Unit 3 Sub Unit D',
        organization: 'National Service Scheme, IIT Kharagpur',
        period: '',
        description: 'Active volunteer conducting community development and awareness programs following NSS motto "Not Me But You". Felicitated with Silver medal for conducting awareness drives among 300+ rural houses and participating in 7-day special camping programs.',
        icon: <Heart className="text-red-400" />,
        gradient: 'bg-gradient-to-br from-red-500/20 via-pink-500/20 to-rose-500/20',
        achievements: []
      },
      {
        title: 'Mentoring for Free on Mentor Together',
        organization: 'Mentor Together Platform',
        period: '',
        description: 'Providing free mentoring services to students and young professionals through the Mentor Together platform, sharing knowledge and guidance in academic and career development while supporting personal growth and motivation.',
        icon: <Heart className="text-green-400" />,
        gradient: 'bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20',
        achievements: []
      },
      {
        title: 'Rural Development Programs',
        organization: 'NSS Adopted Villages',
        period: '',
        description: 'Participated in 7-day special camping programs in adopted villages, conducting health awareness campaigns, vaccination drives, environmental conservation initiatives including tree plantation, and literacy support programs for rural community development.',
        icon: <Heart className="text-blue-400" />,
        gradient: 'bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20',
        achievements: []
      },
    ],
  };

  return (
    <SectionWrapper id="extracurricular">
      {/* Inspirational/Uplifting Background Music */}
      <SectionMusicPlayer 
        sectionId="extracurricular" 
        musicUrl="https://www.soundjay.com/misc/sounds/inspirational-journey.mp3"
        volume={0.2}
      />
      
      <motion.h2
        className="text-5xl md:text-6xl font-heading font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Extracurricular</span> Excellence
      </motion.h2>
      
      <motion.p
        className="text-lg text-white/70 text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        My extracurricular portfolio spans four major categories demonstrating holistic development beyond technical expertise. Click on any activity card to view detailed information.
      </motion.p>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all text-lg font-medium ${
              activeTab === tab.id 
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' 
                : 'bg-dark-700 text-white/70 hover:bg-dark-600'
            }`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>
      
      {/* Category Carousel */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <CategoryCarousel 
          activities={activities[activeTab as keyof typeof activities]} 
          categoryName={tabs.find(tab => tab.id === activeTab)?.label || ''}
        />
      </motion.div>
      
      {/* Summary Statistics */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="glass-card p-6 text-center">
          <BookOpen className="text-blue-400 mx-auto mb-3" size={32} />
          <h4 className="text-2xl font-bold text-white mb-1">3</h4>
          <p className="text-white/70">Senior Diplomas with 1st Division</p>
        </div>
        <div className="glass-card p-6 text-center">
          <Trophy className="text-yellow-400 mx-auto mb-3" size={32} />
          <h4 className="text-2xl font-bold text-white mb-1">10</h4>
          <p className="text-white/70">Total Medals Won</p>
        </div>
        <div className="glass-card p-6 text-center">
          <Users className="text-purple-400 mx-auto mb-3" size={32} />
          <h4 className="text-2xl font-bold text-white mb-1">15,000+</h4>
          <p className="text-white/70">Students Represented</p>
        </div>
        <div className="glass-card p-6 text-center">
          <Heart className="text-red-400 mx-auto mb-3" size={32} />
          <h4 className="text-2xl font-bold text-white mb-1">300+</h4>
          <p className="text-white/70">Families Served</p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Extracurricular;