import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useMouseContext } from '../../context/MouseContext';

interface ActivityItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  achievements: string[];
}

interface CategoryCarouselProps {
  activities: ActivityItem[];
  categoryName: string;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ activities, categoryName }) => {
  const { setCursorVariant, setCursorText } = useMouseContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && activities.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, activities.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  const handleActivityClick = (activity: ActivityItem) => {
    setSelectedActivity(activity);
    setIsAutoPlaying(false);
  };

  const handleCloseModal = () => {
    setSelectedActivity(null);
    setIsAutoPlaying(true);
  };

  if (activities.length === 0) return null;

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        className="relative h-80 bg-dark-800/30 rounded-xl overflow-hidden border border-dark-600"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Activity Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 flex"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div 
              className="w-full h-full relative cursor-pointer group"
              onClick={() => handleActivityClick(activities[currentIndex])}
              onMouseEnter={() => {
                setCursorVariant('button');
                setCursorText('View Details');
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setCursorText('');
              }}
            >
              {/* Gradient Background */}
              <div className={`w-full h-full ${activities[currentIndex].gradient} transition-all duration-500 group-hover:scale-105`} />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
                    {activities[currentIndex].icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {activities[currentIndex].title}
                    </h4>
                    <p className="text-primary-400 text-sm">
                      {activities[currentIndex].organization}
                    </p>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm mb-2 line-clamp-2">
                  {activities[currentIndex].description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-secondary-400 text-sm">
                    {activities[currentIndex].period}
                  </span>
                  <span className="text-accent-400 text-sm">
                    Click for details →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {activities.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-dark-700/80 transition-all z-10"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-dark-700/80 transition-all z-10"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {activities.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary-500 w-6' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              />
            ))}
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-primary-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
          {categoryName}
        </div>
      </div>

      {/* Activity Details Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            className="fixed inset-0 bg-dark-900/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-600"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden">
                <div className={`w-full h-full ${selectedActivity.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent"></div>
                
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 bg-dark-800/80 p-2 rounded-full text-white/80 hover:text-white transition-colors"
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <X size={20} />
                </button>
                
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
                    {selectedActivity.icon}
                  </div>
                  <div>
                    <span className="bg-primary-500 text-white text-xs px-3 py-1 rounded-full">
                      {categoryName}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2">{selectedActivity.title}</h3>
                <div className="flex items-center gap-4 text-white/70 mb-6">
                  <span className="font-medium text-primary-400">{selectedActivity.organization}</span>
                  <span>{selectedActivity.period}</span>
                </div>
                
                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                  {selectedActivity.description}
                </p>
                
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleCloseModal}
                    className="btn-outline"
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryCarousel;