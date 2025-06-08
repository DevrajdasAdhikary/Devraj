import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <motion.div 
        className="flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: { 
            duration: 0.5,
            ease: "easeOut"
          }
        }}
        exit={{ 
          scale: 0.8, 
          opacity: 0,
          transition: { 
            duration: 0.3,
            ease: "easeIn"
          }
        }}
      >
        <motion.div
          animate={{ 
            rotate: 360,
            transition: { 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <Code size={60} className="text-primary-500 mb-6" />
        </motion.div>
        
        <motion.div 
          className="h-2 w-40 bg-dark-700 rounded-full overflow-hidden"
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-600"
            initial={{ width: "0%" }}
            animate={{ 
              width: "100%",
              transition: { 
                duration: 1.8, 
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
        
        <motion.p 
          className="mt-4 text-lg font-medium text-white/80"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 0.3, duration: 0.5 }
          }}
        >
          Loading Portfolio...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;