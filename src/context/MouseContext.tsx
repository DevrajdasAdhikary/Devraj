import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

type CursorVariant = 'default' | 'text' | 'link' | 'button' | 'hidden';

interface MouseContextType {
  cursorVariant: CursorVariant;
  cursorText: string;
  setCursorVariant: (variant: CursorVariant) => void;
  setCursorText: (text: string) => void;
  cursorPosition: { x: number; y: number };
  updateCursorPosition: (x: number, y: number) => void;
  createRipple: (x: number, y: number) => void;
}

const MouseContext = createContext<MouseContextType | undefined>(undefined);

export const MouseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  const updateCursorPosition = useCallback((x: number, y: number) => {
    setCursorPosition({ x, y });
  }, []);

  const createRipple = useCallback((x: number, y: number) => {
    const ripple = document.createElement('div');
    ripple.className = 'cursor-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    document.body.appendChild(ripple);

    setTimeout(() => {
      document.body.removeChild(ripple);
    }, 600);
  }, []);

  // Add click event listener for ripple effect
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [createRipple]);

  return (
    <MouseContext.Provider
      value={{
        cursorVariant,
        cursorText,
        setCursorVariant,
        setCursorText,
        cursorPosition,
        updateCursorPosition,
        createRipple,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export const useMouseContext = (): MouseContextType => {
  const context = useContext(MouseContext);
  if (context === undefined) {
    throw new Error('useMouseContext must be used within a MouseProvider');
  }
  return context;
};