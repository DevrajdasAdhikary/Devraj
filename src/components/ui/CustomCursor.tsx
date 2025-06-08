import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMouseContext } from '../../context/MouseContext';

const CustomCursor: React.FC = () => {
  const { cursorVariant, cursorText, updateCursorPosition, cursorPosition } = useMouseContext();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [updateCursorPosition]);

  const getSniperCursor = () => {
    const baseSize = 40;
    const centerDotSize = 4;
    
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Crosshair lines */}
        <div className="absolute w-8 h-px bg-red-500 opacity-80" />
        <div className="absolute w-px h-8 bg-red-500 opacity-80" />
        
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500 opacity-60" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500 opacity-60" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500 opacity-60" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500 opacity-60" />
        
        {/* Center dot */}
        <div className="absolute w-1 h-1 bg-red-500 rounded-full" />
        
        {/* Outer circle */}
        <div className="absolute w-10 h-10 border border-red-500/40 rounded-full" />
        
        {/* Text display for links */}
        {cursorVariant === 'link' && cursorText && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-red-600/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {cursorText}
          </div>
        )}
      </div>
    );
  };

  const getDefaultCursor = () => (
    <div className="w-full h-full bg-red-500/50 rounded-full border border-red-500/80 shadow-lg shadow-red-500/30">
      <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-white/40 rounded-full blur-[1px]" />
    </div>
  );

  const getCursorSize = () => {
    switch (cursorVariant) {
      case 'text': return { width: 8, height: 8 };
      case 'link': 
      case 'button': return { width: 50, height: 50 };
      default: return { width: 20, height: 20 };
    }
  };

  const size = getCursorSize();
  const isInteractive = cursorVariant === 'link' || cursorVariant === 'button';

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        animate={{
          x: cursorPosition.x - size.width / 2,
          y: cursorPosition.y - size.height / 2,
          width: size.width,
          height: size.height,
        }}
        transition={{
          type: 'spring',
          damping: isInteractive ? 15 : 20,
          stiffness: isInteractive ? 300 : 400,
          mass: 0.3,
        }}
      >
        {isInteractive ? getSniperCursor() : getDefaultCursor()}
      </motion.div>

      {/* Trailing effect - only for default cursor */}
      {!isInteractive && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-red-500/30 shadow-lg shadow-red-500/40"
          animate={{
            x: cursorPosition.x - 6,
            y: cursorPosition.y - 6,
            width: 12,
            height: 12,
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 200,
            mass: 0.8,
          }}
        />
      )}

      {/* Pulse effect for interactive elements */}
      {isInteractive && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] border border-red-500/30 rounded-full"
          animate={{
            x: cursorPosition.x - 30,
            y: cursorPosition.y - 30,
            width: 60,
            height: 60,
            scale: [1, 1.2, 1],
          }}
          transition={{
            scale: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: {
              type: 'spring',
              damping: 25,
              stiffness: 250,
            },
            y: {
              type: 'spring',
              damping: 25,
              stiffness: 250,
            }
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;