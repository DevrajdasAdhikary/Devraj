import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GeometricBackground from './GeometricBackground';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Sections that should use geometric background
  const geometricSections = ['about', 'skills', 'projects', 'experience', 'achievements', 'extracurricular', 'contact'];
  const useGeometricBg = geometricSections.includes(id);

  if (useGeometricBg) {
    return (
      <section
        id={id}
        className={`py-20 md:py-28 relative ${className}`}
        ref={ref}
      >
        <GeometricBackground>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container relative z-10"
          >
            {children}
          </motion.div>
        </GeometricBackground>
      </section>
    );
  }

  // Default section wrapper for other sections (like hero)
  return (
    <section
      id={id}
      className={`py-20 md:py-28 relative ${className}`}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;