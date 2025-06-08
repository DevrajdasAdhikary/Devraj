import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SkillNode {
  name: string;
  level: number;
  category: string;
  position: [number, number, number];
  projects: string[];
  experiences: string[];
  color: string;
}

interface SkillTooltipProps {
  skill: SkillNode;
  visible: boolean;
}

const SkillTooltip: React.FC<SkillTooltipProps> = ({ skill, visible }) => {
  if (!visible) return null;

  return (
    <Html
      position={[0, 0, 0]}
      center
      style={{
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <div className="bg-dark-800/95 backdrop-blur-md border border-primary-500/30 rounded-lg p-4 max-w-xs shadow-xl">
        <h4 className="text-white font-semibold text-lg mb-2">{skill.name}</h4>
        <div className="text-primary-400 text-sm mb-3">
          Proficiency: {skill.level}% | {skill.category}
        </div>
        
        {skill.projects.length > 0 && (
          <div className="mb-3">
            <h5 className="text-secondary-400 font-medium text-sm mb-1">Used in Projects:</h5>
            <ul className="text-white/80 text-xs space-y-1">
              {skill.projects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-400 mr-1">•</span>
                  {project}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {skill.experiences.length > 0 && (
          <div>
            <h5 className="text-secondary-400 font-medium text-sm mb-1">Used in Experience:</h5>
            <ul className="text-white/80 text-xs space-y-1">
              {skill.experiences.map((experience, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-400 mr-1">•</span>
                  {experience}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Html>
  );
};

const SkillsGlobe: React.FC = () => {
  const globeRef = useRef<THREE.Group>(null);
  const legendRef = useRef<THREE.Group>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);
  const [hoveredPosition, setHoveredPosition] = useState<[number, number, number]>([0, 0, 0]);
  const { camera } = useThree();
  
  // Comprehensive skills mapping with projects and experiences
  const skills: SkillNode[] = useMemo(() => [
    // Programming Languages
    {
      name: 'Python',
      level: 95,
      category: 'Programming',
      position: [0, 2.8, 0],
      color: '#3776ab',
      projects: [
        'Dark Pattern Buster Extension (RoBERTa implementation)',
        'NaviMitra Vessel Traffic Management',
        'Smart India Hackathon Maritime AI',
        'RAG System with Google Flan-T5',
        'EmoGenX Emotion Generation'
      ],
      experiences: [
        'QNext.ai - REST API microservices',
        'Krutrim Strategy Analysis',
        'Finlatics Market Analysis'
      ]
    },
    {
      name: 'C++',
      level: 85,
      category: 'Programming',
      position: [2.5, 1.8, 0],
      color: '#00599c',
      projects: [
        'Maritime AI algorithms optimization',
        'Performance-critical components'
      ],
      experiences: [
        'NaviMitra - Core algorithm development'
      ]
    },
    {
      name: 'MATLAB',
      level: 90,
      category: 'Programming',
      position: [-2.2, 2.0, 0],
      color: '#e16737',
      projects: [
        'Financial modeling and analysis',
        'Maritime trajectory prediction',
        'Statistical analysis tools'
      ],
      experiences: [
        'Finlatics - Quantitative analysis',
        'IIT Kharagpur - Research projects'
      ]
    },
    {
      name: 'JavaScript',
      level: 80,
      category: 'Programming',
      position: [1.8, 2.2, 1.5],
      color: '#f7df1e',
      projects: [
        'Dark Pattern Buster browser extension',
        'Portfolio website development'
      ],
      experiences: [
        'QNext.ai - Frontend integration'
      ]
    },

    // AI/ML Technologies
    {
      name: 'PyTorch',
      level: 90,
      category: 'AI/ML',
      position: [2.5, 0.5, 1.2],
      color: '#ee4c2c',
      projects: [
        'EmoGenX emotion detection models',
        'Deep learning architectures for maritime AI',
        'Custom neural network implementations'
      ],
      experiences: [
        'NaviMitra - Deep learning models',
        'QNext.ai - Model optimization'
      ]
    },
    {
      name: 'Transformers',
      level: 95,
      category: 'AI/ML',
      position: [-2.3, 0.8, 1.0],
      color: '#ff6b35',
      projects: [
        'Dark Pattern Buster (RoBERTa-based)',
        'RAG System with Google Flan-T5',
        'EmoGenX (GPT-2, T5, BART)',
        'LLM fine-tuning projects'
      ],
      experiences: [
        'QNext.ai - LangChain integration',
        'Research - Transformer architectures'
      ]
    },
    {
      name: 'OpenCV',
      level: 85,
      category: 'AI/ML',
      position: [2.0, 0.2, -1.5],
      color: '#5c3ee8',
      projects: [
        'Computer vision components in maritime AI',
        'Image processing for vessel detection'
      ],
      experiences: [
        'NaviMitra - Vision-based tracking'
      ]
    },
    {
      name: 'scikit-learn',
      level: 90,
      category: 'AI/ML',
      position: [-2.5, 0.3, -1.0],
      color: '#f7931e',
      projects: [
        'Traditional ML models for comparison',
        'Feature engineering and selection',
        'Model evaluation and validation'
      ],
      experiences: [
        'Finlatics - Statistical modeling',
        'Research - Baseline model development'
      ]
    },
    {
      name: 'LLMs',
      level: 95,
      category: 'AI/ML',
      position: [0, 0.5, 2.7],
      color: '#9b59b6',
      projects: [
        'RAG System with Google Flan-T5',
        'Newsletter generation system',
        'Quantization optimization (4-bit)',
        'Custom LLM fine-tuning'
      ],
      experiences: [
        'QNext.ai - Dynamic content generation',
        'Krutrim - AI market analysis'
      ]
    },
    {
      name: 'Computer Vision',
      level: 90,
      category: 'AI/ML',
      position: [1.5, -0.5, 2.0],
      color: '#e74c3c',
      projects: [
        'Vessel detection and tracking',
        'Maritime surveillance systems'
      ],
      experiences: [
        'NaviMitra - Vision-based solutions'
      ]
    },
    {
      name: 'NLP',
      level: 90,
      category: 'AI/ML',
      position: [-1.8, -0.3, 2.2],
      color: '#3498db',
      projects: [
        'Dark Pattern Buster text analysis',
        'EmoGenX emotion classification',
        'Content generation systems'
      ],
      experiences: [
        'QNext.ai - Text processing pipelines'
      ]
    },

    // Data Science & Analytics
    {
      name: 'NumPy',
      level: 95,
      category: 'Data Science',
      position: [1.8, -1.5, 1.2],
      color: '#013243',
      projects: [
        'All machine learning projects',
        'Numerical computations',
        'Array processing for maritime data'
      ],
      experiences: [
        'Used across all technical roles'
      ]
    },
    {
      name: 'Pandas',
      level: 95,
      category: 'Data Science',
      position: [-1.5, -1.8, 1.0],
      color: '#150458',
      projects: [
        'Data preprocessing for all ML projects',
        'Financial data analysis',
        'Maritime dataset processing'
      ],
      experiences: [
        'Finlatics - Market data analysis',
        'Krutrim - Company data processing'
      ]
    },
    {
      name: 'Power BI',
      level: 85,
      category: 'Data Science',
      position: [0, -2.2, 1.5],
      color: '#f2c811',
      projects: [
        'Business intelligence dashboards',
        'Performance metrics visualization'
      ],
      experiences: [
        'Krutrim - Market analysis dashboards',
        'NaviMitra - Business metrics'
      ]
    },
    {
      name: 'Tableau',
      level: 80,
      category: 'Data Science',
      position: [0, -2.0, -1.8],
      color: '#e97627',
      projects: [
        'Interactive data visualizations',
        'Financial performance dashboards'
      ],
      experiences: [
        'Finlatics - Investment analysis',
        'Academic projects'
      ]
    },
    {
      name: 'Statistical Modeling',
      level: 90,
      category: 'Data Science',
      position: [2.2, -1.0, -1.2],
      color: '#2ecc71',
      projects: [
        'Financial risk assessment models',
        'Predictive analytics for maritime',
        'Time series forecasting'
      ],
      experiences: [
        'Finlatics - Quantitative modeling',
        'IIT Kharagpur - Research'
      ]
    },

    // Cloud & DevOps
    {
      name: 'AWS',
      level: 80,
      category: 'Cloud/DevOps',
      position: [0, -2.7, 0],
      color: '#ff9900',
      projects: [
        'NaviMitra cloud infrastructure',
        'Scalable ML model deployment'
      ],
      experiences: [
        'NaviMitra - Production deployment',
        'QNext.ai - Cloud services'
      ]
    },
    {
      name: 'Docker',
      level: 75,
      category: 'Cloud/DevOps',
      position: [1.8, -2.2, 0],
      color: '#2496ed',
      projects: [
        'Containerized ML applications',
        'Microservices deployment'
      ],
      experiences: [
        'QNext.ai - Containerization',
        'NaviMitra - Service orchestration'
      ]
    },
    {
      name: 'Git',
      level: 90,
      category: 'Cloud/DevOps',
      position: [-1.5, -2.5, 0],
      color: '#f05032',
      projects: [
        'Version control for all projects',
        'Collaborative development'
      ],
      experiences: [
        'Used across all professional roles'
      ]
    },
    {
      name: 'REST API',
      level: 85,
      category: 'Cloud/DevOps',
      position: [2.5, -1.5, -0.8],
      color: '#61dafb',
      projects: [
        'Newsletter generation API',
        'Maritime data services',
        'Integration endpoints'
      ],
      experiences: [
        'QNext.ai - Microservices architecture',
        'NaviMitra - API development'
      ]
    },

    // Frameworks & Tools
    {
      name: 'Flask',
      level: 85,
      category: 'Frameworks',
      position: [-2.5, -1.2, -0.5],
      color: '#000000',
      projects: [
        'Web API development',
        'ML model serving endpoints'
      ],
      experiences: [
        'QNext.ai - Backend services',
        'Personal projects'
      ]
    },
    {
      name: 'LangChain',
      level: 88,
      category: 'Frameworks',
      position: [0.8, 1.2, -2.5],
      color: '#1c3d5a',
      projects: [
        'RAG System implementation',
        'LLM application development',
        'Dynamic content generation'
      ],
      experiences: [
        'QNext.ai - Content pipeline integration'
      ]
    },

    // Financial Engineering
    {
      name: 'Financial Modeling',
      level: 90,
      category: 'Finance',
      position: [-0.8, 1.8, -2.2],
      color: '#27ae60',
      projects: [
        'Portfolio optimization models',
        'Risk assessment frameworks',
        'Pricing model development'
      ],
      experiences: [
        'Finlatics - Quantitative analysis',
        'Krutrim - GPU pricing models',
        'IIT Kharagpur - Academic research'
      ]
    },
    {
      name: 'Time Series Analysis',
      level: 85,
      category: 'Finance',
      position: [1.2, -0.8, -2.3],
      color: '#8e44ad',
      projects: [
        'Market trend prediction',
        'Financial forecasting models'
      ],
      experiences: [
        'Finlatics - Historical data analysis'
      ]
    }
  ], []);

  // Rotate only the globe, not the legend
  useFrame((state) => {
    if (globeRef.current && !hoveredSkill) {
      globeRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  // Get size based on skill level
  const getSkillSize = (level: number): number => {
    return 0.08 + (level / 100) * 0.15;
  };

  const handleSkillHover = (skill: SkillNode, position: [number, number, number]) => {
    setHoveredSkill(skill);
    setHoveredPosition(position);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <group>
      {/* Globe container - only this rotates */}
      <group ref={globeRef}>
        {/* Main sphere wireframe - more visible */}
        <Sphere args={[3.0, 32, 32]} position={[0, 0, 0]}>
          <meshBasicMaterial 
            color="#1e293b" 
            wireframe 
            opacity={0.4} 
            transparent 
          />
        </Sphere>
        
        {/* Inner sphere for depth - more visible */}
        <Sphere args={[2.5, 24, 24]} position={[0, 0, 0]}>
          <meshBasicMaterial 
            color="#0f172a" 
            wireframe 
            opacity={0.25} 
            transparent 
          />
        </Sphere>
        
        {/* Skill nodes */}
        {skills.map((skill, index) => (
          <group key={index} position={skill.position}>
            <mesh
              onPointerEnter={() => handleSkillHover(skill, skill.position)}
              onPointerLeave={handleSkillLeave}
            >
              <sphereGeometry args={[getSkillSize(skill.level), 16, 16]} />
              <meshStandardMaterial 
                color={skill.color} 
                emissive={skill.color}
                emissiveIntensity={hoveredSkill?.name === skill.name ? 0.8 : 0.4}
                metalness={0.8}
                roughness={0.2}
                transparent
                opacity={hoveredSkill?.name === skill.name ? 1 : 0.9}
              />
            </mesh>
            
            {/* Skill label */}
            <Text
              position={[0, getSkillSize(skill.level) + 0.2, 0]}
              fontSize={0.12}
              color="white"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#000000"
            >
              {skill.name}
            </Text>
            
            {/* Level indicator */}
            <Text
              position={[0, -getSkillSize(skill.level) - 0.15, 0]}
              fontSize={0.08}
              color="#64ffda"
              anchorX="center"
              anchorY="middle"
            >
              {skill.level}%
            </Text>
            
            {/* Pulsing ring for high-level skills */}
            {skill.level >= 90 && (
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[getSkillSize(skill.level) + 0.05, getSkillSize(skill.level) + 0.1, 32]} />
                <meshBasicMaterial 
                  color={skill.color} 
                  transparent 
                  opacity={0.4}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}
          </group>
        ))}
        
        {/* Tooltip */}
        {hoveredSkill && (
          <group position={[hoveredPosition[0], hoveredPosition[1] + 1, hoveredPosition[2]]}>
            <SkillTooltip skill={hoveredSkill} visible={true} />
          </group>
        )}
      </group>
      
      {/* Fixed Category legend - doesn't rotate, positioned to be fully visible */}
      <group ref={legendRef} position={[5.5, 0, 0]}>
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.18}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          Categories
        </Text>
        
        {['Programming', 'AI/ML', 'Data Science', 'Cloud/DevOps', 'Frameworks', 'Finance'].map((category, index) => (
          <group key={category} position={[0, 2 - index * 0.4, 0]}>
            <mesh>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshBasicMaterial 
                color={
                  category === 'Programming' ? '#3776ab' :
                  category === 'AI/ML' ? '#ee4c2c' :
                  category === 'Data Science' ? '#013243' :
                  category === 'Cloud/DevOps' ? '#ff9900' :
                  category === 'Frameworks' ? '#1c3d5a' :
                  '#27ae60'
                } 
              />
            </mesh>
            <Text
              position={[0.3, 0, 0]}
              fontSize={0.12}
              color="white"
              anchorX="left"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#000000"
            >
              {category}
            </Text>
          </group>
        ))}
        
        {/* Instructions */}
        <Text
          position={[0, -2.8, 0]}
          fontSize={0.1}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          Hover for details
        </Text>
        <Text
          position={[0, -3.2, 0]}
          fontSize={0.1}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          Drag to rotate
        </Text>
      </group>
    </group>
  );
};

export default SkillsGlobe;